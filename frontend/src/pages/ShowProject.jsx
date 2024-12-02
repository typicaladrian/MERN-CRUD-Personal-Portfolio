import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowProject = () => {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const apiUrl = import.meta.env.VITE_API_URL || process.env.VITE_API_URL || 'http://localhost:5555';


    useEffect(() => {
        setLoading(true);
        axios
          .get(`${apiUrl}/api/projects/${id}`)
          .then((response) => {
            setProject(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

      return (
        <div className='p-12 w-100 min-h-screen bg-primary'>
        <BackButton destination='/projects' />
        {loading ? (
            <Spinner />
            ) : (
            <div className='flex-col'>
                <div className='font-display text-6xl text-secondary pt-4 pl-4 underline'>{project.title}</div>
                <div className='font-primary text-4xl text-secondary pt-4 pl-4'> {project.shortSummary} </div>
                <div className='font-secondary text-2xl text-secondary p-4 italic'> Technologies used: {project.technologiesUsed} </div>
                <img src={project.imageRef} className='justify-self-center'/>
                <div className='font-secondary text-xl text-secondary p-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis temporibus non dolorum, provident unde, mollitia alias minima assumenda esse dolores! Nam quasi dolorum atque quas, doloribus iure odio deleniti. </div>
            </div>
          )}
        </div>
      );
};

export default ShowProject;