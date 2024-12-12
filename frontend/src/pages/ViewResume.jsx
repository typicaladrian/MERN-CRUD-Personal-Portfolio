import Header from "../components/Header";
import React from "react";

const ViewResume = () => {
    return (
        <div className="flex justify-center min-w-screen min-h-screen bg-primary">
            <div className="flex-col border-10 rounded-3xl w-11/12 text-center my-10 mx-5 bg-white">
            <Header/>
                <div className='flex flex-col py-5 px-5'>
                    <h1 className='py-6 text-2xl font-semibold'> Resume </h1>
                    <object data="2024_ADRIAN_RODRIGUEZ_RESUME.pdf" width="100%" height="500px">
                        <p>It appears that your browser does not support PDFs</p>
                        <a href="2024_ADRIAN_RODRIGUEZ_RESUME.pdf" target="_blank" className="underline">Click here to view!</a>
                    </object>
                </div>
            </div>
        </div>
      );
}

export default ViewResume