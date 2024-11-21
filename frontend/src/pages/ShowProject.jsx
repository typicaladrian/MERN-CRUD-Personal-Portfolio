import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowProject = () => {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5555/projects/${id}`)
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
        <div className='p-4'>
          <BackButton />
          <h1 className='text-3xl my-4'>Project Details</h1>
          {loading ? (
            <Spinner />
          ) : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id</span>
                <span>{project._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Title</span>
                <span>{project.title}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Description</span>
                <span>{project.description}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Image Ref</span>
                <span>{project.imageRef}</span>
              </div>
            </div>
          )}
        </div>
      );
};

export default ShowProject;