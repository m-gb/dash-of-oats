# Dash of Oats :cake:
## Description
This web application is a cooking blog, including a servings calculator and a search function with suggestions.

It's designed as a microservice:
- using a NodeJS backend API written with TypeScript to retrieve the recipes from a mongoDB database. 
- using an Angular frontend also written with Typescript and Bootstrap to display the recipes.

The servings calculator uses a pipe to multiply the ingredient amounts (using Fraction.js) by the chosen servings.
The search function also uses a pipe to find recipes with the user's input.

You can view the website at https://dashofoats.mayagoldberg.net

## Development

In order to run the web application, you will need to have three separate tabs in the terminal:

- Install and run mongoDB
- Configure and run the backend:
    - Install the dependencies:
    ```bash
    dash-of-oats/backend $ npm install
    ```
    - Install jake:
    ```bash
    dash-of-oats/backend $ npm install -g jake
    ```
    - Populate the database:
    ```bash
    dash-of-oats/backend $ jake populate
    ```
    - Run the API:
    ```bash
    dash-of-oats/backend $ npm run dev
    ```
    - (Optional) Go to http://localhost:3000/api/v1/recipes
- Configure and run the frontend:
    - Install the dependencies:
    ```bash
    dash-of-oats/frontend $ npm install
    ```
    - Run the website:
    ```bash
    dash-of-oats/frontend $ npx g serve
    ```
    - Go to http://localhost:4200

## Testing

In order to run the tests:

- Backend:
```bash
dash-of-oats/backend $ npm test
```
- Frontend:
```bash
dash-of-oats/frontend $ npx ng test
```

- End-to-End:
```bash
dash-of-oats/frontend $ ng e2e
```
