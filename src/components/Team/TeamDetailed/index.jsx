import { useParams } from 'react-router-dom';
import Sanjar from '/src/assets/bg-images/sanjar.jpg';
import { motion } from 'framer-motion';
const teamMembers = [
  {
    name: 'Sanjar Juraev',
    role: 'Senior Frontend Engineer | Team Leader',
    image: Sanjar, // Make sure to replace this with the actual path to the image
    bio: 'Sanjar is an accomplished Senior Frontend Engineer with extensive experience in designing, developing, and optimizing high-performance web applications for the logistics and transportation management sectors. He is an expert in modern development frameworks like React, Next.js, and Vite. Sanjar has demonstrated leadership in overseeing the full lifecycle of software development and has a proven track record in leveraging mapping technologies to enhance operational efficiencies and user experiences. He is committed to pushing the boundaries of web development through innovative solutions and a proactive approach to technology adaptation.',
    skills: [
      'ReactJS',
      'NextJS',
      'HTML/CSS',
      'JavaScript',
      'Webpack',
      'Vite',
      'Git/GitHub',
      'Material UI',
      'RESTful Web Services',
      'AntD',
      'Google Maps API',
      'Trimble Maps Integration',
      'Leaflet',
      'Chart.js',
      'Cypress',
    ],
    experience: [
      'Senior Frontend Engineer at Digital One LLC and CargoPrime Corp. (08/2022 - Present): Led a team to develop a high-performance single-page application using NextJS and React, reducing load times by 30%. Implemented responsive design, boosting engagement by 25%, and optimized web application performance by 20% using advanced JavaScript techniques.',
      'Semi Senior Frontend Engineer at Digital One LLC and CargoPrime Corp. (08/2021 - 08/2022): Collaborated with design teams to integrate user interfaces, boosting user satisfaction by 20%. Engineered complex web systems, increased customer conversions by 12%, and initiated a project for code modularity that cut development costs by 15%.',
      'Web Developer (Freelance, 02/2020 - 08/2021): Improved website performance by 30% for a client portfolio of 20 clients, developed a responsive website for OXUS University, and implemented SEO best practices for getcv.uz, resulting in a significant boost in visitor engagement.',
    ],
    projects: [
      'Major application redesign that reduced load times by 30%',
      'Custom grid table system analogous to AG Grid for improving user transition from Excel, enhancing data interaction',
      'E-commerce platform and social media application for logistics companies',
      'Dynamic landing page for getcv.uz, enhancing visitor engagement',
    ],
    slug: 'sanjar-juraev',
  },
  {
    name: 'Albert Flores',
    role: 'Senior Frontend Engineer',
    image: '/path/to/albert-image.jpg',
    bio: 'Albert has extensive experience in creating stunning user interfaces and bringing great user experience to life...',
    skills: ['React', 'Vue', 'JavaScript', 'CSS'],
    experience: ['7 years at CreativeSolutions', '4 years at WebWorks'],
    projects: ['E-commerce Platform', 'Social Media Application'],
    slug: 'albert-flores',
  },
  // Add more team members here
];

const TeamDetailed = () => {
  const { name } = useParams();
  const member = teamMembers.find((member) => member.slug === name);

  if (!member) {
    return <div>Team member not found</div>;
  }

  return (
    <div className="container mx-auto p-8 xl:pt-28">
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
          <p className="text-lg mb-6">{member.bio}</p>

          <div className="skills mb-6">
            <h3 className="text-xl font-semibold mb-2">Skills:</h3>
            <ul className="list-disc ml-5">
              {member.skills.map((skill, index) => (
                <li key={index} className="text-lg">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="experience mb-6">
            <h3 className="text-xl font-semibold mb-2">Experience:</h3>
            <ul className="list-disc ml-5">
              {member.experience.map((exp, index) => (
                <li key={index} className="text-lg">
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          <div className="projects mb-6">
            <h3 className="text-xl font-semibold mb-2">Notable Projects:</h3>
            <ul className="list-disc ml-5">
              {member.projects.map((project, index) => (
                <li key={index} className="text-lg">
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamDetailed;
