import express from "express"
import mongoose, { mongo } from "mongoose";
import projectsRoute from "./routes/projectsRoute.js"
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Instantiate Express application
const app = express();

const port = process.env.PORT || 5555;

// Variable for root directory
const __dirname = path.resolve();

// Middleware to allow data to become available in request.body.
app.use(express.json())

// Middleware for handling CORS policy
// This version allows ALL origins
//app.use(cors());

// This version only allow custom origins, instead of allowing all origins
app.use(cors({ origin: ['http://localhost:5173', 'https://mern-crud-personal-portfolio.onrender.com', "https://typicaladrian.com"] }));                                                                                                                                                                                                                                                                                                                                                                                                                                          

// Route to home page
// app.get('/', (request, response) => {
//     console.log(request)
//     return response.status(234).send('Backend for Adrian Rodriguez\'s Personal Portfolio')
// });

app.use('/api/projects', projectsRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// connect to database using mongoose, ensuring to specify the database name.
// use a then catch block to handle different situations
mongoose
    .connect(process.env.MONGO_URI, { dbName: 'personalPortfolio' })
    .then(() => {
        console.log('App is connected to database');
        
        // only connect to port if our database connection is successful
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`)
            console.log(`http://localhost:${port}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });