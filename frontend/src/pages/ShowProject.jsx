import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";

const ShowProject = () => {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5555';


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
        <div className="flex justify-center min-w-screen min-h-screen bg-primary">
            <div className="flex-col border-10 rounded-3xl w-11/12 text-center my-10 mx-5 bg-white">
            <Header/>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='flex flex-col py-5 px-5 justify-center items-center'>
                        <div className='text-2xl font-semibold underline'>{project.title}</div>
                        <div className='text-xl italic'> {project.shortSummary} </div>
                        <div className='text-sm italic'> Technologies used: {project.technologiesUsed} </div>
                        <img src={project.imageRef} className='mx-4 mt-4 mb-6 md:w-1/2'/>
                        <div className='text-sm md:text-lg text-l'> {project.description} </div>
                    </div>
              )}
            </div>
        </div>
      );
};

export default ShowProject;