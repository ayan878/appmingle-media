import {
  IoCall,
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMail,
  IoMenu,
  IoSearch,
} from "react-icons/io5";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState } from "react";

function Addressbar() {
  const [showSearch, setShowSearch] = useState(false); 

  return (
    <div className="flex mx-auto py-2 items-center container justify-between bg-yellow-500">
      <div className="flex items-center justify-between gap-2">
        <a href="tel:+916203689042" className="flex items-center gap-2 text-xs">
          <IoCall /> +91 6203689042
        </a>
        <a
          href="mailto:info@appminglemedia.com"
          className="flex items-center gap-2 text-xs"
        >
          <IoMail /> info@appminglemedia.com
        </a>
        <span className="flex items-center gap-2 text-xs">
          <IoLocationSharp /> G-13, 3rd Floor, G Block, Sector 6, Noida, Uttar
          Pradesh 231301
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        {showSearch ? (
          <div className="flex items-center w-full">
            <div
            className={`flex items-center justify-between gap-2 rounded-lg border ${
              showSearch
                ? "flex bg-transparent w-full md:w-72 px-2"
                : "w-8 border-none"
            } transition-all duration-100 focus:outline-none`}
            >
              <input
                type="search"
                className="bg-transparent w-full focus:outline-none border"
                placeholder="Search..."
              />
              <button
                onClick={() => setShowSearch(false)}
                className=" text-white"
              >
                <IoSearch />
              </button>
            </div>
          </div>
        ) : (
          <>
            <a
              href="https://www.facebook.com/appminglemedia/"
              className="flex items-center gap-2"
            >
              <IoLogoFacebook />
            </a>
            <a
              href="https://www.instagram.com/appminglemedia/"
              className="flex items-center gap-2"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://x.com/AppmingleMedia"
              className="flex items-center gap-2"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/appmingle-media/"
              className="flex items-center gap-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@AppMingleMedia"
              className="flex items-center gap-2"
            >
              <FaYoutube />
            </a>

            {/* Search Icon */}
            <button onClick={() => setShowSearch(true)} className="ml-2">
              <IoSearch />
            </button>
            <IoMenu />
          </>
        )}
      </div>
    </div>
  );
}

export default Addressbar;
