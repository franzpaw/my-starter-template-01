# Authentication Best Practices with Clerk, Next.js 15 (App Router) and Prisma

## Protecting Routes and Server Actions

### Security Best Practices
- Never expose database operations on the client
- Always use server actions for data modifications
- Protect all routes that handle sensitive operations
- Cross-reference user IDs with database records
- Implement proper role-based access control
- Use short-lived authentication tokens
- Validate all user input server-side

### 1. Configure Protected Routes with Middleware

First, protect your routes using Clerk's middleware <sup><a href="#">3</a></sup>:

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
const isProtectedRoute = createRouteMatcher(['/app(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
```
### 2. Protect Server Actions
For server actions, use the auth() helper 

```tsx
// actions.ts
import { auth } from '@clerk/nextjs/server'

export default async function addItem(formData: FormData) {
  'use server'
  
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('You must be signed in to add an item')
  }
  
  // Your prisma operations here
}
```


### 3. Database Operations Best Practices
When performing database operations:

1. Always verify user authentication first
2. Cross-reference the requesting user's ID with records
3. Only allow operations on data owned by the authenticated user
4. Use server actions for all data modifications
Example secure server action :
```tsx
'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createItem(formData: FormData) {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const title = formData.get('title') as string
  if (!title?.trim()) {
    throw new Error('Title is required')
  }

  await prisma.item.create({
    data: {
      title: title.trim(),
      owner_id: userId, // Always associate data with the authenticated user
    },
  })

  revalidatePath('/app')
}
```


### 4. Implement RBAC (Role Based Access Control)
Setup Session Token Claims 3:
1. Navigate to Clerk Dashboard -> Sessions
2. Add this to customize session token:
```json
{
  "metadata": "{{user.public_metadata}}"
}
```

Create TypeScript Definitions :
```tsx
// types/globals.d.ts
export {}

export type Roles = 'admin' | 'moderator'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}
```

Create Role Check Helper :
```tsx
// utils/roles.ts
import { Roles } from '@/types/globals'
import { auth } from '@clerk/nextjs/server'

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth()
  return sessionClaims?.metadata.role === role
}
```

Protect Admin Routes :
```tsx
// app/admin/page.tsx
import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const isAdmin = await checkRole('admin')
  if (!isAdmin) {
    redirect('/')
  }
  
  return <div>Admin Dashboard</div>
}
```
