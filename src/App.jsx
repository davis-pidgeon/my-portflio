import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  // Always keep in dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

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
          <motion.div
            className="flex space-x-8 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              { name: "Client Visit", img: "https://davis-pidgeon.github.io/my-portfolio/images/client-visit.jpeg" },
              { name: "Warehouse Work", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job1.jpeg" },
              { name: "Warehouse Work", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job2.jpeg" },
              { name: "Warehouse Work", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job3.jpeg" }
            ].map((item) => (
              <motion.img
                key={item.name}
                src={item.img}
                alt={item.name}
                className="rounded-lg shadow-lg w-64 h-auto"
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">After Hours</h2>
          <motion.div
            className="flex space-x-8 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
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
        </div>

      </div>
    </div>
  );
}
