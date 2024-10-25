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

function Expertteam() {
  return (
    <div className="mx-auto bg-white py-12 px-20">
      <img src={wave} alt="wave" className="h-24 w-40 mx-auto" />
      <h1 className="text-3xl font-bold text-center font-mono mb-2">
        Our Expert Team
      </h1>
      <p className="text-center font-serif md:mx-44 mb-4">
        Our expert team offers extensive knowledge, diverse skills, and
        innovative solutions, delivering exceptional results with dedication and
        collaboration.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-2">
        {pics.map((pic, index) => (
          <div
            key={index}
            className="relative w-56 flex flex-col items-center justify-between shadow-md overflow-hidden "
          >
            <img src={pic.src} alt={pic.desc} className="h-52 w-full mb-2" />
            <span className="text-center font-semibold">{pic.desc}</span>
            <span className="text-center font-semibold mb-4">{pic.designation}</span>
            <FaLinkedin className="absolute top-4 left-4 text-blue-600" />
            <button className="absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2 font-bold w-16 h-16 text-white rounded-full bg-gray-200">
              <FaPlus className="ml-5 -mt-1 text-blue-500"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertteam;
