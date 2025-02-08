import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  // Always keep in dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Slideshow logic
  const [currentIndexJob, setCurrentIndexJob] = useState(0);
  const [currentIndexHobby, setCurrentIndexHobby] = useState(0);

  const jobPhotos = [
    { name: "Client Visit with PPE", img: "https://davis-pidgeon.github.io/my-portfolio/images/client-visit.jpeg" },
    { name: "Full Circle Moment!", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job1.jpeg" },
    { name: "MODEX", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job2.jpeg" },
    { name: "Manhattan Associates", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job5.jpeg" },
    { name: "CSCMP", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job3.jpeg" },
    { name: "ACE Colorado Springs Warehouse", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job4.jpeg" },
    { name: "Client Visit", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job6.jpeg" },
    { name: "CSCMP Jedi", img: "https://davis-pidgeon.github.io/my-portfolio/images/on-the-job7.jpeg" }
  ];

   const hobbyPhotos = [
     { name: "Accadia NP", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel1.jpeg" },
     { name: "Olympic NP Sunrise", img: "https://davis-pidgeon.github.io/my-portfolio/images/davis1.jpeg" },
     { name: "Olympic NP Beach Day", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel2.jpeg" },
     { name: "Yosemite NP", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel3.jpeg" },
     { name: "Joshua Tree NP", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel4.jpeg" },
     { name: "Rocky Mnt NP", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel5.jpeg" },
     { name: "Pikes Peak", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel6.jpeg" },
     { name: "Camping", img: "https://davis-pidgeon.github.io/my-portfolio/images/travel7.jpeg" }
  ];

    // Function to get random 3 photos (ensuring no back-to-back repeats)
  const getRandomPhotos = (photoArray, currentPhotos) => {
    let newPhotos = [];
    while (newPhotos.length < 3) {
      let randomPhoto = photoArray[Math.floor(Math.random() * photoArray.length)];
      if (!newPhotos.includes(randomPhoto) && !currentPhotos.includes(randomPhoto)) {
        newPhotos.push(randomPhoto);
      }
    }
    return newPhotos;
  };

    // States for both sections
  const [currentJobPhotos, setCurrentJobPhotos] = useState(getRandomPhotos(jobPhotos, []));
  const [currentHobbyPhotos, setCurrentHobbyPhotos] = useState(getRandomPhotos(hobbyPhotos, []));
  const [isHovered, setIsHovered] = useState(false);

  // Auto-transition every 5 seconds unless hovering
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentJobPhotos((prev) => getRandomPhotos(jobPhotos, prev));
        setCurrentHobbyPhotos((prev) => getRandomPhotos(hobbyPhotos, prev));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#2d3748]">
      <div className="container mx-auto px-6 py-12">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <motion.img
            src="https://davis-pidgeon.github.io/my-portfolio/images/davis2.jpeg"
            alt="Davis Pidgeon"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-[#c2a77d]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl font-bold text-center text-[#0077b6]">Davis Pidgeon</h1>
          <p className="text-center text-lg">
            Atlanta, GA |{" "}
            <a href="mailto:davispidgeon81@gmail.com" className="underline text-[#0077b6] hover:text-[#005f91] transition">
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
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#0077b6]">Case Studies & Helpful Links</h2>
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


        {/* Job Photos Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#0077b6]">On the Job</h2>
          <div className="flex justify-center gap-6">
            <AnimatePresence>
              {currentJobPhotos.map((photo) => (
                <motion.div
                  key={photo.name}
                  className="relative w-[500px] h-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white border-2 border-[#c2a77d]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.img
                    src={photo.img}
                    alt={photo.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute bottom-0 bg-[#c2a77d] bg-opacity-50 text-white text-center w-full py-2 text-lg">
                    {photo.name}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Hobby Photos Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#0077b6]">After Hours</h2>
          <div className="flex justify-center gap-6">
            <AnimatePresence>
              {currentHobbyPhotos.map((photo) => (
                <motion.div
                  key={photo.name}
                  className="relative w-[500px] h-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white border-2 border-[#c2a77d]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={photo.img}
                    alt={photo.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute bottom-0 bg-[#c2a77d] bg-opacity-50 text-white text-center w-full py-2 text-lg">
                    {photo.name}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
