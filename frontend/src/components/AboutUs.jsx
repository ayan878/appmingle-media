import wave from "../assets/wave1.png";
import Sriram from "../assets/Untitled-design-91.png";
import Abhay from "../assets/Untitled-design-90.png";
import Raghav from "../assets/Untitled-design-87.png";
import Hareram from "../assets/Untitled-design-86.png";
import { FaLinkedin, FaPlus } from "react-icons/fa";

const pics = [
  { src: Sriram, desc: "Sriram Singh", designation: "CEO & FOUNDER" },
  { src: Abhay, desc: "Abhay Singh", designation: "CTO" },
  { src: Raghav, desc: "Raghav", designation: "CTO" },
  { src: Hareram, desc: "Hareram Singh", designation: "CTO" },
];

function AboutUs() {
  return (
    <div className="mx-auto bg-white py-12 px-4 md:px-20">
      <img src={wave} alt="wave" className="h-24 w-40" />
      <h1 className="text-3xl font-bold text-start font-mono mb-2">
        About Us
      </h1>
      <p className="text-start font-serif md:mx-44 mb-4">
        At AppMingle Media, we are passionate about creating innovative digital
        solutions that drive business growth and enhance user experiences. Our
        dedicated team of 20 talented professionals brings a wealth of expertise
        in cutting-edge technologies to every project we undertake.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pics.map((pic, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between shadow-md overflow-hidden w-full max-w-xs mx-auto"
          >
            <img
              src={pic.src}
              alt={pic.desc}
              className="h-52 w-full mb-2 object-cover"
            />
            <span className="text-center font-semibold">{pic.desc}</span>
            <span className="text-center font-semibold mb-4">
              {pic.designation}
            </span>
            <FaLinkedin className="absolute top-4 left-4 text-blue-600" />
            <button className="absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2 font-bold w-16 h-16 text-white rounded-full bg-gray-200">
              <FaPlus className="ml-5 -mt-1 text-blue-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
