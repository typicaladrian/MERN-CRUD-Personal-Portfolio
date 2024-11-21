import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
import projectsRoute from "./routes/projectsRoute.js"
import cors from "cors";

// Instantiate Express application
const app = express();

// Middleware to allow data to become available in request.body.
app.use(express.json())

// Middleware for handling CORS policy
// This version allows ALL origins
app.use(cors());

// This version only allow custom origins, instead of allowing all origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );                                                                                                                                                                                                                                                                                                                                                                                                                                                           

// Route to home page
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Backend for Adrian Rodriguez\'s Personal Portfolio')
});

app.use('/projects', projectsRoute);

// connect to database using mongoose, ensuring to specify the database name.
// use a then catch block to handle different situations
mongoose
    .connect(mongoDBURL, { dbName: 'personalPortfolio' })
    .then(() => {
        console.log('App is connected to database');
        
        // only connect to port if our database connection is successful
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });