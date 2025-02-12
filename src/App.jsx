import { useEffect, useState, useRef } from "react";
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

  const tagStyles = "bg-[#5A5A5A] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md text-center flex items-center justify-center";

    // Track hovered images using useRef
  const hoveredPhotosRef = useState(new Set());

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

  
 const [hoveredPhotos, setHoveredPhotos] = useState(new Set());
  const [currentJobPhotos, setCurrentJobPhotos] = useState([jobPhotos[0], jobPhotos[1], jobPhotos[2]]);
  const [currentHobbyPhotos, setCurrentHobbyPhotos] = useState([hobbyPhotos[0], hobbyPhotos[1], hobbyPhotos[2]]);

  const handleMouseEnter = (photoName) => {
    setHoveredPhotos((prev) => new Set(prev).add(photoName));
  };

  const handleMouseLeave = (photoName) => {
    setHoveredPhotos((prev) => {
      const newSet = new Set(prev);
      newSet.delete(photoName);
      return newSet;
    });
  };

  const getRandomImage = (photoArray, currentPhotos) => {
    let newPhoto;
    do {
      newPhoto = photoArray[Math.floor(Math.random() * photoArray.length)];
    } while (currentPhotos.includes(newPhoto));
    return newPhoto;
  };

  const updateImage = (setPhotos, photoArray) => {
      setPhotos((prevPhotos) => {
        const availablePhotos = photoArray.filter((photo) => !hoveredPhotos.has(photo.name));
        if (availablePhotos.length === 0) return prevPhotos;

        // Find a slot that is NOT hovered
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * prevPhotos.length);
        } while (hoveredPhotos.has(prevPhotos[randomIndex].name));

        // Get a new image for that slot
        const newPhoto = getRandomImage(availablePhotos, prevPhotos);

        // Replace the selected slot with the new image
        const updatedPhotos = [...prevPhotos];
        updatedPhotos[randomIndex] = newPhoto;
        return updatedPhotos;
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateImage(setCurrentJobPhotos, jobPhotos);
      updateImage(setCurrentHobbyPhotos, hobbyPhotos);
    }, 8000);

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
            Atlanta, GA | 404.538.0196 |{" "}
            <a href="mailto:davispidgeon81@gmail.com" className="underline text-[#568EA3] hover:text-[#2D3748] transition">
              davispidgeon81@gmail.com
            </a>
          </p>
        </div>

        {/* Summary Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Hello, and welcome! I'm Davis Pidgeon and I have been designing, building, testing, implementing, and supporting supply chain software for the last
            5 years. Starting out at an established supply chain software company, I built on and learned from logic and design that has been proven and used for over 30 years. 
            Currently, I am learning from the challenge of building that logic for the first time myself as the first Solution Engineer at a start up.
            I always love facing challenging problems with great people and I seek to continue the joy of finding solutions.
            Below, you'll find my case studies, helpful links, and snapshots of my work and hobbies.
          </p>
        </div>

        {/* Case Studies & Helpful Links Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#568EA3]">Case Studies & Helpful Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              name: "Warehouse Optimization",
              description: "Developed a WMS system that identified over $500K in annual savings by optimizing warehouse operations. Click to learn more!",
              img: "https://davis-pidgeon.github.io/my-portfolio/images/thistle.jpeg",
              url: "https://www.porterlogic.com/case-studies/porterlogic-helps-thistle-increase-yield-and-improve-margins"
            }, {
              name: "Automated Procurement",
              description: "Implemented an MRP solution that reduced inventory waste and reclaimed 20% of weekly labor hours. Click to learn more!",
              img: "https://davis-pidgeon.github.io/my-portfolio/images/hungryroot.jpeg",
              url: "https://www.porterlogic.com/case-studies/how-hungryroot-got-its-time-back-by-automating-replenishment-with-porterlogic"
            }, {
              name: "Award-Winning Project",
              description: "Recognized by Supply & Demand Chain Executive for innovation in warehouse technology solutions. Click to learn more!",
              img: "https://davis-pidgeon.github.io/my-portfolio/images/award1.png",
              url: "https://www.porterlogic.com/news-room/porterlogic-receives-supply-demand-chain-executive-and-food-logistics-2024-top-supply-chain-projects-award"
            }, {
              name: "LinkedIn Profile",
              description: "Let’s connect!",
              img: "https://davis-pidgeon.github.io/my-portfolio/images/linkedin1.png",
              url: "https://www.linkedin.com/in/davis-pidgeon-79761a114/"
            }].map((client) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform text-white flex flex-col items-center text-center overflow-hidden group"
                whileHover={{ scale: 1.05 }}
              >
                <img src={client.img} alt={client.name} className="w-56 h-auto rounded-md mb-3" />
                <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                <motion.div
                  className={`bg-[#355F72] text-white text-sm p-2 rounded mt-2 transition-all duration-300 ease-in-out ${isMobile ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40'}`}
                  >
                  {client.description}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>

         {/* Functional Experience Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#568EA3]">Functional Experience</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Design", "Configurations", "Wiring Mod Scripts", "SQL & Database Management", "Extension Development & Implementation", "Creating Test Scripts", "Testing Extensions", "Go Live Testing & Support", "Issue Troubleshooting & Resolution", "Performing Code Changes", "Writing SQL Views and Editing Stored Procedures", "Translating Client Needs to Internal Development Teams", "Solution Demos", "Client Meetings & Relationship Management", "Mentoring Junior Consultants", "Delivering SQL Training Classes"].map((item) => (
              <div key={item} className={tagStyles}>{item}</div>
            ))}
          </div>
        </div>

        {/* Software Proficiency Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#568EA3]">Software Proficiency</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Manhattan WMoS", "PorterLogic", "SQL & Database Management", "VS Code", "Oracle", "Postgres", "Postman", "ChatGPT", "Jira", "Putty", "Excel", "VBA", "XML", "Python", "JavaScript", "MS Access", "Notepad++", "FileZilla", "GraphQL", "TCP Test Tool", "Vocollect", "FlexSim", "AutoCAD"].map((item) => (
              <div key={item} className={tagStyles}>{item}</div>
            ))}
          </div>
        </div>

        {/* Key Personal Strengths Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#568EA3]">Key Personal Strengths</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Critical Thinking", "Handling Ambiguity", "Taking Initiative", "Leadership", "Adding Value", "Time Management", "Multi-tasking", "Communication", "Strong Work Ethic"].map((item) => (
              <div key={item} className={tagStyles}>{item}</div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#568EA3]">Let’s Connect</h2>
          <p className="mt-2 text-lg">Interested in discussing how I can help your team? Let’s talk!</p>
          <a href="mailto:davispidgeon81@gmail.com" className="mt-4 inline-block px-6 py-2 bg-[#A76D47] text-white rounded-full shadow-md hover:shadow-lg">Contact Me</a>
        </div>


        {/* Job Photos Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#568EA3]">On the Job</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentJobPhotos.map((photo, index) => (
              <motion.div
                key={photo.name}
                className={'relative ${imageSize}  overflow-hidden rounded-lg shadow-lg hover:shadow-xl bg-[#C08457] border-2 border-[#A76D47] hover:scale-110'}
                whileHover={{ scale: 1.1 }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                onMouseEnter={() => handleMouseEnter(photo.name)}
                onMouseLeave={() => handleMouseLeave(photo.name)}
              >
                <motion.img src={photo.img} alt={photo.name} className="w-full h-full object-cover" />
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#A76D47]/80 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                  {photo.name}
                </motion.div>
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
                className={'relative ${imageSize}  overflow-hidden rounded-lg shadow-lg hover:shadow-xl bg-[#C08457] border-2 border-[#A76D47] hover:scale-110'}
                whileHover={{ scale: 1.1 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                onMouseEnter={() => handleMouseEnter(photo.name)}
                onMouseLeave={() => handleMouseLeave(photo.name)}
              >
                <motion.img src={photo.img} alt={photo.name} className="w-full h-full object-cover" />
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#A76D47]/80 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                  {photo.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

