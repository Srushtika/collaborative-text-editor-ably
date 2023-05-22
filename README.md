This is a WIP demo of a collaborative text editor built with [Ably Collaboration SDK](https://github.com/ably-labs/spaces).

## How to run it locally

1. Sign up to Ably and [create a free account](https://ably.com/sign-up) to get your API Key.

2. Create a `.env` file and add your Ably API Key:

```
ABLY_API_KEY=<YOUR-ABLY-API-KEY>
```

3. Install Vue2 app's dependencies:

```
cd app
npm install
```

4. Switch to project root and install server's dependencies:

```
cd ..
npm install
```

5. Run the server:

```
node server.js
```

6. Open the app in the browser using the following URL (emulate multiple users by opening it in multiple tabs):

```
http://localhost:8082/
```
