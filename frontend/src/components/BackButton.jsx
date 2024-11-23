import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='text-secondary border-secondary border-2 rounded-lg px-4 py-1 shadow-sm shadow-secondary hover:shadow-lg'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;