import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-12">
        
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Hi, I'm Davis Pidgeon, a specialist in **system design, implementation, and process optimization**. 
            I have worked on **WMS, MRP, and procurement systems** to help businesses operate efficiently.
            Below, you'll find my **case studies**, **helpful links**, and some snapshots of my work and travels.
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4 mt-10">
          <motion.img
            src="https://davis-pidgeon.github.io/my-portfolio/images/davis2.jpeg"
            alt="Davis Pidgeon"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-center text-lg">
            Atlanta, GA |{" "}
            <a href="mailto:davispidgeon81@gmail.com" className="underline hover:text-blue-500 dark:hover:text-yellow-400 transition">
              davispidgeon81@gmail.com
            </a>
          </p>

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-yellow-500"
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>
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
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800 dark:hover:bg-gray-700 transition-transform transform hover:scale-110"
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
          <h2 className="text-2xl font-semibold text-center mb-6">Photos</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { name: "Travel", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel1.jpeg" },
              { name: "Client Visit", img: "https://davis-pidgeon.github.io/my-portfolio/images/client-visit.jpeg" }
            ].map((item) => (
              <motion.img
                key={item.name}
                src={item.img}
                alt={item.name}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
