# Ingredia - GPT-3 recipe generator app

This is a generic recipe generator app based off of the example app used in the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/) and [Magic](https://magic.link) for cookie-based, passwordless authentication with email-based magic links.


## How to use

Clone the repository:

```bash
git clone git@github.com:MaxSchmitz/ingredia.git
```

## Configuration

Login to the [Magic Dashboard](https://dashboard.magic.link/) and get the keys of your application

![Magic Dashboard](https://gblobscdn.gitbook.com/assets%2F-M1XNjqusnKyXZc7t7qQ%2F-M3HsSftOAghkNs-ttU3%2F-M3HsllfdwdDmeFXBK3U%2Fdashboard-pk.png?alt=media&token=4d6e7543-ae20-4355-951c-c6421b8f1b5f)

Next, copy the `.env.local.example` file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY` should look like `pk_test_abc` or `pk_live_ABC`
- `MAGIC_SECRET_KEY` should look like `sk_test_ABC` or `sk_live_ABC`
- `TOKEN_SECRET` should be a string with at least 32 characters

Login to the [OpenAI API](https://beta.openai.com/account/api-keys) and get the keys of your application and add to `.env.local`:

- `OPENAI_API_KEY` should be your api key from openapi


Now, run Next.js in development mode

```bash
npm run dev
# or
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! 