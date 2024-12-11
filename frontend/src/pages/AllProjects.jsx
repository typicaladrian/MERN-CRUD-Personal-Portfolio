import ProjectCard from "../components/ProjectCard";
import Spinner from "../components/Spinner";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const AllProjects = () => {
    // useState and useEffect feature of React.js
    // const [something, setSomething] = useState(initialStateOf_something)
    // After the definition above, we can call setSomething(newValue) to change the value of something
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    // Define apiUrl to connect to the database
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5555';

    // use effect to set loading state, where axios requests info using .get,
    // and once it recieves it, it sets loading state back to false
    useEffect(() => {
    setLoading(true);
    axios
        .get(`${apiUrl}/api/projects`)
        .then((response) => {
        setProjects(response.data.data);
        setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        setLoading(false);
        });
    }, []);

    if (loading) {
        return (<Spinner/>)
    };

    return (
        <div className="flex justify-center min-w-screen min-h-screen bg-primary">
            <div className="flex-col border-10 rounded-3xl w-11/12 text-center my-10 mx-5 bg-white">
                <Header/>
                <div className='flex flex-col py-5 px-5'>
                    <h1 className='py-6 text-2xl font-semibold'> All Projects </h1>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
                            {projects.map((item) => (
                                <ProjectCard key={item._id} project={item} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
      );
};

export default AllProjects;