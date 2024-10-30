// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneVolume, FaEnvelopeOpenText } from "react-icons/fa";

// function ContactBox() {
//   return (
//     <div className="grid grid-cols-1 md:grid-rows-1 lg:grid-cols-3 gap-4 mx-auto px-4 md:px-8 py-8 text-white text-center md:text-start">
//       <div className="flex flex-col md:flex-row bg-sky-400 items-center justify-start p-4 md:p-8  shadow-lg">
//         <FaPhoneVolume className="h-10 w-8 md:-mt-10 mr-4" />
//         <div>
//           <p className="text-xl font-bold">Phone No:</p>
//           <p>+91 6203689042</p>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row bg-sky-400 items-center justify-start p-4 md:p-8  shadow-lg">
//         <FaEnvelopeOpenText className="h-10 w-8 md:-mt-10 mr-4" />
//         <div>
//           <p className="text-xl font-bold">Email Address:</p>
//           <p>info@appminglemedia.com</p>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row bg-sky-400 items-center justify-start p-4 md:p-8  shadow-lg">
//         <FaLocationDot className="h-10 w-8 md:-mt-10 mr-4" />
//         <div>
//           <p className="text-xl font-bold">Our Address:</p>
//           <p>G-13, 3rd Floor, G Block, Sector 6, Noida</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactBox;

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume, FaEnvelopeOpenText } from "react-icons/fa";

function ContactBox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4 md:px-8 py-8 text-white text-center md:text-start">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start bg-sky-400 p-4 md:p-8 shadow-lg">
        <FaPhoneVolume className="h-10 w-10 mb-2" />
        <p>
          <p className="text-xl font-bold">Phone No:</p>
          <p>+91 6203689042</p>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start bg-sky-400 p-4 md:p-8 shadow-lg">
        <FaEnvelopeOpenText className="h-10 w-10 mb-2" />
        <p>
          <p className="text-xl font-bold">Email Address:</p>
          <p>info@appminglemedia.com</p>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center md:items-start bg-sky-400 p-4 md:p-8 shadow-lg">
        <FaLocationDot className="h-10 w-10 mb-2" />
        <p>
          <p className="text-xl font-bold">Our Address:</p>
          <p>G-13, 3rd Floor, G Block, Sector 6, Noida</p>
        </p>
      </div>
    </div>
  );
}

export default ContactBox;
