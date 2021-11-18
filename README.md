# ReactApp

## Install Dependencies

### Node.js

Download the latest LTS version of Node.js from [here](https://nodejs.org/en/download/). The current latest LTS Version is 16.13.0 and it includes npm 8.1.0.

You can check which versions on Node.js and npm you have installed by running the following commands on your terminal:

```bash
node -v
npm -v
```

This is the output that you should see:

```bash
v16.13.0
8.1.0
```

## Running the React App

Install react-scripts using the following command:

```bash
npm install react-scripts
```

Install the dependencies using the following command:

```bash
npm install
```

To see your app live on localhost, run the following command:

```bash
npm run start
```

If you are getting the following error while running the app,

```bash
sh: react-scripts: command not found
```

Then run the following commands:

```bash
rm -rf node_modules
rm -rf package-lock.json
```

Install react-scripts using the following command:

```bash
npm install react-scripts
```

Install the dependencies using the following command:

```bash
npm install
```

Start the local server by running the following command:

```bash
npm run start
```

Note: If you are a Linux user then don't forget to add the `sudo` command before `npm`.
