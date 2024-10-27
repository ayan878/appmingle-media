import { useContext, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Context from "./ContextProvider";

function ScreenForm() {
  const { setIsModalOpen } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

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


  return (
    <form className="flex flex-col h-[400px] w-96 gap-6 mt-20 items-center justify-center ml-[790px]">
      <h1 className="text-blue-400 text-md">
        Challenge, Call Back in 2 minutes
      </h1>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-500"
        placeholder="Name*"
        required
      />
      <input
        type="tel"
        value={formData.phone}
        name="phone"
        onChange={handleChange}
        className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-500"
        placeholder="Phone Number*"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-500"
        placeholder="Email"
      />
      <select
        name="service"
        onChange={handleChange}
        value={formData.service}
        className="w-72 bg-transparent border rounded-lg py-2 text-zinc-500 "
      >
        <option className="text-black" value="">
          Select Service
        </option>
        <option className="text-black" value="web-development">
          Web Development
        </option>
        <option className="text-black" value="website-design">
          Website Design
        </option>
        <option className="text-black" value="mobile-app-development">
          Mobile App Development
        </option>
        <option className="text-black" value="digital-marketing">
          Digital Marketing
        </option>
        <option className="text-black" value="seo">
          SEO
        </option>
        <option className="text-black" value="crm-erp-development">
          CRM and ERP Development
        </option>
      </select>
      <button
        type="submit"
        className="flex items-center justify-center gap-1 bg-sky-600 py-2 px-2 w-72 rounded-lg text-white font-medium"
      >
        <BiSolidPhoneCall /> Get Call Back in 2 minutes
      </button>
      <div className="flex items-center justify-between w-72 gap-2">
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
