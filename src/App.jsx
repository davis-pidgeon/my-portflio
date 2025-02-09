import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDeviceType from "./useDeviceType"; // ✅ Import the hook

export default function Portfolio() {
  // Always keep in dark mode
useEffect(() => {
  document.documentElement.classList.add("bg-[#EADDC8]");
  document.documentElement.classList.add("text-[#2D3748]");
}, []);

  // Slideshow logic
  const [currentIndexJob, setCurrentIndexJob] = useState(0);
  const [currentIndexHobby, setCurrentIndexHobby] = useState(0);

  const isMobile = useDeviceType(); // ✅ Detect if the user is on mobile

  const imageSize = isMobile ? "w-[300px] h-[200px]" : "w-[500px] h-[300px]";

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

  // Function to get a unique random image
  const getRandomImage = (photoArray, currentPhotos) => {
    let newPhoto;
    do {
      newPhoto = photoArray[Math.floor(Math.random() * photoArray.length)];
    } while (currentPhotos.includes(newPhoto));
    return newPhoto;
  };

  // Initial state for displayed images
  const [currentJobPhotos, setCurrentJobPhotos] = useState([
    jobPhotos[0], jobPhotos[1], jobPhotos[2]
  ]);

  const [currentHobbyPhotos, setCurrentHobbyPhotos] = useState([
    hobbyPhotos[0], hobbyPhotos[1], hobbyPhotos[2]
  ]);

  // Update one image at a time smoothly
  const updateImage = (setPhotos, photoArray) => {
    setTimeout(() => {
      setPhotos((prevPhotos) => {
        const randomIndex = Math.floor(Math.random() * 3); // Pick a random slot
        const newPhoto = getRandomImage(photoArray, prevPhotos);
        const updatedPhotos = [...prevPhotos];
        updatedPhotos[randomIndex] = newPhoto;
        return updatedPhotos;
      });
    }, 5000); // Transition every 4-10 seconds randomly
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateImage(setCurrentJobPhotos, jobPhotos);
      updateImage(setCurrentHobbyPhotos, hobbyPhotos);
    }, 4000); // One image changes every 4s

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-[#EADDC8] text-[#2D3748]">
      <div className="container mx-auto px-6 py-12">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <motion.img
            src="https://davis-pidgeon.github.io/my-portfolio/images/davis2.jpeg"
            alt="Davis Pidgeon"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-[#A76D47]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl font-bold text-center text-[#568EA3]">Davis Pidgeon</h1>
          <p className="text-center text-lg">
            Atlanta, GA |{" "}
            <a href="mailto:davispidgeon81@gmail.com" className="underline text-[#568EA3] hover:text-[#2D3748] transition">
              davispidgeon81@gmail.com
            </a>
          </p>
        </div>

        {/* Summary Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Hi, I'm Davis Pidgeon, I have been designing, building, testing, implementing and supporting supply chain software for the last
            5 years. I've learned from my time in an established supply chain company, using logic and design proven over the years. I have 
            also experienced the challenge of building that logic for the first time yourself as the first Solution Engineer at a start up.
            I have always love challenging problems with great people and I seek to continue the joy of finding solutions!
            Below, you'll find my case studies, helpful links, and snapshots of my work and hobbies.
          </p>
        </div>

        {/* Case Studies & Helpful Links Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#568EA3]">Case Studies & Helpful Links</h2>
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
          <h2 className="text-2xl font-semibold mb-6 text-[#568EA3]">On the Job</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentJobPhotos.map((photo, index) => (
              <motion.div
                key={photo.name}
                className={'relative ${imageSize} overflow-hidden rounded-lg shadow-lg bg-[#C08457] border-2 border-[#A76D47]'}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 2.5 }}
              >
                <motion.img src={photo.img} alt={photo.name} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobby Photos Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#568EA3]">After Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentHobbyPhotos.map((photo, index) => (
              <motion.div
                key={photo.name}
                className={'relative ${imageSize} overflow-hidden rounded-lg shadow-lg bg-[#C08457] border-2 border-[#A76D47]'}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 2.5 }}
              >
                <motion.img src={photo.img} alt={photo.name} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

