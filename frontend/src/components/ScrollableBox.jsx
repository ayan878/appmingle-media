import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import image1 from "../assets/9-300x146.png";
import image2 from "../assets/10-300x146.png";
import image3 from "../assets/10.png";
import image4 from "../assets/11-300x146.png";
import image5 from "../assets/11.png";
import image6 from "../assets/12-300x146.png";
import image7 from "../assets/12.png";
import image8 from "../assets/14-300x146.png";
import image9 from "../assets/14.png";
import image10 from "../assets/15-300x146.png";
import image11 from "../assets/16-300x146.png";
import image12 from "../assets/16.png";
import image13 from "../assets/17-300x146.png";
import image14 from "../assets/18-300x146.png";
import image15 from "../assets/18.png";
import image16 from "../assets/2-300x146.png";
import image17 from "../assets/21-300x146.png";
import image18 from "../assets/23-300x146.png";
import image19 from "../assets/23.png";
import image20 from "../assets/21.png";
import image21 from "../assets/24-300x146.png";
import image22 from "../assets/25-300x146.png";
import image23 from "../assets/25.png";
import image24 from "../assets/27.png";
import image25 from "../assets/27-300x146.png";
import image26 from "../assets/4-300x146.png";
import image27 from "../assets/28-300x146.png";
import image28 from "../assets/28.png";
import image29 from "../assets/35170-300x146.png";
import image30 from "../assets/5-300x146.png";
import image31 from "../assets/4.png";
import image32 from "../assets/5.png";
import image33 from "../assets/7.png";
import image34 from "../assets/7-300x146.png";
import image35 from "../assets/6.png";
import image36 from "../assets/6-300x146.png";

const pics = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image7, alt: "Image 7" },
  { src: image8, alt: "Image 8" },
  { src: image9, alt: "Image 9" },
  { src: image10, alt: "Image 10" },
  { src: image11, alt: "Image 11" },
  { src: image12, alt: "Image 12" },
  { src: image13, alt: "Image 13" },
  { src: image14, alt: "Image 14" },
  { src: image15, alt: "Image 15" },
  { src: image16, alt: "Image 16" },
  { src: image17, alt: "Image 17" },
  { src: image18, alt: "Image 18" },
  { src: image19, alt: "Image 19" },
  { src: image20, alt: "Image 20" },
  { src: image21, alt: "Image 21" },
  { src: image22, alt: "Image 22" },
  { src: image23, alt: "Image 23" },
  { src: image24, alt: "Image 24" },
  { src: image25, alt: "Image 25" },
  { src: image26, alt: "Image 26" },
  { src: image27, alt: "Image 27" },
  { src: image28, alt: "Image 28" },
  { src: image29, alt: "Image 29" },
  { src: image30, alt: "Image 30" },
  { src: image31, alt: "Image 31" },
  { src: image32, alt: "Image 32" },
  { src: image33, alt: "Image 33" },
  { src: image34, alt: "Image 34" },
  { src: image35, alt: "Image 35" },
  { src: image36, alt: "Image 36" },
];

function ScrollableBox() {
  // State to control the active image index for the first image in the pair
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Timer to switch the active images every few seconds
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 5000); // Change interval time as needed
    return () => clearInterval(interval);
  }, []);

  // Calculate indices for the two images to show
  const firstImageIndex = activeImageIndex % pics.length;
  const secondImageIndex = (activeImageIndex + 1) % pics.length;
  const thirdImageIndex = (activeImageIndex + 2) % pics.length;

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div className="flex">
      {isSmallDevice ? (
        <div className="relative w-full overflow-hidden h-44 mb-4">
          <AnimatePresence>
            <motion.div
              key={activeImageIndex} // Use active index to trigger the animation
              initial={{ x: "100%" }} // Start off-screen to the right
              animate={{ x: 0 }} // Animate to the center
              exit={{ x: "-100%" }} // Exit off-screen to the left
              transition={{
                duration: 2, // Adjust speed of the transition
                ease: "easeInOut",
              }}
              className="flex space-x-4 absolute inset-0 "
            >
              <img
                src={pics[firstImageIndex].src}
                alt={pics[firstImageIndex].alt}
                className="w-full h-full object-contain rounded shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ):(<>
       <div className="relative w-full overflow-hidden h-44 mb-4">
        <AnimatePresence>
          <motion.div
            key={activeImageIndex} // Use active index to trigger the animation
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: 0 }} // Animate to the center
            exit={{ x: "-100%" }} // Exit off-screen to the left
            transition={{
              duration: 2, // Adjust speed of the transition
              ease: "easeInOut",
            }}
            className="flex space-x-4 absolute inset-0"
          >
            <img
              src={pics[firstImageIndex].src}
              alt={pics[firstImageIndex].alt}
              className="w-full h-full object-contain rounded shadow-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative w-full overflow-hidden h-44 mb-4">
        <AnimatePresence>
          <motion.div
            key={activeImageIndex} // Use active index to trigger the animation
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: 0 }} // Animate to the center
            exit={{ x: "-100%" }} // Exit off-screen to the left
            transition={{
              duration: 2, // Adjust speed of the transition
              ease: "easeInOut",
            }}
            className="flex space-x-4 absolute inset-0"
          >
            <img
              src={pics[secondImageIndex].src}
              alt={pics[secondImageIndex].alt}
              className="w-full h-full object-contain rounded shadow-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative w-full overflow-hidden h-44 mb-4">
        <AnimatePresence>
          <motion.div
            key={activeImageIndex} // Use active index to trigger the animation
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: 0 }} // Animate to the center
            exit={{ x: "-100%" }} // Exit off-screen to the left
            transition={{
              duration: 2, // Adjust speed of the transition
              ease: "easeInOut",
            }}
            className="flex space-x-4 absolute inset-0"
            >
            <img
              src={pics[thirdImageIndex].src}
              alt={pics[thirdImageIndex].alt}
              className="w-full h-full object-contain rounded shadow-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      </>)}
    </div>
  );
}

export default ScrollableBox;
