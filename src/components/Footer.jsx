import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    // TODO
    return (
    <footer className="font-main px-8 md:px-32 py-8 md:py-16 space-y-4 bg-orange-peel-400 text-orange-peel-100 font-medium text-md md:text-xl"> 
        <h6 className="font-bold text-lg md:text-2xl">ABOUT US</h6>
        <i>Aspira - a one stop destination for all student problems</i>
        <br />
        <h6 className="font-bold text-lg md:text-2xl">CONTACT US</h6>
        <p className="flex items-center"><IoIosMail className="mr-4"/> vitchennai1234@gmail.com</p> 
        <p className="flex items-center"><FaPhoneAlt className="mr-4"/> 9384020998</p> 
    </footer>

    )
}

export default Footer;