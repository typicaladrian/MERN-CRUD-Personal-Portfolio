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

***Git push created on November 11th, 2024, 8:27PM***