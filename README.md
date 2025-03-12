This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Setup the `.env` file:

```
DATABASE_URI=postgresql://<user>:<password>@127.0.0.1:5432/<dbname>
# OR
POSTGRES_URL=your-connection-string-here
PAYLOAD_SECRET=YOUR_SECRET_HERE
```
The secret can be any given string

Run the development server:

```bash
npm run dev
```

After completing setup, and after making changes to the payload configuration or collections, run the following command to generate the typescript types:

```bash
payload generate:types
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Access the CMS via [http://localhost:3000/admin](http://localhost:3000/admin)

