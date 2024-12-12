import { Link } from "react-router-dom";
import DownloadButton from "../components/DownloadButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../components/Spinner";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import { SocialIcon } from "react-social-icons";
import Header from "../components/Header";

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
        items: 2,
        slidesToSlide: 2
    },

    xl: {
        breakpoint: {min: 1280, max: 1535},
        items: 2,
        slidesToSlide: 2
    },

    double_xl: {
        breakpoint: {min: 1536, max: 3000},
        items: 2,
        slidesToSlide: 2
    }

  };

const Home = () => {
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
        <div className="flex justify-center min-w-screen min-h-screen bg-primary">
            <div className="flex-col border-10 rounded-3xl w-11/12 text-center my-10 mx-5 bg-white">
                <Header/>
                {/* hero section */}
                <div className="flex flex-col md:flex-row justify-center items-center m-4">
                    {/* image container */}
                    <div className="w-32 h-32 md:w-60 md:h-60 rounded-full inline-block align-middle bg-white overflow-hidden m-4">
                        <img className="w-full" src="/headshot.jpg"></img>
                    </div>
                    {/* text container */}
                    <div>
                        <div className="text-xs md:text-sm text-grey">Software Developer</div>
                        <div className="text-lg md:text-xl">Adrian Rodriguez</div>
                        <div className="text-xs md:text-sm mx-6 italic">Rensselaer Polytechnic Institute Alumni</div>
                        <div className="text-xs md:text-sm mx-6 mt-2">Experience as a SDET Intern at Gilbarco Veeder Root, as well as a Software Developer for multiple open source projects. </div>
                        <div className="text-xs md:text-sm mx-6 mt-2">Proficient in Python, C++, JavaScript, MongoDB, and web frameworks like React, Next.js, and Express.</div>

                        {/* Resume and Contact Button Container */}
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center m-6 gap-3">
                            <DownloadButton fileName={"2024_ADRIAN_RODRIGUEZ_RESUME.pdf"} innerText={"Download Resume"}/>
                            <Link to="projects" className='flex w-11/12 justify-center border-grey hover:border-primary border-2 rounded-full px-4 py-2 shadow-sm hover:shadow-lg hover:shadow-primary text-grey'>
                                All Projects
                            </Link>
                        </div>
                    </div>
                </div>

                {/* project showcase */}
                <div className="text-lg">
                    Projects
                </div>
                <div className='m-4'>
                    <Carousel responsive={breakpoints} autoPlay infinite={false} showDots={true} removeArrowOnDeviceType={['sm']} draggable={false} >
                        {projects.map((item) => (
                            <ProjectCard key={item._id} project={item} />
                        ))}
                    </Carousel>
                </div>

                {/* contact/socials section */}
                <div className='text-lg'>
                    Contact me!
                    <div className='flex flex-row m-4 gap-4 justify-center'>
                        <SocialIcon url="mailto:arodr223@outlook.com"/>
                        <SocialIcon url="http://www.linkedin.com/in/rpiarodriguez/" />
                        <SocialIcon url="http://github.com/typicaladrian" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Home;