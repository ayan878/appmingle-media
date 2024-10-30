import { useLocation, useParams } from "react-router-dom";

function ServiceModal() {
  const { service } = useParams();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const page = pathSegments[pathSegments.length - 1]; // Get the last segment

  const pageTitles = {
    "web-development": "Our Services",
    "mobile-app-development": "Our Services",
    "digital-marketing": "Our Services",
    "web-design": "Our Services",
    "about-us": "About Us",
    "contact-us": "Contact Us",
  };

  // Determine which page name to display based on the URL parameter
  const pageTitle = pageTitles[service] || "Default Title";

  return (
    <div className="relative bg-service bg-cover bg-center h-60 md:h-[490px] xl:h-screen">
      <div className="absolute inset-0 flex items-center justify-center md:h-[490px] xl:h-screen w-full bg-gradient-to-b from-black to-gray-900 opacity-80">
        <h1 className="text-center text-3xl md:text-5xl text-white font-bold font-Merri">
          {page === "about-us" || page === "contact-us"
            ? pageTitles[page]
            : pageTitle}
        </h1>
      </div>
    </div>
  );
}

export default ServiceModal;
