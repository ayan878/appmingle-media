import { useState } from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  IoLocationSharp,
  IoMenu,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMail,
  IoClose,
  IoCall,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function MobAddressbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative mx-auto">
      <button
        className="flex items-center justify-center gap-2"
        onClick={() => setOpenMenu(true)}
      >
        <IoMenu />
        TOP MENU
      </button>

      {/* Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`w-3/5 fixed top-0 right-0 h-full z-50 bg-white transition-transform transform ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-4 h-full">
          <button
            className="mb-4 ml-72 border border-gray-500 rounded-full"
            onClick={() => setOpenMenu(false)}
          >
            <IoClose size={24} className="text-gray-400" />
          </button>

          <div className="flex flex-col items-start w-full shadow-sm py-4 px-4">
            <a
              href="tel:+916203689042"
              className="flex items-center justify-between gap-1 mb-2"
            >
              <IoCall />
              +91 6203689042
            </a>
            <a
              href="mailto:info@appminglemedia.com"
              className="flex items-center justify-between gap-1 mb-2"
            >
              <IoMail />
              info@appminglemedia.com
            </a>
            <span className="flex items-center gap-2 text-xs mb-2">
              <IoLocationSharp /> G-13, 3rd Floor, G Block, Sector 6, Noida,
              Uttar Pradesh 231301
            </span>
            <div className="flex items-center justify-start gap-4 shadow-md w-full py-2">
              <a
                href="https://www.facebook.com/appminglemedia/"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="https://www.instagram.com/appminglemedia/"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://x.com/AppmingleMedia"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/appmingle-media/"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@AppMingleMedia"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobAddressbar;
