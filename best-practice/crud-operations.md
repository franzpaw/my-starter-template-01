**CRUD-Operations:**

I’m using NextJS15 and Prisma as ORM. Follow best practice working with CRUD-Operations. Use:

- Server components for: GET
- server actions for: POST, PUT, DELETE
- route handler (API) for: Webhooks

Best-Practice Example for GET-Request and POST-Request in NextJS15:

```tsx
//app.page.tsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { createPost } from "@/lib/actions/actions";

export default async function PostsPage() {
  //Get-Request
  const posts = await prisma.post.findMany(); //better alternative: create in action.ts a dedicated function getPosts(). Use it here.

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts (0)</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border px-2 py-1 rounded-sm"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="border px-2 py-1 rounded-sm"
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          Create post
        </button>
      </form>

    </main>
  );
}
```

```tsx
//app/[slug]/page.tsx
import {prisma} from "@/lib/prisma";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
```

For nicer looking urls use slugs in the prisma-schema. eg:

```tsx
//schema/schema.prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  slug      String   @unique
  content   String
	//...
}
```

```tsx
//lib/actions/actions.ts
"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    try{
        await prisma.post.create({
            data: {
                title: formData.get("title") as string,
                slug: (formData.get("title") as string)
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^a-zA-Z0-9-]/g, ""),
                content: formData.get("content") as string,
            },
        });
    } catch (error){
        //Errorhandling here
    }
    

    revalidatePath("/")
}
```

**Caution**: zod-validation and clerk-rbac are here not provided. If required by the user always refer newest best practice from the official documentation:

- https://clerk.com/docs
- [Next.js: Implement basic Role Based Access Control (RBAC) with metadata](https://zod.dev/)