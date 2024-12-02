import ProjectCard from "../components/ProjectCard";
import Spinner from "../components/Spinner";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import BackButton from "../components/BackButton";

const AllProjects = () => {
    // useState and useEffect feature of React.js
    // const [something, setSomething] = useState(initialStateOf_something)
    // After the definition above, we can call setSomething(newValue) to change the value of something
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    // use effect to set loading state, where axios requests info using .get,
    // and once it recieves it, it sets loading state back to false
    useEffect(() => {
    setLoading(true);
    axios
        .get('http://localhost:5555/projects')
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
        <div className='w-100 h-100 bg-primary text-secondary p-12'>
            <BackButton destination='/'/>
            <h1 className='py-6 font-primary text-2xl underline'> All Projects: </h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
            {projects.map((item) => (
                <ProjectCard key={item._id} project={item} />
            ))}
            </div>
        </div>
      );
};

export default AllProjects;