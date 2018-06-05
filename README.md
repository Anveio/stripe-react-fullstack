# Stripe React-Redux Starter Kit

This repo contains code for a web application that can process card payments via Stripe. The client application is built with React, Redux, and TypeScript and sends requests to the server application which is built with Express and connects to a MongoDB database.

### Client-side features

- Fast single page app built with TypeScript, React, and Redux
- User signup
- User authentication via JWT.
- Client-side routing with React Router v4.
- Payment with Stripe-styled checkout button.

### Server-side features

- User signups saved in MongoDB.
- Card payment processing.

Includes user signup/authentication with JWT and payment authorization with Stripe on the server.

## Deploying

The code in the `client` folder and and the code in the `server` folder can be deployed completely independent of each other. This guide will contain instructions for deploying the client to Netlify, a static hosting site, and deploying the server to Heroku.

To get started, fork this repo (or clone it and create a new repo under your GitHub account).

### Deploying the client to Netlify

Netlify is free and deploys work through Git. Log into Netlify, click the "New site from Git" button, connect your GitHub account, and select the repo you just created.

The build command for the client is the `build-client` script located in the `package.json` at the project root. The assets Netlify should server to users are located in the `client/build` folder. Use these to fill in the "Build command" and "Publish directory" inputs in Netlify's deploy settings UI.

<figure>
<img src="https://i.imgur.com/KYunrA5.png">
<figcaption>Build command should be "build-client" and publish directory should be "client/build" </figcaption>
</figure>

The site should successfully deploy under a URL that looks like this `https:example-name-12345.netlify.com` (not a real website). Take note of the the frontend's URL since you'll need it to set up CORS on the server. If you have a custom domain you'd like to use instead, [Netlify makes that easy](https://www.netlify.com/docs/custom-domains/) and you can use that custom domain for the next step.

Take note that, although the site may be live, you won't be able to create an account on it as the API server is not yet deployed and the client isn't configured to send requests to the correct URL.

### Configuring the server.

Four piece of information are required to configure the server:

1.  The URL of our frontend (to configure CORS).
2.  A JWT secret.
3.  A Stripe API secret key.
4.  The URI of our MongoDB database.

If you've deployed the client in the previous section then you already have #1. To configure the URL of the frontend open the file at `server/constants/frontend.js` and replace the existing string assigned to `FRONTEND_PROD_URLS` to the URL of the site you just deployed to Netlify. `FRONTEND_PROD_URLS` is an array in case you want to add additional websites that send requests to this server.

To get started with steps 2, 3 and 4, start by adding a `variables.env` file to the server folder.

**It's important that the file end in `.env` so that it's picked up by .gitignore and so that it's read by the server when running locally. Make sure you don't upload its contents to a repo somewhere because it will contain sensitive information.**

```shell
touch server/variables.env
cat server/variables.template.txt >> server/variables.env
```

The above commands will create a file called `variables.env` in the server folder and copy the contents of `server/variables.template.txt` into it.

To knock out step #2, open the `variables.env` file you just created. you can set any string as `JWT_SECRET` but make sure the string you use is of a decent length (at least 16 characters).

For step #3 you'll need a Stripe account. Login to your stripe account and navigate to [your dashboard and click on the "API keys" tab.](https://dashboard.stripe.com/account/apikeys)

Copy the token for the "Publishable key" and paste it as the value of `STRIPE_PUBLISHABLE_TEST_KEY` in the file located at `client/src/constants/index.ts`. Click to reveal the "Secret key", copy it, and paste it as the value for `STRIPE_SECRET_TEST` in the `variables.env` file for the server.

<figure>
<img src="https://i.imgur.com/ABGHIUP.png">
<figcaption>The "Publishable key" will live on the client, the "Secret key" will live on the server.</figcaption>
</figure>

With the Stripe API keys set up, you'll need to create two MongoDB databases: one to use for local development and one to use in production. To do that, you'll need to pick a hosting provider. One good free solution is [Mlab](https://mlab.com/home). After creating an account and logging in, click the "Create new" button under "Mongo DB Deployments". After that, select the "Sandbox" plan type to keep things free. If you choose to change your mind, you can upgrade to a paid plan later.

<figure>
<img src="https://i.imgur.com/tfCM5Lx.png">
<figcaption>Select the "Sandbox" option under Plan Type.</figcaption>
</figure>

After your database is created copy the MongoDB URI displayed by Mlab and paste it as the value of `DEV_DATABASE` in your `variables.env` file. Make sure to replace `<dbuser>` and `<dbpassword>` with the database's actual username password.

<figure>
<img src="https://i.imgur.com/yTlLgl7.png">
<figcaption>Copy the MongoDB URI in the fourth line. Replace dbuser and dbpassword with the database's actual username password.</figcaption>
</figure>

Create another database in Mlab to use for production. Copy the MongoURI of this new database and save it for later. Since `variables.env` is only read from during development, you don't need to paste it there. You'll use the MongoURI of your production database as an environment variable in Heroku later.

### Deploying the server to Heroku

Since Netlify is only for serving static assets, we can't use it to host our express server. For that there are many options, but I'll be outlining the steps to host it for free on Heroku. First, you'll need to [install the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#standalone-installation). If you've already done this, skip this step.

```shell
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

Like Netlify, Heroku deployments work via Git. If you've configured the URL of the frontend in `server/constants/frontend.js` first commit your changes.

```shell
git commit -am "Configure correct frontend URL."
```

To deploy, at the project root run the following commands:

```shell
git remote rm heroku
heroku create
```

`git remote rm heroku` will destroy heroku remote that already exists if you've cloned or forked this repository.

`heroku create` will deploy an empty application to Heroku and create a remote to push to trigger a deploy. You may need to enter your Heroku credentials for this command to work.

Take note of the URL of the application you've deployed to Heroku. You'll need it for the next step.

After you've created an empty application with `heroku create`, you'll need to configure some environment variables before the site will be functional. Open the [apps dashboard](https://dashboard.heroku.com/apps) while logged into Heroku. Select the app you just created and navigate to the "Settings" tab. Click the "Reveal Config Vars" button and enter the appropriate values for the following variables:

- JWT_SECRET should be the same as it is in your `variables.env` file.
- STRIPE_SECRET_TEST should be the same as it is in your `variables.env` file.
- PROD_DATABASE should be used instead of DEV_DATABASE. Enter in the Mongo URI of the production database you created earlier.

Now you're ready to deploy the server. `git push heroku master` will deploy the application to Heroku.

### Configuring the front end.

The front end needs two more pieces of information:

1.  The URL of the website you deployed to Netlify
2.  The URL of the website you deployed to Heroku

You can configure these variables in the file located at `client/src/constants/index`.

`PRODUCTION_FRONTEND_HOSTNAME` should equal the name of the website you deployed to Netlify. Make sure to remove the "https://" at the beginning.

`PRODUCTION_API_HOSTNAME` should equal the name of the website you deployed to Heroku. Make sure to remove the "https://" at the beginning.

`STRIPE_PUBLISHABLE_TEST_KEY` also needs to be configured but that was already done in a previous step.
