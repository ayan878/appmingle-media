import { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Context from "../context/ContextProvider";
import quote from "../api/quoteApi";
import { Circles } from "react-loading-icons";

function ScreenForm() {
  const {
    setIsModalOpen,
    formData,
    setFormData,
    isLoading,
    setIsLoading,
    responseMessage,
    setResponseMessage,
    isSubmit,
    setIsSubmit,
  } = useContext(Context);


  const handleModal = () => {
    setIsModalOpen(true);
  };

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
      const response = await quote(formData);
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

  return (
    <form className="absolute flex flex-col lg:h-[400px] md:w-60 lg:w-96 gap-3 lg:gap-6 mt-[640px] md:mt-0 lg:mt-20 items-center justify-center ml-20 md:ml-[540px] lg:ml-[790px] md:bg-red-500 lg:bg-gray-500">
      <h1 className="text-blue-400 text-md md:text-xs lg:text-lg ">
        Challenge, Call Back in 2 minutes
      </h1>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="rounded-lg bg-transparent md:h-8 lg:h-10 border py-1 px-2 w-64 md:w-48 lg:w-72 placeholder:text-zinc-500 placeholder:text-xs lg:placeholder:text-base"
        placeholder="Name*"
        required
      />
      <input
        type="tel"
        value={formData.phone}
        name="phone"
        onChange={handleChange}
        className="rounded-lg bg-transparent md:h-8 lg:h-10 border py-1 px-2 w-64 md:w-48 lg:w-72 placeholder:text-zinc-500 placeholder:text-xs lg:placeholder:text-base"
        placeholder="Phone Number*"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="rounded-lg bg-transparent md:h-8 lg:h-10 border py-1 px-2 w-64 md:w-48 lg:w-72 placeholder:text-zinc-500 placeholder:text-xs lg:placeholder:text-base"
        placeholder="Email"
      />
      <select
        name="service"
        onChange={handleChange}
        value={formData.service}
        className="rounded-lg bg-transparent text-xs lg:text-base h-8 lg:h-10 border py-1 px-2 w-64 md:w-48 lg:w-72 text-zinc-500"
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
      <button
        type="submit"
        onClick={handleSubmit}
        className="flex items-center justify-center text-xs lg:text-base gap-1 bg-sky-600 py-2 px-2 w-64 md:w-48 lg:w-72 rounded-lg text-white font-medium"
      >
        {isLoading ? (
          <Circles className="h-4 w-4 lg:h-6 lg:w-6" />
        ) : (
          <BiSolidPhoneCall />
        )}
        Get Call Back in 2 minutes
      </button>
      {isSubmit ? (
        <p className="text-lg md:text-sm lg:text-xl">
          Your submission is successful.
        </p>
      ) : (
        ""
      )}
      <div className="flex items-center justify-between w-64 md:w-48 text-xs lg:text-base lg:w-72 gap-2 md:-mt-2">
        <p className="bg-red-600 text-center w-full py-2 px-2 rounded-lg text-white font-medium">
          <a href="tel:+916203689042">Call Now</a>
        </p>
        <button
          type="button"
          className="bg-red-600 w-full mx-auto py-2 px-2 rounded-lg text-white font-medium"
          onClick={handleModal}
        >
          Contact Us
        </button>
      </div>
    </form>
  );
}

export default ScreenForm;
