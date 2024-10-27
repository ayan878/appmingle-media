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

  const onSubmit = () => {};
  return (
    <form className="absolute flex flex-col lg:h-[400px] md:w-60 lg:w-96 gap-3 lg:gap-6 mt-[640px] md:mt-0 lg:mt-20 items-center justify-center ml-20 md:ml-[540px] lg:ml-[790px]">
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
        className="flex items-center justify-center text-xs lg:text-base gap-1 bg-sky-600 py-2 px-2 w-64 md:w-48 lg:w-72 rounded-lg text-white font-medium"
      >
        <BiSolidPhoneCall /> Get Call Back in 2 minutes
      </button>
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
