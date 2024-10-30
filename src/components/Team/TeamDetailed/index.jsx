import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sanjar from '/src/assets/bg-images/sanjar.jpg';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sanjar Juraev',
    role: 'Senior Frontend Engineer | Team Leader',
    image: Sanjar,
    bio: 'Sanjar is an accomplished Senior Frontend Engineer with extensive experience in designing, developing, and optimizing high-performance web applications for the logistics and transportation management sectors. He is an expert in modern development frameworks like React, Next.js, and Vite. Sanjar has demonstrated leadership in overseeing the full lifecycle of software development and has a proven track record in leveraging mapping technologies to enhance operational efficiencies and user experiences. He is committed to pushing the boundaries of web development through innovative solutions and a proactive approach to technology adaptation.',
    skills: [
      {
        frameworks: [
          { name: 'ReactJS', percentage: 100 },
          { name: 'NextJS', percentage: 95 },
          { name: 'Material UI', percentage: 88 },
          { name: 'AntD', percentage: 85 },
        ],
        technologies: [
          { name: 'HTML/CSS', percentage: 100 },
          { name: 'JavaScript', percentage: 98 },
        ],
        buildAndOptimization: [
          { name: 'Webpack', percentage: 85 },
          { name: 'Vite', percentage: 90 },
        ],
        versionControl: [
          { name: 'Git/GitHub', percentage: 95 },
          { name: 'Bitbucket', percentage: 88 },
        ],
        apisAndMapping: [
          { name: 'Google Maps API', percentage: 87 },
          { name: 'Trimble Maps Integration', percentage: 80 },
          { name: 'Leaflet', percentage: 78 },
        ],
        algies: [{ name: 'Jira', percentage: 80 }],
        webServices: [{ name: 'RESTful Web Services', percentage: 85 }],
      },
    ],
    experience: [
      {
        experience:
          'Senior Frontend Engineer at Digital One LLC and CargoPrime Corp. (08/2022 - Present)',
        details:
          'Led a team to develop a high-performance single-page application using NextJS and React, reducing load times by 30%. Implemented responsive design, boosting engagement by 25%, and optimized web application performance by 20% using advanced JavaScript techniques.',
      },
      {
        experience:
          'Middle Frontend Engineer at Digital One LLC and CargoPrime Corp. (08/2021 - 08/2022)',
        details:
          'Collaborated with design teams to integrate user interfaces, boosting user satisfaction by 20%. Engineered complex web systems, increased customer conversions by 12%, and initiated a project for code modularity that cut development costs by 15%.',
      },
      {
        experience: 'Web Developer (Freelance, 02/2020 - 08/2021)',
        details:
          'Improved website performance by 30% for a client portfolio of 20 clients, developed a responsive website for OXUS University, and implemented SEO best practices for getcv.uz, resulting in a significant boost in visitor engagement.',
      },
    ],
    projects: [
      'Major application redesign that reduced load times by 30%',
      'Custom grid table system analogous to AG Grid for improving user transition from Excel, enhancing data interaction',
      'E-commerce platform and social media application for logistics companies',
      'Dynamic landing page for getcv.uz, enhancing visitor engagement',
    ],
    slug: 'sanjar-juraev',
  },
  // Other team members...
];

const TeamDetailed = () => {
  const { name } = useParams();
  const member = teamMembers.find((member) => member.slug === name);
  const [expandedSections, setExpandedSections] = useState({});

  if (!member) {
    return <div>Team member not found</div>;
  }

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const calculateAveragePercentage = (skills) => {
    const total = skills.reduce((sum, skill) => sum + skill.percentage, 0);
    return Math.round(total / skills.length);
  };

  return (
    <div className="container mx-auto p-8 xl:pt-28 xl:p-32">
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        {/* Left - Member Image */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: -100 }} // Start hidden and from the left
          animate={{ opacity: 1, x: 0 }} // Fade in and slide in
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Transition settings
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right - Member Info */}
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: 100 }} // Start hidden and from the right
          animate={{ opacity: 1, x: 0 }} // Fade in and slide in
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Transition settings
        >
          <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
          <h2 className="text-2xl text-red-500 mb-4">{member.role}</h2>
          <p className="text-md mb-6">{member.bio}</p>
        </motion.div>
      </div>

      {/* Skills Section */}

      {/* Experience & Projects Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="skills mb-6 ">
          <h3 className="text-xl font-semibold mb-4">Skills:</h3>
          {member.skills.map((skillCategory, index) => (
            <div key={index}>
              {Object.entries(skillCategory).map(([category, skills]) => {
                const averagePercentage = calculateAveragePercentage(skills);
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.3,
                      filter: 'blur(20px)',
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.15, // Add delay directly here if needed
                    }}
                    viewport={{ once: true }}
                    key={category}
                    className="mb-6"
                  >
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleSection(category)}
                    >
                      <h4 className="text-lg font-semibold capitalize mb-2">
                        {category.replace(/([A-Z])/g, ' $1')}
                      </h4>
                      <div className="ml-auto text-md font-medium">
                        {averagePercentage}%
                      </div>
                    </div>
                    {expandedSections[category] && (
                      <ul className="space-y-4">
                        {skills.map((skill, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-between"
                          >
                            <div className="text-md font-medium w-full">
                              {skill.name}
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2 ml-4 overflow-hidden">
                              <motion.div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${skill.percentage}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.percentage}%` }}
                                transition={{
                                  duration: 1.2,
                                  ease: 'easeInOut',
                                }}
                              />
                            </div>
                            <span className="text-md font-medium ml-2">
                              {skill.percentage}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Experience */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">Experience:</h3>
          <ul className="list-disc ml-5">
            {member.experience.map((exp, index) => (
              <li key={index} className="text-md mt-2">
                <span className="font-bold">{exp?.experience}</span>
                <p>{exp?.details}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      {/* Projects */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-2">Notable Projects:</h3>
        <ul className="list-disc ml-5">
          {member.projects.map((project, index) => (
            <li key={index} className="text-md">
              {project}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default TeamDetailed;
