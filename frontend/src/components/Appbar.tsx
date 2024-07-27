import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex justify-start">
            <img className="flex flex-col justify-center w-10 h-10 rounded-full" src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*sHhtYhaCe2Uc3IU0IgKwIQ.png" />
            <div className="flex flex-col justify-center text-xl font-bold pl-2 cursor-pointer">
                <Link to={"/blogs"}>Medium</Link>
            </div>
        </div>

        <div>
            <Link to={"/publish"}>
            <button type="button" className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
        

            <Avatar name="Anish" size={10} />
        </div>
    </div>
}