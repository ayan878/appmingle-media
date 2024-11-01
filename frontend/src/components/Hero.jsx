import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

function Hero() {
  return (
    <div className="flex flex-col mt-[1040px] sm:mt-[360px] lg:mt-[620px] items-center md:px-8">
      <div className="flex flex-col md:flex-row items-center bg-white justify-center gap-4 drop-shadow-2xl mb-2">
        <div className=" video-container w-full md:w-2/3">
          <iframe
            src="https://player.vimeo.com/video/235215203"
            className="w-full h-80"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3 p-6 space-y-3 border-b md:border-r md:border-b-0 ">
            <div className="flex flex-col md:flex-row gap-2 items-center mx-auto justify-between md:justify-start ">
              <FaLaptopCode className="text-5xl md:text-7xl text-blue-400" />
              <h1 className="text-xl text-center md:text-left font-bold">
                Website Development
              </h1>
            </div>
            <p className="text-center md:text-left">
              Website development builds functional, user-friendly sites for
              enhanced online presence.
            </p>
            <p className="text-xs text-center md:text-left font-bold">
              <a href="/services" className="text-blue-500">
                READ MORE...
              </a>
            </p>
          </div>
          <div className="w-full md:w-2/3 p-4 space-y-3 ">
            <div className="flex flex-col md:flex-row gap-2 items-center mx-auto justify-center md:justify-start ">
              <TbDeviceMobileCode className="text-5xl md:text-7xl text-blue-400" />
              <h1 className="text-xl text-center md:text-left font-bold">
                Mobile App Development
              </h1>
            </div>
            <p className="text-center md:text-left">
              Mobile app development creates engaging, functional apps for
              various platforms.
            </p>
            <p className="text-xs text-center md:text-left font-bold">
              <a href="/services" className="text-blue-500">
                READ MORE...
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-nowwrap md:flex-row justify-center py-8 gap-4 shadow-custom-xl px-4">
        <div className="w-full md:w-2/3 p-6 space-y-3 border-b sm:border-b md:border-r md:border-b-0">
          <div className="flex flex-col md:flex-row gap-2 items-center mx-auto justify-center md:justify-start">
            <FaLaptopCode className="text-5xl md:text-7xl text-blue-400" />
            <h1 className="text-xl text-center md:text-left font-bold">
              Digital Marketing
            </h1>
          </div>
          <p className="text-center md:text-left">
            Digital marketing promotes brands online through targeted strategies
            and engaging content.
          </p>
          <p className="text-xs text-center md:text-left font-bold">
            <a href="/services" className="text-blue-500">
              READ MORE...
            </a>
          </p>
        </div>
        <div className="w-full md:w-2/3 p-6 space-y-3 border-b md:border-r md:border-b-0">
          <div className="flex flex-col md:flex-row gap-2 items-center mx-auto justify-center md:justify-start">
            <FaLaptopCode className="text-5xl md:text-7xl text-blue-400" />
            <h1 className="text-xl text-center md:text-left font-bold">SEO</h1>
          </div>
          <p className="text-center md:text-left">
            SEO improves website visibility and traffic via search engine
            optimization.
          </p>
          <p className="text-xs text-center md:text-left font-bold">
            <a href="/services" className="text-blue-500">
              READ MORE...
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 space-y-3">
          <div className="flex flex-col md:flex-row gap-2 items-center mx-auto justify-center md:justify-start">
            <PiMicrosoftExcelLogoFill className="text-5xl md:text-7xl text-blue-400" />
            <h1 className="text-xl text-center md:text-left font-bold">
              CRM & ERP
            </h1>
          </div>
          <p className="text-center md:text-left">
            CRM manages customer relations; ERP integrates business processes
            efficiently.
          </p>
          <p className="text-xs text-center md:text-left font-bold">
            <a href="/services" className="text-blue-500">
              READ MORE...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
