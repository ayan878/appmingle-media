// import { useEffect, useState } from "react";
// import { IoClose } from "react-icons/io5";
// import preloader from "../assets/preloader1.gif";

// function CallbackForm() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   //   useEffect(() => {
//   //     const timer = setTimeout(() => {
//   //       setIsLoading(false);
//   //       setIsModalOpen(true);
//   //     }, 5000);

//   //     return () => clearTimeout(timer);
//   //   }, []);

//   useEffect(() => {
//     const handlePageLoad = () => {
//       setIsLoading(false);
//       setIsModalOpen(true);
//     };

//     window.addEventListener("load", handlePageLoad);
//     return () => window.removeEventListener("load", handlePageLoad);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-white">
//         <img src={preloader} alt="loading..." className="w-16 h-16" />
//       </div>
//     );
//   }

//   if (!isModalOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       {/* Overlay */}
//       <div
//         className="bg-black opacity-50 h-screen w-full absolute"
//         onClick={closeModal}
//       ></div>

//       <form className="relative flex flex-col h-[400px] w-96 gap-6 bg-sky-500 mt-24 items-center justify-center mx-auto">
//         <div className="relative border-2 w-[350px] h-[370px] p-8 flex flex-col items-center justify-center mx-auto gap-4 rounded-md shadow-2xl">
//           <button
//             type="button"
//             onClick={closeModal}
//             className="absolute top-4 right-4"
//           >
//             <IoClose className="text-white" />
//           </button>
//           <h1 className="text-white text-md">
//             Challenge, Call Back in 2 minutes
//           </h1>
//           <input
//             className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
//             placeholder="Name*"
//           />
//           <input
//             type="text"
//             className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
//             placeholder="Phone Number*"
//           />
//           <input
//             type="text"
//             className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
//             placeholder="Email"
//           />
//           <select className="w-72 bg-transparent border rounded-lg py-2 text-white">
//             <option className="text-black">Select Service</option>
//             <option className="text-black">Web Development</option>
//             <option className="text-black">Website Design</option>
//             <option className="text-black">Mobile App Development</option>
//             <option className="text-black">Digital Marketing</option>
//             <option className="text-black">SEO</option>
//             <option className="text-black">CRM and ERP Development</option>
//           </select>
//           <button className="bg-red-600 py-2 px-2 w-72 rounded-lg text-white font-medium">
//             Get Call Back in 2 minutes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CallbackForm;

import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import preloader from "../assets/preloader1.gif";
import { BiSolidPhoneCall } from "react-icons/bi";
import Context from "./ContextProvider";

function CallbackForm() {
  const {isModalOpen, setIsModalOpen} = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    if (document.readyState == "complete") {
      setIsLoading(false);
    }
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handlePageLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img src={preloader} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  if (!isModalOpen) return null;

  return (
    <>
      {!isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="bg-black opacity-50 h-screen w-full absolute"
            onClick={closeModal}
          ></div>

          <form className="relative flex flex-col h-[400px] w-96 gap-6 bg-sky-500 mt-24 items-center justify-center mx-auto">
            <div className="relative border-2 w-[350px] h-[370px] p-8 flex flex-col items-center justify-center mx-auto gap-4 rounded-md shadow-2xl">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4"
              >
                <IoClose className="text-white" />
              </button>
              <h1 className="text-white text-md">
                Challenge, Call Back in 2 minutes
              </h1>
              <input
                className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
                placeholder="Name*"
              />
              <input
                type="text"
                className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
                placeholder="Phone Number*"
              />
              <input
                type="text"
                className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
                placeholder="Email"
              />
              <select className="w-72 bg-transparent border rounded-lg py-2 px-1 text-white">
                <option className="text-black">Select Service</option>
                <option className="text-black">Web Development</option>
                <option className="text-black">Website Design</option>
                <option className="text-black">Mobile App Development</option>
                <option className="text-black">Digital Marketing</option>
                <option className="text-black">SEO</option>
                <option className="text-black">CRM and ERP Development</option>
              </select>
              <div className="flex items-center justify-center gap-2 bg-red-600 py-2 px-2 w-72 rounded-lg text-white font-medium">
                <BiSolidPhoneCall />
                <a href="tel:+91 6203689042">Get Call Back in 2 minutes</a>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default CallbackForm;
