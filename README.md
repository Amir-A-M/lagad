# In case I forget!
- Prerequisites: make sure to have node, git, WSL, and then docker installed
- add ENV Vars
- setup DB: npm run migrate
- Start DB: Start Docker. simply in VS Code right click on docker-compose.yml and click compose up (you may need to install docker plugin)
- start Dev Server: npm run dev

## sample ENV Vars
```
BASE_URL="http://localhost:3000"

DATABASE_URL="postgresql://DB_User:Pass@localhost:5432/DB_Name?schema=public"
POSTGRES_DB=DB_Name
POSTGRES_USER=DB_User
POSTGRES_PASSWORD=Pass

MAIL_HOST="mail.site.com"
MAIL_USER="lagad@site.com"
MAIL_PASS="2iE2wpMNb8En5quez8"

GITHUB_CLIENT_ID="95ac70387d6f60557d78"
GITHUB_CLIENT_SECRET="0ecc00071776b0dc7c77a093805702dfa5ce1ad5"

GOOGLE_CLIENT_ID="359707553204-td6vcs3fk3v8snp5mrsmho4u30hvh3vi.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
