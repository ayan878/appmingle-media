import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useContext } from "react";
import Context from "../context/ContextProvider";
import { Circles } from "react-loading-icons";
import contact from "../api/contactApi";

const MapForm = () => {
  const {
    formData,
    setFormData,
    isLoading,
    setIsLoading,
    responseMessage,
    setResponseMessage,
    isSubmit,
    setIsSubmit,
  } = useContext(Context);

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
      const response = await contact(formData);
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
    <div className="grid grid-rows-1 md:grid-cols-2 gap-4 mx-auto px-4 md:px-8 py-8">
      {/* Left Column: Contact Information */}
      <div className="flex flex-col justify-center text-center md:text-start font-Merri">
        <h1 className="text-2xl font-bold mb-4">Feel Free To Contact Us!</h1>
        <p className="mb-4">
          Our "Contact Us" page offers various ways to get in touch, including
          email, phone, and social media. We’re here to answer your questions
          and provide support.
        </p>
        <div className="text-white mb-4">
          <span className="block xl:hidden text-md xl:text-lg text-black mb-2">
            Link With Us Now :
          </span>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="hidden xl:block text-md xl:text-lg text-black mb-2">
              Link With Us Now :
            </span>
            <FaLinkedin className="bg-sky-400 w-8 h-8 p-1 rounded-full hover:bg-sky-500 transition" />
            <FaFacebook className="bg-sky-400 w-8 h-8 p-1 rounded-full hover:bg-sky-500 transition" />
            <FaTwitter className="bg-sky-400 w-8 h-8 p-1 rounded-full hover:bg-sky-500 transition" />
            <FaYoutube className="bg-sky-400 w-8 h-8 p-1 rounded-full hover:bg-sky-500 transition" />
            <FaInstagram className="bg-sky-400 w-8 h-8 p-1 rounded-full hover:bg-sky-500 transition" />
            <FaWhatsapp className="bg-sky-400 w-8 h-8 p-1 rounded-full hover:bg-sky-500 transition" />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448400.32690942776!2d77.320955!3d28.59595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b7a3581a21ffee5%3A0xecabf7a7ec8aa69a!2sAppMingle%20Media%20-%20Website%20Development%20Services%20%7C%20App%20Development%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sus!4v1730310201429!5m2!1sen!2sus"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right Column: Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-zinc-300 gap-4 p-8 shadow-md"
      >
        <label className="text-lg font-semibold">Name</label>
        <input
          className="w-full rounded-lg py-2 px-2 border-2 border-zinc-500 outline-none focus:ring-2 focus:ring-sky-400"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          required
        />

        <label className="text-lg font-semibold">Phone Number</label>
        <input
          className="w-full rounded-lg py-2 px-2 border-2 border-zinc-500 outline-none focus:ring-2 focus:ring-sky-400"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number*"
          required
        />

        <label className="text-lg font-semibold">Email</label>
        <input
          className="w-full rounded-lg py-2 px-2 border-2 border-zinc-500 outline-none focus:ring-2 focus:ring-sky-400"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          type="email"
          required
        />

        <label className="text-lg font-semibold">Select Service</label>
        <select
          name="service"
          onChange={handleChange}
          value={formData.service}
          className="w-full rounded-lg py-2 px-2 border-2 text-lg border-zinc-500 outline-none focus:ring-2 focus:ring-sky-400"
          required
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
          className="w-full rounded-lg py-2 px-2 font-Merri font-bold bg-sky-500 hover:bg-sky-600 transition flex items-center justify-center"
        >
          {isLoading ? <Circles className="h-4 w-4" /> : "Send"}
        </button>
        {isSubmit && <p className="text-center mt-2">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default MapForm;
