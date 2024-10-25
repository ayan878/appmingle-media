import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
// import footerImg from "../assets/Untitled-design-83.png"

function Footer() {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/", label: "Career" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const services = [
    { to: "/", label: "Website Development" },
    { to: "/about-us", label: "Mobile App Development" },
    { to: "/services", label: "Digital Marketing" },
    { to: "/", label: "ERP & CRM Development" },
    { to: "/contact-us", label: "SEO Optimization" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/appminglemedia/",
      icon: <IoLogoFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/appminglemedia/",
      icon: <IoLogoInstagram />,
      label: "Instagram",
    },
    {
      href: "https://x.com/AppmingleMedia",
      icon: <FaXTwitter />,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/company/appmingle-media/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@AppMingleMedia",
      icon: <FaYoutube />,
      label: "YouTube",
    },
  ];

  return (
    <footer
      className="relative flex flex-col justify-between text-white bg-footer-pattern bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(${footerImg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 justify-between items-start gap-8 p-8 container">
        <div className="flex-1">
          <h1 className="text-lg font-bold">About Company</h1>
          <p className="mt-2">
            A software development company excelling in creating customized,
            high-quality solutions, focusing on innovation, reliability, and
            scalability.
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="text-lg font-bold">Quick Links</h1>
          {quickLinks.map((link) => (
            <Link
              to={link.to}
              key={link.label}
              className="border-b py-1"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <p className="mt-1">
            <span className="font-bold">Head Office:</span> G-13, 3rd Floor, G
            Block, Sector-6, Noida, Uttar Pradesh 231301
          </p>
          <p className="mt-1">
            <span className="font-bold">Branch:</span> Chiraiyatand Postal Park
            Road No-3, Infront of Canara Bank, Patna 800001
          </p>
          <p className="mt-1">
            <span className="font-bold">Email:</span> info@appminglemedia.com
          </p>
          <p className="mt-1">
            <span className="font-bold">Phone:</span> +91 6203689042
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="text-lg font-bold">Our Services</h1>
          {services.map((service) => (
            <Link
              to={service.to}
              key={service.label}
              className="border-b py-1"
              aria-label={service.label}
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full px-8 py-4 mt-4">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              href={href}
              key={label}
              className="flex items-center gap-2"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-center mt-4 md:mt-0">
          &copy; 2024 AppMingle Media. Powered By AppMingle Media |
          <Link to="/terms" className="text-white mx-1">
            Terms & Conditions
          </Link>
          |
          <Link to="/privacy" className="text-white mx-1">
            Privacy Policy
          </Link>
          |
          <Link to="/faqs" className="text-white mx-1">
            FAQs
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
