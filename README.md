# Frotend for Magic Go API

This Next.js app authenticates the user and generates the [Decentralised ID Token (DIDT)](https://docs.magic.link/decentralized-id) required to access [Magic Go API](https://github.com/shahbaz17/magic-go-api).

# Package Dependencies:

- [Magic SDK](https://docs.magic.link/client-sdk/web/get-started): Allows users to sign up or log in.
- [SWR](https://github.com/vercel/swr): Lets us get user info using a hook.
- [@hapi/iron](https://hapi.dev/module/iron/): Lets us encrypt the login cookie for more security.

# Quickstart

## Magic Setup

1. Sign up for an account on [Magic](https://magic.link/).
2. Create an app.
3. Copy your app's Test Secret Key (you'll need it soon).

## Client Setup

1. `git clone https://github.com/shahbaz17/frontend-go-api`
2. `cd frontend-go-api`
3. `mv .env.local.example .env.local`
4. Populate .env.local with the correct Test keys from your Magic app:

   ```
   NEXT_PUBLIC_MAGIC_TEST_PUBLISHABLE_KEY=pk_test_XXXXX
   NEXT_PUBLIC_MAGIC_TEST_SECRET_KEY=sk_test_XXXXX
   NEXT_PUBLIC_HAPI_IRON_SECRET=this-is-a-secret-value-with-at-least-32-characters
   ```

   **Note**: The `HAPI_IRON_SECRET` is needed by @hapi/iron to encrypt an object. Feel free to leave the default value as is in dev.

5. yarn install
6. yarn dev
7. Generate your DID token by sign-up/login.

## Test with Postman

1. Follow the steps listed [here](https://github.com/shahbaz17/magic-go-api) to spin up your own local Go server.
2. You'll be passing the DID token you just generated as a Bearer token into the Postman Collection’s HTTP Authorization request header.
