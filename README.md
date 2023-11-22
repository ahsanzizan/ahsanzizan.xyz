## TODOs
- Add drive.google.com in the next.config.js' images domains list 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize custom Google Font.

# Documentation

## Database

This project uses mongoose to connect and make query to a MongoDB database.

#### Database Models

- Admin
- Project (Work)
- Blog
- Social Media

All of these models are available in the

```bash
    @/models/*.model.ts
```

#### Database Queries

The queries in this project are based on the database models. You can access the queries in

```bash
    @/lib/queries/*.query.ts
```
