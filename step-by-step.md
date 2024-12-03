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

### November 22nd, 2024
1. Create `ProjectCard.jsx` component to render a single project card that will be used throughout the application.
2. Create `AllProjects.jsx` to retrieve all project data from the database, and use the `ProjectCard` component to render each project as an individual card on the screen.
3. To `tailwind.config.js`, add `colors`, which allows us to use custom RGB values, as well as new fonts using `fontFamily`, to `theme` section.
4. Update `Project` backend model to include a short summary, as well as a list of technologies used.
5. UI improvements using TailwindCSS within the entire application.
6. Update `BackButton` component to allow arguments to be passed through for navigation purposes.

***Git commit created on November 22nd, 2024, 11:39pm.***

### December 1st, 2024
Back after a long illness and Thanksgiving break! Let's get this website deployed!
1. Update `./backend/index.js` to include static page rendering if in production mode.
2. In the root `package.json`, define scripts that will run in `build` and `start` commands.
    1. When running `build` script, we want to run `npm install` in both the backend and the frontend to install required dependencies, then afterwards build the frontend application.
    2. Following that, the `start` script is run to set the `NODE_ENV` environment variable to production and then `node backend/index.js` is run to start the server.
3. Small UI changes to the home page.
4. Push to GitHub to save current changes so that we can proceed with deployment.

***Git commit created on December 1st, 2024, 10:29pm.***

5. Update `./backend/index.js` to use `process.env` environment variables if `config.js` variables are not found.

***Git commit created on December 1st, 2024, 10:46pm.***

6. Head to render.com to start deployment of website.
    1. Log in, and select "New web service".
    2. Connect the GitHub repository of the website to Render.
    3. Update the "Build Command" and "Start Command" settings to match those found in the root `package.json` file.
    4. To "Environment Variables", add our `MONGO_URI` and `PORT` variables from our `config.js` file.
    5. Click "Deploy Web Service".

7. ISSUE: Deployment is failing on Render. Going to try to remove CORS policy middleware code as maybe this is the issue.

***Git commit created on December 1st, 2024, 11:13pm.***

8. ISSUE: New deployment error on Render. Need to get rid of `config.js` file and move everything to root `.env` file.
9. Install dotenv to backend using `npm install dotenv`.
    1. dotenv will be used to load environment variables into the application.
10. To `./backend/index.js`, add `dotenv.config()` line to file. Update lines to get rid of use of `config.js` variables. Delete `config.js`.
11. Make sure to add `.env` to `.gitignore` file.

***Git commit created on December 1st, 2024, 11:27pm.***

12. Add outbound IP address from Render to MongoDB allowed IP connections.
13. Deployment is now working.
14. ISSUE: Projects are not rendering on page.
    1. This is most likely due to the fact that the website URL for displaying all projects is the same as the address for the API.
    2. Fixes will be made tomorrow.

***Git commit created on December 2nd, 2024, 12:07am.***

### December 2nd, 2024
1. Make small UI changes to all pages.
2. Update API route.
3. Re-enable CORS policy for all origins.
4. These changes should address the issue found yesterday. Let's test it now by pushing the code to GitHub, and deploying on render.com

***Git commit created on December 2nd, 2024, 4:26pm.***

5. Issue still not fixed.
6. Use ChatGPT to try and adress the issue.
7. *POSSIBLE SOLUTION:* Change `axios.get()` calls to use the new render.com domain for our application.
    1. I realized that I am using `localhost:5555` to try and get data, which isn't running in our deployed application since all data is being hosted by render.com.
    2. Use `import.meta.env.VITE_API_URL` to import .env variables.
8. Change CORS policy to allow connections from ONLY our localhost:5173 Vite application or our render.com domain.
9. Push to Github main branch and re-render on render.com.

***Git commit created on December 2nd, 2024, 6:33pm.***

**Issue #1 fixed!** A lot was learned from this debugging session in regards to how websites are actually rendered and built for live deployment.

Lets move onto working on more issues, starting with the mobile UI, which doesnt seem to be appearing as expected.

10. Fix appearance of headshot image, which was due to the fact that the home page borders were not sized properly.

**Issue #2 fixed!** Learned that Tailwind uses a mobile-first breakpoint system, meaning that defining utilities and styles for a given screen size will affect all screen sizes at that point and *above*. This means that we should **first style for mobile**, then add breakpoints when needed.

***Git commit created on December 2nd, 2024, 8:30pm.***