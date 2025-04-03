**File-Structure:**

```tsx
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── utils/
│   └── styles/
├── public/
├── package.json
└── next.config.js
```

```tsx
├── app/randomSite/
│   ├── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   └── not-found.tsx
```

```tsx
src/components/
├── ui/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Card/
│   └── Modal/
├── layout/
│   ├── Header/
│   ├── Footer/
│   └── Sidebar/
└── features/
    ├── auth/
    └── dashboard/
```

```tsx
src/
├── utils/
│   ├── formatting.ts
│   ├── validation.ts
│   └── helpers.ts
└── lib/
    ├── actions/
	│	└── actions.ts
    ├── auth.ts
    ├── api.ts
    └── database.ts
```

**Utils Directory**

The **`utils`** directory should contain pure utility functions that:

- Have no side effects
- Don't depend on external services
- Can be easily tested in isolation

Examples include:

- Date formatting functions
- String manipulation helpers
- Calculation utilities

**Lib Directory**

The **`lib`** directory is for more complex functionality that often:

- Interfaces with external services
- Contains business logic
- Manages state or side effects

Common examples include:

- API client configurations
- Authentication helpers
- Database connections