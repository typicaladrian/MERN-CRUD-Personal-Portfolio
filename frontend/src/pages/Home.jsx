import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="border rounded w-1/4 h-auto px-5 py-10">
              <div className="flex flex-row border items-center px-1">
                <img src="../public/headshot.jpg" alt="Headshot of Adrian Rodriguez" className='w-1/4 rounded-full p-4'/>
                <div className="h-min">
                  Hello! My name is Adrian Rodriguez.
                </div>
              </div>
              <div className='ml-4 mt-4'>
                <div>
                  <Link to='projects/6732ae1d6b2a419be34630e0'>projects...</Link>
                </div>
                <div>
                  experience...
                </div>
                <div>
                  skills...
                </div>
                <div>
                  education...
                </div>
              </div>
            </div>
        </div>
      );
};

export default Home;