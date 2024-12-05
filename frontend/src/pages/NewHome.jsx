import { Link } from "react-router-dom";

const NewHome = () => {
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
                        <div className="text-xs">Software Developer</div>
                        <div className="text-lg">Adrian Rodriguez</div>
                        <div className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ratione vitae tenetur deserunt veniam accusamus unde ullam eveniet, est quam sed atque iusto, laboriosam praesentium, dolorum consequuntur laudantium. Possimus.</div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
};

export default NewHome;