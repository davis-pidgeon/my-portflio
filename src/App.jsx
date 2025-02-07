import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-6 py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center"
        >
          Davis Pidgeon
        </motion.h1>
        <p className="text-center mt-2">
          Atlanta, GA |{" "}
          <a href="mailto:davispidgeon81@gmail.com" className="underline">
            davispidgeon81@gmail.com
          </a>
        </p>

        <div className="flex justify-center mt-4">
          <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Toggle Dark Mode
          </button>
        </div>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-10">
          <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-2">
            Hi, I'm Davis! I specialize in system design, implementation, and process optimization.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10">
          <h2 className="text-2xl font-semibold">Case Studies & Sources</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="https://www.porterlogic.com/case-studies/porterlogic-helps-thistle-increase-yield-and-improve-margins" className="underline" target="_blank">
                Thistle Case Study
              </a>
            </li>
            <li>
              <a href="https://www.porterlogic.com/case-studies/how-hungryroot-got-its-time-back-by-automating-replenishment-with-porterlogic" className="underline" target="_blank">
                Million Dollar Baby Case Study
              </a>
            </li>
            <li>
              <a href="https://www.porterlogic.com/news-room/porterlogic-receives-supply-demand-chain-executive-and-food-logistics-2024-top-supply-chain-projects-award" className="underline" target="_blank">
                Press Release: Top Supply Chain Projects Award
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/davis-pidgeon-79761a114/" className="underline" target="_blank">
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10">
          <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
          <p className="mt-2">I enjoy hiking, traveling, mission work, and coding projects.</p>
        </motion.section>
      </div>
    </div>
  );
}
