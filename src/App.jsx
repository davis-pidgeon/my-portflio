import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  // Always keep in dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // State for controlling the photo carousel
  const [scrollX, setScrollX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Function to scroll images manually
  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300; // Adjust scroll speed
      containerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <motion.img
            src="https://davis-pidgeon.github.io/my-portfolio/images/davis2.jpeg"
            alt="Davis Pidgeon"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl font-bold text-center">Davis Pidgeon</h1>
          <p className="text-center text-lg">
            Atlanta, GA |{" "}
            <a href="mailto:davispidgeon81@gmail.com" className="underline hover:text-yellow-400 transition">
              davispidgeon81@gmail.com
            </a>
          </p>
        </div>

        {/* Summary Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Hi, I'm Davis Pidgeon, a specialist in **system design, implementation, and process optimization**. 
            I have worked extensively on **WMS, MRP, and procurement systems**, helping businesses improve efficiency 
            and streamline operations. Below, you'll find my **case studies**, **helpful links**, and snapshots 
            of my work and hobbies.
          </p>
        </div>

        {/* Case Studies & Helpful Links Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Case Studies & Helpful Links</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Thistle", img: "https://davis-pidgeon.github.io/my-portfolio/images/thistle.jpeg", url: "https://www.porterlogic.com/case-studies/porterlogic-helps-thistle-increase-yield-and-improve-margins" },
              { name: "Hungryroot", img: "https://davis-pidgeon.github.io/my-portfolio/images/hungryroot.jpeg", url: "https://www.porterlogic.com/case-studies/how-hungryroot-got-its-time-back-by-automating-replenishment-with-porterlogic" },
              { name: "Award", img: "https://davis-pidgeon.github.io/my-portfolio/images/award1.png", url: "https://www.porterlogic.com/news-room/porterlogic-receives-supply-demand-chain-executive-and-food-logistics-2024-top-supply-chain-projects-award" },
              { name: "LinkedIn", img: "https://davis-pidgeon.github.io/my-portfolio/images/linkedin1.png", url: "https://www.linkedin.com/in/davis-pidgeon-79761a114/" },
            ].map((client) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={client.img} alt={client.name} className="w-32 h-auto rounded-md" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">On the Job</h2>
          <div className="relative overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[
                { name: "Client Visit", img: "https://davis-pidgeon.github.io/my-portfolio/images/client-visit.jpeg" },
                { name: "Thistle Work", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-1.jpeg" },
                { name: "MODEX", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-2.jpeg" },
                { name: "Manhattan Office", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-5.jpeg" },
                { name: "CSCMP", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-3.jpeg" },
                { name: "ACE Hardware", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-4.jpeg" },
                { name: "Thistle Visit", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-6.jpeg" },
                { name: "CSCMP Jedi", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job-7.jpeg" }
              ].map((item) => (
                <motion.img
                  key={item.name}
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg shadow-lg w-64 h-auto"
                />
              ))}
            </motion.div>
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full" onClick={() => handleScroll("left")}>⬅️</button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full" onClick={() => handleScroll("right")}>➡️</button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">After Hours</h2>
          <div className="relative overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[
                { name: "Hiking", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel1.jpeg" },
                { name: "Camping", img: "https://davis-pidgeon.github.io/my-portfolio/images/davis1.jpeg" },
                { name: "Volunteering", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel1.jpeg" }
              ].map((item) => (
                <motion.img
                  key={item.name}
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg shadow-lg w-64 h-auto"
                />
              ))}
            </motion.div>
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full" onClick={() => handleScroll("left")}>⬅️</button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full" onClick={() => handleScroll("right")}>➡️</button>
          </div>
        </div>

      </div>
    </div>
  );
}
