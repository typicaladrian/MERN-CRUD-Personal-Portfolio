import { Link } from "react-router-dom";
import DownloadButton from "../components/DownloadButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../components/Spinner";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

// copy TailwindCSS breakpoints to use in Carousel component
const breakpoints = {
    sm: {
        breakpoint: { min: 0, max: 767 },
        items: 1,
    },

    md: {
        breakpoint: { min: 768, max: 1023},
        items: 2,
        slidesToSlide: 2
    },

    lg: {
        breakpoint: {min: 1024, max: 1279},
        items: 3,
        slidesToSlide: 3
    },

    xl: {
        breakpoint: {min: 1280, max: 1535},
        items: 3,
        slidesToSlide: 3
    },

    double_xl: {
        breakpoint: {min: 1536, max: 3000},
        items: 4,
        slidesToSlide: 4
    }

  };

const NewHome = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5555';

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
        <div className="flex justify-center w-screen min-h-screen bg-primary">
            <div className="flex-col border-10 rounded-3xl w-11/12 text-center my-10 mx-5 bg-white">
                {/* header */}
                <div className="mt-3 mx-3 flex justify-between w-auto">
                    {/* name container */}
                    <div className="w-3/5 text-sm">
                        <div className="flex items-center">
                            <div className="font-bold text-white rounded-full bg-primary flex items-center justify-center w-8 h-8 pb-1 text-xl">A</div>
                            <div className="px-2 pb-0.5 text-sm">Adrian Rodriguez</div>
                        </div>
                        
                    </div>
                    {/* tabs container */}
                    <div className="w-2/5 flex justify-end items-center text-xs">
                        <div className="mx-2">
                            about me
                        </div>
                        <div className="mx-2">
                            resume
                        </div>
                        <div className="mx-2">
                            projects
                        </div>
                    </div>
                </div>

                {/* hero section */}
                <div className="flex flex-col md:flex-row justify-center items-center m-4">
                    {/* image container */}
                    <div className="w-32 h-32 md:w-60 md:h-60 rounded-full inline-block align-middle bg-white overflow-hidden m-4">
                        <img className="w-full" src="../public/headshot.jpg"></img>
                    </div>
                    {/* text container */}
                    <div>
                        <div className="text-xs text-grey">Software Developer</div>
                        <div className="text-lg">Adrian Rodriguez</div>
                        <div className="text-xs mx-6">Rensselaer Polytechnic Institute Alumni</div>
                        <div className="text-xs mx-6">Experience: </div>

                        {/* Resume and Contact Button Container */}
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center m-6 gap-3">
                            <DownloadButton fileName={"2024_ADRIAN_RODRIGUEZ_RESUME.pdf"} innerText={"Download Resume"}/>
                            <div className='flex w-11/12 justify-center border-grey hover:border-primary border-2 rounded-full px-4 py-2 shadow-sm hover:shadow-lg hover:shadow-primary text-grey'>
                                Contact Me!
                            </div>
                        </div>
                    </div>
                </div>

                {/* project showcase */}
                <div className="text-lg underline">
                    Projects
                </div>
                <div className='m-8'>
                    <Carousel responsive={breakpoints} autoPlay showDots={true} removeArrowOnDeviceType={['sm', 'md', 'lg']}>
                        {projects.map((item) => (
                            <ProjectCard key={item._id} project={item} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
};

export default NewHome;