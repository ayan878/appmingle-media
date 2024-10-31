import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import officeImg from "../assets/AppMingle-Media-Office.png";
import { FaFacebook } from "react-icons/fa";
function AboutScrollable() {
  return (
    <div className="font-Merri px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
        <div>
          <div className="flex items-center justify-center mb-2 space-x-2 mx-auto">
            <FaLinkedin className="bg-sky-400 w-8 h-8 md:w-12 md:h-12 p-1 rounded-sm hover:bg-sky-500 transition" />
            <FaFacebook className="bg-sky-400 w-8 h-8 md:w-12 md:h-12 p-1 rounded-sm hover:bg-sky-500 transition" />
            <FaTwitter className="bg-sky-500 w-8 h-8 md:w-12 md:h-12 p-1 rounded-sm hover:bg-sky-600 transition" />
            <FaYoutube className="bg-red-800 w-8 h-8 md:w-12 md:h-12 p-1 rounded-sm hover:bg-red-900 transition" />
            <FaInstagram className="bg-red-600 w-8 h-8 md:w-12 md:h-12 p-1 rounded-md hover:bg-red-700 transition" />
            <FaWhatsapp className="bg-green-500 w-8 h-8 md:w-12 md:h-12 p-1 rounded-sm hover:bg-green-600 transition" />
          </div>
          <iframe
            className="w-[350px] h-[220px] lg:w-[460px] lg:h-[240px] xl:w-[560px] xl:h-[315px]"
            src="https://www.youtube.com/embed/XHOmBV4js_E?si=X6HcIn69_3czDYpH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1 className="text-black font-bold md:text-xl lg:text-2xl text-center mb-7 lg:mb-2 lg:py-2">
            AppMingle Media Inside Image
          </h1>
          <img
            src={officeImg}
            alt="office inside"
            className="md:h-[220px] lg:w-[460px] lg:h-[240px] xl:w-[560px] xl:h-[315px]"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AboutScrollable;
