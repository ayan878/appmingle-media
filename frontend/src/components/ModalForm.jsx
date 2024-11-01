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
import Context from "../context/ContextProvider";
import { Circles } from "react-loading-icons";
import sms from "../api/smsApi";

function ModalForm() {
  const {
    isModalOpen,
    setIsModalOpen,
    formData,
    setFormData,
    responseMessage,
    setResponseMessage,
    isSubmit,
    setIsSubmit,
    isLoading,
    setIsLoading,
  } = useContext(Context);

  const [isPageLoading, setIsPageLoading] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 10000);

      if (document.readyState == "complete") {
        setIsPageLoading(false);
      }
      const handlePageLoad = () => {
        setIsPageLoading(false);
      };

      window.addEventListener("load", handlePageLoad);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", handlePageLoad);
      };
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await sms(formData);
      if (response.success) {
        setResponseMessage("Your submission is successful.");
        setIsSubmit(true);
      } else {
        setResponseMessage("Failed to send quote. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred while sending the quote.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isPageLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img src={preloader} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="bg-black opacity-50 h-screen w-full absolute"
            onClick={closeModal}
          ></div>

          <form className="relative flex flex-col h-[400px] w-96 gap-6 bg-sky-500 mt-24 items-center justify-center mx-auto">
            <div className="relative border-2 w-[350px] h-[370px] p-8 flex flex-col items-center justify-center mx-auto gap-4 rounded-lg shadow-custom-xl">
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
                type="text"
                name="name"
                onChange={handleChange}
                className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
                placeholder="Name*"
              />
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
                placeholder="Phone Number*"
              />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
                placeholder="Email"
              />
              <select
                name="service"
                onChange={handleChange}
                value={formData.service}
                className="w-72 bg-transparent border rounded-lg py-2 px-1 text-white"
              >
                <option className="text-black" value="">
                  Select Service
                </option>
                <option className="text-black" value="Website Development">
                  Website Development
                </option>
                <option className="text-black" value="Website Design">
                  Website Design
                </option>
                <option className="text-black" value="Mobile App Development">
                  Mobile App Development
                </option>
                <option className="text-black" value="Digital Marketing">
                  Digital Marketing
                </option>
                <option className="text-black" value="SEO">
                  SEO
                </option>
                <option className="text-black" value="CRM and ERP Development">
                  CRM and ERP Development
                </option>
              </select>
              <div className="flex items-center justify-center gap-2 bg-red-600 py-2 px-2 w-72 rounded-lg text-white font-medium">
                {isLoading ? (
                  <Circles className="h-4 w-4 lg:h-6 lg:w-6" />
                ) : (
                  <BiSolidPhoneCall />
                )}
                <button onClick={handleSubmit}>
                  Get Call Back in 2 minutes
                </button>
              </div>
              {isSubmit ? (
                <p className="text-lg md:text-sm lg:text-xl">
                  {responseMessage}
                </p>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ModalForm;
