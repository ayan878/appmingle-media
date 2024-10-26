import wave from "../assets/wave1.png";
import { FaCheck } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import image1 from "../assets/AppMingle-Media.jpg";
import image2 from "../assets/Untitled-design-76.png";

function AboutUs() {
  return (
    <div className="flex flex-col  lg:flex-row mt-8 lg:mx-8 mb-4">
      <div className="bg-white py-2 px-4 md:px-20 lg:max-w-4xl">
        <img
          src={wave}
          alt="wave"
          className="mx-auto lg:ml-0 h-24 w-28 md:w-40"
        />
        <h1 className="text-3xl text-center font-bold lg:text-start font-mono mb-4">
          About Us
        </h1>
        <p className="text-center md:text-start font-serif mb-4 text-gray-700">
          At AppMingle Media, we are passionate about creating innovative
          digital solutions that drive business growth and enhance user
          experiences. Our dedicated team of 20 talented professionals brings a
          wealth of expertise in cutting-edge technologies to every project we
          undertake.
        </p>
        <div className="flex flex-col md:flex-row bg-zinc-100 gap-2 px-6">
          <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r md:pb-0 pb-4 md:pr-4">
            <h1 className="text-5xl font-bold font-serif text-blue-400 py-2 px-8">
              20+
            </h1>
            <p className="text-xs font-semibold">DEVELOPMENT TEAM</p>
          </div>
          <div
            className="flex
           flex-col items-center justify-center"
          >
            <ul className="ml-4 text-xl font-serif py-4 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheck className="text-blue-500" />
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-blue-500" />
                Mobile App Development
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-blue-500" />
                Digital Marketing
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <a
            href="tel:+916203689042"
            className="bg-blue-400 text-white py-2 px-6 mt-4 hover:bg-blue-500 transition"
          >
            GET CALL BACK
          </a>
          <div className="flex items-center mx-auto gap-2 mt-2">
            <p className="p-2 border rounded-full">
              <IoMdCall className="text-blue-400 w-8 h-8" />
            </p>

            <span>
              <p className="font-thin font-serif text-zinc-500">
                CONTACT US NOW
              </p>
              <p className="text-md font-serif font-bold">+91 6203689042</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="relative mx-auto w-11/12 sm:w-4/5  lg:w-full">
          <img src={image1} className="w-full md:w-64 mb-64 sm:mb-0" />
          <div className="absolute top-[380px] left-12 right-12 md:right-0 md:top-0 md:left-1/2 z-30 bg-blue-500 text-white p-6 justify-between border-8 md:border-r-0 md:border-t-0 border-white">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="mr-2">👥</span> Expert Team
                </h3>
                <p className="text-sm">
                  Skilled, experienced, dedicated, innovative.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="mr-2">⏰</span> 24/7 Support
                </h3>
                <p className="text-sm">
                  Constant, reliable, responsive assistance.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="mr-2">💼</span> Free Consult
                </h3>
                <p className="text-sm">Complimentary, no-cost expert advice.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={image2} className="w-11/12 sm:w-4/5 lg:w-full mx-auto"/>
      </div>
    </div>
  );
}

export default AboutUs;
