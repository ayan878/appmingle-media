import Addressbar from "../components/Addressbar";
import Header from "../components/Header";
import hero from "../assets/11.gif";
import Footer from "../components/Footer";
import MobAddressbar from "../components/MobAddressbar";
import AppMingleFamily from "../components/AppMingleFamily";
import OurBlog from "../components/OurBlog";
import Expertteam from "../components/Expertteam";
import Counting from "../components/Counting";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div
      className="bg-hero bg-cover h-screen"
    >
      <div className="flex md:hidden">
        <MobAddressbar />
      </div>
      <Addressbar />
      <Header />
      <Hero />
      <Counting />
      <Expertteam />
      <OurBlog />
      <AppMingleFamily />
      <Footer />
    </div>
  );
}
