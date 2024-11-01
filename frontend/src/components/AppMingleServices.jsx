// import web from "../assets/pexels-tranmautritam-326503-scaled.jpg";
// import mobile from "../assets/pexels-luckysam-50614-scaled.jpg";
// import marketing from "../assets/pexels-mikael-blomkvist-6476808-scaled.jpg";
// import wave from "../assets/wave.png";

// const services = [
//   {
//     src: web,
//     title: "Website Development",
//     desc: "Website development involves creating and maintaining websites, ensuring they are functional, user-friendly, and visually appealing.",
//     button: "ENQUIRY NOW",
//   },
//   {
//     src: mobile,
//     title: "Mobile App Development",
//     desc: "Mobile app development creates software for mobile devices, focusing on functionality, usability, and user experience.",
//     button: "ENQUIRY NOW",
//   },
//   {
//     src: marketing,
//     title: "Digital Marketing",
//     desc: "Digital marketing promotes products or services through online channels to reach and engage target audiences effectively.",
//     button: "ENQUIRY NOW",
//   },
// ];

// function AppMingleServices() {
//   return (
//     <div className="p-8">
//       <img src={wave} alt="wave pic" className="mx-auto h-28" />
//       <h1 className="text-3xl font-Merri font-bold text-center p-4 -mt-12">
//         AppMingle Media Services
//       </h1>
//       <p className="text-center md:mx-44 mx-auto text-zinc-400">
//         Best development services include custom website creation, innovative
//         mobile app development, robust CRM & ERP solutions, and comprehensive
//         digital marketing strategies, all tailored to meet the unique needs of
//         your business.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {services.map((service, index) => (
//           <div
//             className={`border overflow-hidden shadow-lg pb-4 space-y-4 ${
//               index%2 === 0 ? "mx-auto" : "text-center"
//             }`}
//             key={service.title}
//           >
//             <img
//               src={service.src}
//               alt={service.title}
//               className="w-full h-60 mb-2 object-cover"
//             />
//             <h2 className="text-xl text-center font-Merri font-semibold mt-2">
//               {service.title}
//             </h2>
//             <p className="text-sm text-gray-600 mt-1 px-4">{service.desc}</p>
//             <button className="flex items-center justify-center text-blue-400 px-4 py-2 mt-4 mx-auto hover:bg-blue-500 transition">
//               {service.button}
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="text-center p-12">
//         <a
//           href="/services"
//           className="bg-blue-400 px-4 py-2 hover:bg-blue-500 transition text-white"
//         >
//           MORE SERVICES
//         </a>
//       </div>
//     </div>
//   );
// }

// export default AppMingleServices;

import web from "../assets/pexels-tranmautritam-326503-scaled.jpg";
import mobile from "../assets/pexels-luckysam-50614-scaled.jpg";
import marketing from "../assets/pexels-mikael-blomkvist-6476808-scaled.jpg";
import wave from "../assets/wave.png";

const services = [
  {
    src: web,
    title: "Website Development",
    desc: "Website development involves creating and maintaining websites, ensuring they are functional, user-friendly, and visually appealing.",
    button: "ENQUIRY NOW",
  },
  {
    src: mobile,
    title: "Mobile App Development",
    desc: "Mobile app development creates software for mobile devices, focusing on functionality, usability, and user experience.",
    button: "ENQUIRY NOW",
  },
  {
    src: marketing,
    title: "Digital Marketing",
    desc: "Digital marketing promotes products or services through online channels to reach and engage target audiences effectively.",
    button: "ENQUIRY NOW",
  },
];

function AppMingleServices() {
  return (
    <div className="relative p-8">
      <img src={wave} alt="wave pic" className="mx-auto h-8 w-36 mb-10 xl:mb-10" />
      <h1 className="text-3xl font-Merri font-bold text-center p-4 -mt-12">
        AppMingle Media Services
      </h1>
      <p className="text-center md:mx-44 mx-auto text-zinc-400">
        Best development services include custom website creation, innovative
        mobile app development, robust CRM & ERP solutions, and comprehensive
        digital marketing strategies, all tailored to meet the unique needs of
        your business.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <div
            className={`bg-zinc-200 shadow-custom-dark overflow-hidden shadow-lg pb-4 space-y-4 ${
              index % 2 === 1 ? "" : ""
            }`}
            key={service.title}
          >
            <img
              src={service.src}
              alt={service.title}
              className="w-full h-60 mb-2 object-cover"
            />
            <h2 className="text-xl text-center font-Merri font-semibold mt-2">
              {service.title}
            </h2>
            <p className="text-sm text-center text-gray-600 mt-1 px-4">
              {service.desc}
            </p>
            <button className="flex items-center justify-center text-blue-400 px-4 py-2 mt-4 mx-auto hover:bg-blue-500 transition">
              {service.button}
            </button>
          </div>
        ))}
      </div>
      <div className="text-center p-12">
        <a
          href="/services"
          className="bg-blue-400 px-4 py-2 hover:bg-blue-500 transition text-white"
        >
          MORE SERVICES
        </a>
      </div>
    </div>
  );
}

export default AppMingleServices;
