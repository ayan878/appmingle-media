import { useState, useEffect } from "react";
import backImage from "../assets/image-4.jpg";
import wave from "../assets/wave.png";

function Counter({ end, duration, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end);
    const incrementTime = (duration / endValue) * 1000;

    const counter = setInterval(() => {
      start += 1;
      setCount((prevCount) => prevCount + 1);
      if (start === endValue) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center p-4 border-b md:border-r md:border-b-0">
      <h3 className="text-4xl font-bold text-white z-10">
        {label === "Satisfaction" ? `${count}%` : `${count}+`}
      </h3>
      <p className="text-xl text-gray-400 z-10">{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <div
      className="relative flex flex-col items-center py-10"
      style={{ backgroundImage: `url(${backImage})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto flex flex-wrap justify-around flex-col md:flex-row">
        <div className="w-1/2 md:w-full mx-auto">
          <img src={wave} alt="wave" className="h-20 w-28 mx-auto" />
          <h1 className="relative text-3xl font-bold font-mono text-center text-white">
            Help You To Grow Your Business
          </h1>
        </div>
        <Counter end={100} duration={2} label="Happy Customers" />
        <Counter end={20} duration={2} label="Team Size" />
        <Counter end={100} duration={2} label="Satisfaction" />
      </div>
    </div>
  );
}

export default StatsSection;
