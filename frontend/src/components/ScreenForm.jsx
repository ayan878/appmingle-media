import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";

function ScreenForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <form className="flex flex-col h-[400px] w-96 gap-6 bg-sky-500 mt-24 items-center justify-center mx-auto">
      <h1 className="text-white text-md">Challenge, Call Back in 2 minutes</h1>
      <input
        type="text"
        className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
        placeholder="Name*"
        required
      />
      <input
        type="tel"
        className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
        placeholder="Phone Number*"
        required
      />
      <input
        type="email"
        className="rounded-lg bg-transparent border py-1 px-2 w-72 placeholder:text-zinc-300"
        placeholder="Email"
      />
      <select className="w-72 bg-transparent border rounded-lg py-2 text-white">
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
        className="bg-sky-600 py-2 px-2 w-72 rounded-lg text-white font-medium"
      >
        <BiSolidPhoneCall /> Get Call Back in 2 minutes
      </button>
      <div>
        <p className="bg-red-600 py-2 px-2 w-72 rounded-lg text-white font-medium">
          <a href="tel:+916203689042">Call Now</a>
        </p>
        <button
          type="button"
          className="bg-red-600 py-2 px-2 w-72 rounded-lg text-white font-medium"
          onClick={handleModal}
        >
          Contact Us
        </button>
      </div>
    </form>
  );
}

export default ScreenForm;
