import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <motion.img
            src="/images/davis1.jpg"
            alt="Davis Pidgeon"
            className="w-32 h-32 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl font-bold text-center mt-4">Davis Pidgeon</h1>
          <p className="text-center mt-2">
            Atlanta, GA |{" "}
            <a href="mailto:davispidgeon81@gmail.com" className="underline">
              davispidgeon81@gmail.com
            </a>
          </p>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded dark:bg-yellow-500"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Travel Section */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src="/images/davis1.jpg" alt="Travel" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          <img src="/images/davis1.jpg" alt="Client Visit" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
        </motion.div>
      </div>
    </div>
  );
}
