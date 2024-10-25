
import Addressbar from "../components/Addressbar";
import Header from "../components/Header"
import hero from "../assets/11.gif";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className="mx-auto"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        height: "100vh",
      }} 
    >
      <Addressbar />
      <Header />
      <Footer/>
    </div>
  );
}
