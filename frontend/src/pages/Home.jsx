import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex w-screen min-h-screen justify-center items-center bg-primary">
            <div className="border rounded-lg w-4/5 md:w-2/5 h-auto px-5 py-10 border-secondary">
              <div className="flex flex-row border rounded-lg border-secondary items-center px-1">
                <img src="/headshot.jpg" alt="Headshot of Adrian Rodriguez" className='w-1/4 rounded-full p-4'/>
                <div className="h-min text-secondary font-primary">
                  Hello! My name is Adrian Rodriguez!
                </div>
              </div>
              <div className='ml-4 mt-4 text-secondary font-secondary'>
                <div>
                  <Link className='underline' to='projects'>projects...</Link>
                </div>
                <div className='pb-2'>
                  experience...
                  <ul className='list-disc list-inside'>
                    <li className='pl-3 pt-1 text-sm'> Software Development Engineer in Test Intern @ Gilbarco Veeder Root </li>
                    <li className='pl-3 pt-1 text-sm'> Developer for Soundscape </li>
                  </ul>
                </div>
                <div className='pb-2'>
                  skills:
                  <div className='pl-3 pt-1 text-sm'> Python, C++, JavaScript, React.js, Vite, Mongo.db, Express.js, Node.js </div>
                </div>
                <div>
                  education:
                  <div className='pl-3 pt-1 text-sm'> Rennselaer Polytechnic Institute</div>
                  <div className='pl-3 text-sm italic'> Bachelors of Science: Computer Science </div>
                </div>
              </div>
            </div>
        </div>
      );
};

export default Home;