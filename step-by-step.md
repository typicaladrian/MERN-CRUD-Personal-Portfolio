# *MERN CRUD Personal Portfolio Documentation*
##### The following is a step by step guide to how the website was built, along with details of day by day progress and GitHub commit history.
---

### November 11th, 2024
1. Create `./backend` directory.
2. In the console, navigate to `./backend` and run `npm init -y` to initialize the backend portion of the project.
3. In `./backend/package.json`, add `"type": "module"` to the list of packages.
    - This enables/allows `import "xyz"` syntax in the source code.
4. In `./backend`, run `npm i express nodemon`.
    - **Express** is going to be our backend framework, while **nodemon** is going to allow us to see changes to our website live using instant refreshes on source code updates. 
5. In `./backend/package.json`, update `"scripts"` to include...
    - `"start": "node index.js"`
    - `"dev": "nodemon index.js"`
        - This tells the application to build using `index.js` when `npm run start` or `npm run dev` commands are used.
6. Create and populate `./backend/index.js`. This will be the starter of our project.
    1. Use Express.js to create HTTP Routes.
    2. Create HTTP route to home `'/'` using `app.get()`. First parameter is the route, second parameter is a callback function that will be run when route is taken.
    3. Use `npm i cors` to install cors software. Add middleware to solve CORS policy issues.
7. Create `./backend/config.js` file. This will essentially act as our .env file. Create and export `"PORT"` variable, which will be used in `index.js` to establish a connection to the port given when MongoDB database is created.
8. Create MongoDB database, and add url to `config.js`.
9. Install mongoose using `npm i mongoose`. Mongoose will be used to connect to our database.
    - Mongoose allows us to manipulate and use our MongoDB database with quick and easy javascript commands.
    - Mongoose provides a schema based solution, where you define models (ex. const Cat = mongoose.model('Cat', {name: String})) to use in your database.
10. Create `./backend/models` folder to hold our database models. Define database models in here.
11. Create `./backend/routes` directory.
12. Using `express.router()`, create all API endpoints. We create `./backend/routes/projectRoutes.js` to hold all of our routes for our personal project data.
    - By using `express.Router()`, you can organize your Express app's routing logic.
13. **The backend is now complete. You can use Postman to create HTTP requests and test the backend.**

***Git commit created on November 11th, 2024, 8:37PM.***

### November 20th, 2024
1. In the root directory, use `npm create vite@latest` to start building the frontend using Vite.
    1. Use "frontend" as the project name, React as the framework, and JavaScript for the variant settings.
2. Navigate to the new `./frontend` directory, and run `npm i` to install packages.
3. Install TailwindCSS using instructions on website -> https://tailwindcss.com/docs/guides/vite.
4. Delete `./frontend/src/App.css` as we do not need it since we are using TailwindCSS.
5. Delete contents of `./frontend/src/App.jsx` and replace with React.js boilerplate code (shortcut in VSCode is `rafce`).
    1. Ensure to wrap all routes of application within `<Routes>` tag.
6. Install react-router-dom using `npm i react-router-dom`. 
7. Install axios using `npm i axios`.
8. Install react-icons using `npm i react-icons`.
8. In `./frontend/src/main.jsx`, instead of wrapping the app within `<StrictMode>`, wrap within `<BrowserRouter>`.
    1. Using `<BrowserRouter>` allows the application to use React Routers within the entire application.
    2. Application routes can now be defined using `< Route path='/.../ element={ <Component/> } />`.
9. Create `./frontend/src/pages` directory.
    1. This directory will hold all of our pages that will be rendered in our app.
10. Create a `/` page that will route to our homepage. Make sure to render this page in our `App.jsx`.
11. Create `./frontend/src/components` directory.
    1. This folder will hold all of our components that will be reused throughout our application.
12. Create `<BackButton>` and `<Spinner>` components to be used throughout our application.
13. Create `ShowProject.jsx` to render an individual project with a project id being passed through.

***Git commit created on November 21st, 2024, 12:59PM.***