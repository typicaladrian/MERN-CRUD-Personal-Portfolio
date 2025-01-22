import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        {/* header */}
        <div className="mt-3 mx-3 flex justify-between w-auto">
            {/* name container */}
            <div className="w-3/5">
                <div className="flex items-center">
                    <Link to="/" className="font-bold text-white rounded-full bg-primary flex items-center justify-center w-8 h-8 pb-1 text-xl">A</Link>
                    <div className="px-2 pb-0.5 text-sm">Adrian Rodriguez</div>
                </div> 
            </div>
            {/* header tabs container */}
            <div className="w-2/5 flex justify-end items-center text-xs md:text-sm">
                <Link className='mx-2 underline' to='/'>home</Link>
                <Link className='mx-2 underline' to='/view_resume'>view resume</Link>
                <Link className='mx-2 underline' to='/projects'>projects</Link>
            </div>
        </div>
    </div>
  )
}

export default Header