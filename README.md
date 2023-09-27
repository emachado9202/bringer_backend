# Node TypeScript API

This project is a small REST API application developed in Node.js and TypeScript. The API provides two endpoints, Generate_Token and Tracking_parcel.

## Features
1. **Generate Token Endpoint**: 
    - Receives `login` and `password`.
    - Returns them as a JWT token.
2. **Tracking Parcel Endpoint**:
   - Receives `Tracking_number`.
   - Consumes a 3rd party endpoint and returns the JSON information to the frontend.

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/)
- [yarn](https://yarnpkg.com/getting-started/install) (comes with Node.js)

## Installing Dependencies

Navigate to the project directory and run the following command to install the required dependencies:

```sh
yarn
```

## Running the Application
After installing the dependencies, start the application using the following command:
```sh
yarn start
```
For development environment:
```sh
yarn dev
```
The API will be running at http://localhost:3001.

## Running Tests

To run the unit tests, execute the following command in the project directory:

```sh
npm test
```

## API Endpoints
1. **Generate Token**
    - **URL**: /generate_token
    - **Method**: POST
    - **Body Parameters**:
        - `login`: string
        - `password`: string
    - **Response**: JWT Token

2. **Tracking Parcel**
    - **URL**: /tracking_parcel?tracking_number=<TRACKING_NUMBER>
    - **Method**: GET
    - **URL Parameters**:
        - `tracking_number`: string
    - **Headers**:
       - `Authorization`: Bearer <TOKEN>
    - **Response**: JSON Information from the 3rd party endpoint.

## Project Structure

```lua
node-ts-api
│
├── src
│   ├── app.ts
│   ├── routes.ts
│
├── tests
│   ├── app.test.ts
│
├── tsconfig.json
├── jest.config.js
└── package.json
```

## Notes
- Consider using environment variables to store secret keys, tokens, and other sensitive information.
- Implement proper error handling and input validation for production use.
- Secure your application by using middlewares like Helmet for setting HTTP headers appropriately.