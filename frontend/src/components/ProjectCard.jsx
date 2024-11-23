import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
    let navigate = useNavigate();

    return (
        <div className='border-0 rounded-lg hover:shadow-xl relative overflow-hidden shadow-md shadow-secondary' onClick={() => { navigate(`/projects/${project._id}`); } }>
            <img src={project.imageRef} alt="Image" className='w-full h-3/4 shadow-md'/>
            <div className='p-3'>
                <h1 className='underline pl-2 font-primary'>{project.title}</h1>
                <h2 className='italic pl-2 pt-2 font-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi doloribus voluptatum quis quos sequi ipsa itaque libero adipisci fugiat rem vero autem ad, culpa dolorem magni quia, nobis eos.</h2>
            </div>
            
            
        </div>
    );
};

export default ProjectCard;