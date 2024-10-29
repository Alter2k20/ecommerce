import { Link } from "react-router-dom"


function Navbar() {
    return (

        <nav className=' w-[85vw] m-auto text-white rounded-full'>
            <ul className="flex justify-around">
                <li className='italic text-3xl  font-bold'>Lorem, ipsum.</li>
                <div className="flex justify-around ">
                <li className="font-bold m-auto p-2 border-l border-r cursor-pointer  duration-700">cart</li>
                <li className="font-bold m-auto p-2 cursor-pointer  duration-700"><Link to={"/Login"}>Login</Link></li>
                <li className="font-bold m-auto p-2 border-l border-r cursor-pointer  duration-700">Raise a ticket</li>
                </div>
            </ul>
        </nav>

    )
}

export default Navbar