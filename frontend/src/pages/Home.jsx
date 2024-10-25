
import Addressbar from "../components/Addressbar";
import Header from "../components/Header"
import hero from "../assets/11.gif";

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
    </div>
  );
}
