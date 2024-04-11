# Home Shop - Frontend

💫 Welcome! 🎉

This frontend is responsible to building a React/Tailwind app that will render the React Components.

## Technologies
- ReactJS
- Tailwind
- Shadcn UI
- Axios
- Tanstack Query V5
- Zod
- React Hook forms
- Zustand
- Framer Motion
- Sonner (Toast)
- Typescript

## Pages
This project has two pages:

### | Home
This page is responsible to show a product list and filters ans options to sort.

### | New Product
This page is responsible to request to API to create a new component, and invalidate query to get product list again in API.

## Getting Set Up

The FRONTEND requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.

1. In the repo root directory, run `pnpm install` to gather all dependencies.

1. Then run `pnpm dev` which should start the server.

1. The frontend is pointing to the api with port `3000`, if the API is running on a different port it will be necessary to change the `src/api/products.ts` file.

## Thank You