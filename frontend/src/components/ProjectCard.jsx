import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
    let navigate = useNavigate();

    return (
        <div className='px-8 border-0 rounded-lg hover:shadow-xl relative overflow-hidden shadow-md shadow-secondary' onClick={() => { navigate(`/projects/${project._id}`); } }>
            <img src={project.imageRef} alt="Image" className='object-cover shadow-md'/>
            
            <div className='p-3'>
                <h1 className='underline pl-2 font-primary'>{project.title}</h1>
                <h2 className='italic pl-2 pt-2 pb-4 font-secondary'>{project.shortSummary}</h2>
            </div>
            
            
        </div>
    );
};

export default ProjectCard;