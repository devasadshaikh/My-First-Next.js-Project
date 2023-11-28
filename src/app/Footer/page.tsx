import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import youtube from "../../../public/youtube.png";
import Image from "next/image";
export default function Footer (){
    return(
        <footer className=" h-40  bg-cyan-800 mt-9 ">
            <div>
                <ul className=" flex justify-evenly pt-9">
                    <li>
                        <Image src={facebook} alt="facebook" width={50} height={50}></Image>

                    </li>
                    <li>
                        <Image src={linkedin} alt="linkedin"  width={50} height={50}></Image>
                    </li>
                    <li>
                        <Image src={youtube} alt="youtube"  width={50} height={50}></Image>
                    </li>
                </ul>
            </div>

        </footer>
    )
}