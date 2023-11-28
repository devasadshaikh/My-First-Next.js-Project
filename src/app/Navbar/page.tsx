
import Link from "next/link"

export default function NavBar (){
    return(
        <nav className=" w-full h-16 border-2  bg-rose-200 drop-shadow-lg border-none pt-3">
            <div>
                <ul className=" flex justify-evenly items-center">
                    <li>
                        <Link href={"/"} className=" text-cyan-800 font-medium hover:text-black ease-in-out duration-500">Home</Link>

                    </li>
                    <li>
                        <Link href={"/About"} className=" text-cyan-800 font-medium hover:text-black ease-in-out duration-500">About</Link>
                    </li>
                    <li>
                        <Link href={"/Contact"} className=" text-cyan-800 font-medium  hover:text-black ease-in-out duration-500">Contact</Link>
                    </li>
                    <li className="flex items-center">
                        <h3 className=" bg-cyan-800 text-rose-200 text-center rounded-full px-5 py-2 font-semibold hover:bg-black ease-in-out duration-500">
                            Sign In
                        </h3>
                    </li>
                </ul>
            </div>
            {/* <div className=" prose prose-xl mx-auto flex-justify-between flex-col">

            </div> */}
        </nav>
    )
}