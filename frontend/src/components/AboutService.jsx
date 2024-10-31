import { FaGlobeAmericas } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaDigitalOcean } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaEvernote } from "react-icons/fa";
import wave from "../assets/wave.png";

const services = [
  {
    icon: <FaGlobeAmericas />,
    number: "01",
    title: "Website Development",
    desc: "Website development involves designing, coding, and maintaining websites, ensuring functionality, aesthetics, and user experience across devices and platforms.",
  },
  {
    icon: <TbDeviceMobileCode />,
    number: "02",
    title: "Mobile App Development",
    desc: "Mobile app development involves creating software for mobile devices, ensuring user engagement and functionality.",
  },
  {
    icon: <FaDigitalOcean />,
    number: "03",
    title: "Digital Marketing",
    desc: "Digital marketing involves promoting products or services online through SEO, social media, email, and content to reach target audiences.",
  },
  {
    icon: <FaSearchengin />,
    number: "04",
    title: "SEO",
    desc: "SEO focuses on optimizing websites to rank higher in search engine results, increasing visibility and traffic.",
  },
  {
    icon: <TbDeviceDesktopCode />,
    number: "05",
    title: "Website Design",
    desc: "Website design focuses on creating visually appealing, user-friendly layouts, ensuring optimal navigation, responsiveness, and brand consistency across devices.",
  },
  {
    icon: <FaEvernote />,
    number: "06",
    title: "CRM & ERP Development",
    desc: "CRM and ERP development involves creating systems to manage customer relationships and streamline business processes, improving efficiency and data integration.",
  },
];

function AboutService() {
  return (
    <div className=" bg-zinc-300 py-16 px-8 font-Merri mx-auto ">
      <img
        src={wave}
        alt="wave"
        className="w-36 md:w-60 md:h-8 lg:w-60 lg:h-8py-2 mx-auto"
      />
      <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-Merri font-bold">
        Our Services
      </h1>
      <p className="text-center md:text-basic xl:text-2xl text-black py-2 lg:py-8 px-6 md:px-24 lg:px-28 xl:px-40 mb-4">
        Our software development company specializes in crafting tailored
        solutions, including website and mobile app development, CRM/ERP
        systems, and digital marketing, ensuring innovation and client
        satisfaction
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-zinc-400">
        {services.map((service) => (
          <div
            key={service.number}
            className="flex flex-col gap-2 bg-white text-center py-4 xl:py-8"
          >
            <div className="text-5xl xl:text-7xl text-center text-sky-400 mx-auto p-2">
              {service.icon}
            </div>
            <span className="flex items-center justify-center text-xl md:text-2xl gap-2">
              <span className="font-semibold text-sky-400 text-center">
                {service.number}
              </span>
              <span className="text-center">{service.title}</span>
            </span>
            <div className="px-8">
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutService;
