# FoodXP

FoodXP is a food expiry tracker web application designed to help users track the expiration dates of their food items. 

## Features

- Track food items and their expiry dates.
- Separate client and server setup.
- Production and development modes.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:
   ```bash
   cd foodxp
   ```

3. Install dependencies:
   ```bash
   npm run install
   ```

## Scripts

- `npm run start` - Runs the app in production or development mode based on `NODE_ENV`.
- `npm run start:prod` - Runs the app in production mode (only server-side).
- `npm run start:dev` - Runs both the client and server in development mode concurrently.
- `npm run client` - Runs only the client-side of the application.
- `npm run server` - Runs only the server-side of the application in development mode.
- `npm run build` - Builds the client-side of the application for production.

## Development

To start the application in development mode, run:

```bash
npm run start:dev
```

This will start both the client and server concurrently, allowing you to develop and test both parts at the same time.

## Building for Production

To build the client for production, run:

```bash
npm run build
```

