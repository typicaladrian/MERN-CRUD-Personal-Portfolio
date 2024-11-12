import express from "express";
import { Project } from "../models/projectModel.js";

const router = express.Router();

// Route to save a new project
router.post('/', async (request, response) => {
    try {
        // if required fields are not found
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.imageRef
        ) {
            return response.status(400).send({
                message: 'ERROR: Entries must include all of the following fields: title, description, imageRef.',
            });
        }

        // else, proceed with adding new project to database
        const newProject = {
            title: request.body.title,
            description: request.body.description,
            imageRef: request.body.imageRef,
        };

        // create new entry in database
        const project = await Project.create(newProject);

        return response.status(201).send(project);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route to retrieve/GET ALL projects from database.
router.get('/', async (request, response) => {
    try {
        const projects = await Project.find({});
        
        // Use the return statement below to send unformatted array of JSON project objects
        // return response.status(200).json(projects);

        // Use the return statement below to send better formatted data, as knowing the count of items is useful later on.
        return response.status(200).json({
            count: projects.length,
            data: projects
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to retrieve single project by ID
// Tag a portion of the route as a parameter by using the ':' tag
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const project = await Project.findById(id);
        
        return response.status(200).json(project);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a project
// PUT method is used to update a resource
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.imageRef
        ) {
            return response.status(400).send({
                message: 'ERROR: Entries must include all of the following fields: title, description, imageRef.',
            });
        }

        const { id } = request.params;

        const result = await Project.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'ERROR: Project not found.' });
        }

        return response.status(200).send({ message: 'SUCCESS: Project updated successfully.'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a project
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Project.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'ERROR: Project not found.' });
        }

        return response.status(200).send({ message: 'SUCCESS: Project deleted successfully.'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;