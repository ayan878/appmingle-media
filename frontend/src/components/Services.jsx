// import web from "../assets/pexels-tranmautritam-326503-scaled.jpg";
// import mobile from "../assets/pexels-luckysam-50614-scaled.jpg";
// import marketing from "../assets/pexels-mikael-blomkvist-6476808-scaled.jpg";
// import webDesign from "../assets/webdesign.jpeg";
// import seo from "../assets/seo-techniques.jpeg";
// import crm from "../assets/crm.jpg";


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
//   {
//     src: webDesign,
//     title: "Web Design",
//     desc: "Website design involves creating the visual layout and user experience of a website to ensure it is attractive and functional.",
//     button: "ENQUIRY NOW",
//   },
//   {
//     src: seo,
//     title: "SEO",
//     desc: "SEO improves website visibility on search engines through optimization techniques, enhancing rankings, and driving organic traffic.",
//     button: "ENQUIRY NOW",
//   },
//   {
//     src: crm,
//     title: "CRM & ERP",
//     desc: "CRM manages customer relationships, while ERP integrates business processes to streamline operations and improve efficiency across.",
//     button: "ENQUIRY NOW",
//   },
// ];

// function Services() {
//   return (
//     <div className="relative p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-black md:mt-96">
//         {services.map((service, index) => (
//           <div
//             className={`border overflow-hidden shadow-lg pb-4 space-y-4 ${
//               index % 2 === 1 ? "" : ""
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
//             <p className="text-sm text-center text-gray-600 mt-1 px-4">
//               {service.desc}
//             </p>
//             <button className="flex items-center justify-center text-blue-400 px-4 py-2 mt-4 mx-auto hover:bg-blue-500 transition">
//               {service.button}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;


import web from "../assets/pexels-tranmautritam-326503-scaled.jpg";
import mobile from "../assets/pexels-luckysam-50614-scaled.jpg";
import marketing from "../assets/pexels-mikael-blomkvist-6476808-scaled.jpg";
import webDesign from "../assets/webdesign.jpeg";
import seo from "../assets/seo-techniques.jpeg";
import crm from "../assets/crm.jpg";

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
  {
    src: webDesign,
    title: "Web Design",
    desc: "Website design involves creating the visual layout and user experience of a website to ensure it is attractive and functional.",
    button: "ENQUIRY NOW",
  },
  {
    src: seo,
    title: "SEO",
    desc: "SEO improves website visibility on search engines through optimization techniques, enhancing rankings, and driving organic traffic.",
    button: "ENQUIRY NOW",
  },
  {
    src: crm,
    title: "CRM & ERP",
    desc: "CRM manages customer relationships, while ERP integrates business processes to streamline operations and improve efficiency across.",
    button: "ENQUIRY NOW",
  },
];

function Services() {
  return (
    <div className="relative p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-24 md:mt-6 text-black">
        {services.map((service) => (
          <div
            className="border overflow-hidden shadow-lg pb-4 space-y-4 transition-transform transform hover:scale-105"
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
    </div>
  );
}

export default Services;
