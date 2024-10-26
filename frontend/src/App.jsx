import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CallbackForm from "./components/CallbackForm";


function App() {
  return (
    <div>
      <CallbackForm/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
