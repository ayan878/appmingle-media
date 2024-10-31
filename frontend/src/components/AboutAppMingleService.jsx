import BranchIcon from "../assets/branchIcon.svg?react";
import PaperNote from "../assets/paperNote.svg?react";
import UserCheck from "../assets/userCheck.svg?react";
import wave from "../assets/wave.png";
import groupImage from "../assets/about-image.jpg";
import image1 from "../assets/image-2.jpg";
import image2 from "../assets/image-34.jpg";

const services = [
  {
    icon: (
      <PaperNote className="text-white bg-sky-400 rounded-full h-10 w-10 py-3 md:py-3 lg:py-5 md:h-12 md:w-12 lg:h-16 lg:w-16 mb-1" />
    ),
    title: "Audit And Assurance",
    description:
      "Quia lectus arcu doloremque? Consectetuer taciti ex rutrum urna, voluptas eleifend ullamcorper impedit.",
  },
  {
    icon: (
      <BranchIcon className="text-white bg-sky-400 rounded-full h-10 w-10 py-3 md:py-3 lg:py-5 md:h-12 md:w-12 lg:h-16 lg:w-16 mb-1" />
    ),
    title: "Expert Advisory",
    description:
      "Quia lectus arcu doloremque? Consectetuer taciti ex rutrum urna, voluptas eleifend ullamcorper impedit.",
  },
  {
    icon: (
      <UserCheck className="text-white bg-sky-400 rounded-full h-10 w-10 py-3 md:py-3 lg:py-5 md:h-12 md:w-12 lg:h-16 lg:w-16 mb-1" />
    ),
    title: "Better Management",
    description:
      "Quia lectus arcu doloremque? Consectetuer taciti ex rutrum urna, voluptas eleifend ullamcorper impedit.",
  },
];

export function AboutAppMingleMediaService() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4 md:px-8 mx-auto mt-8 font-Merri">
      <div className="flex flex-col gap-2 lg:gap-4 lg:py-8">
        <img src={wave} alt="wave" className="w-44 mx-auto md:mx-0" />
        <h1 className="text-black text-3xl lg:text-3xl xl:text-5xl md:text-2xl font-bold text-center md:text-left">
          AppMingle Media
        </h1>
        <p className="text-black text-sm md:text-basic lg:text-md xl:text-lg mb-4 text-center md:text-left">
          Welcome to AppMingle Media, your trusted partner for Website
          Development, Mobile App Development, and Digital Marketing in India.
          With our headquarters located in Noida and a branch office in Patna,
          we are strategically positioned to serve clients across the nation. At
          AppMingle Media, we are passionate about creating innovative digital
          solutions that drive business growth and enhance user experiences. Our
          dedicated team of 20 talented professionals brings a wealth of
          expertise in cutting-edge technologies to every project we undertake.
        </p>
        <div className="flex flex-col  gap-6 lg:gap-12 text-black">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-8">
              <div>{service.icon}</div>
              <div>
                <h1 className="text-zinc-500 text-xl md:text-md lg:text-2xl font-semibold">
                  {service.title}
                </h1>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:py-16 items-center justify-between">
        <div className="relative top-1 left-8 md:left-16 xl:top-6 flex flex-col items-center text-black">
          <img
            src={image1}
            alt="Experience representation"
            className="w-32 md:w-48 md:h-20 lg:h-28 mb-4 border-8 border-white"
          />
          <div className="text-center flex flex-col justify-center items-center border-white text-white w-32 px-4 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:h-44 xl:w-48 border-8 bg-sky-600">
            <h1 className="text-2xl font-bold">11</h1>
            <p className="text-sm">MONTHS OF EXPERIENCE</p>
          </div>
          <img
            src={image2}
            alt="Experience representation"
            className="w-32 h-20 md:w-48 md:h-20 lg:w-44 lg:h-28 mt-4 border-8 border-white"
          />
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <img
            src={groupImage}
            alt="Team group photo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
