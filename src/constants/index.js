import ecommerceimg from "../assets/projects/ecommerceimg.jpg";
import empman from "../assets/projects/empman.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import movie from "../assets/projects/movie.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React js, as well as back-end technologies like Node.js, Express.js, SQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React,  Node.js, Express.js, SQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Nov - 2023",
    role: "Web Developer Intern",
    company: "Nexus Software.",
    description: `developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "mongoDB"],
  },
  {
    year: "Aug - 2023",
    role: "Frontend Developer Intern",
    company: "Emglitz Technologies",
    description: `Designed and developed user interfaces for web applications using React Js. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    year: "Apr - 2023",
    role: "Full Stack Developer Intern",
    company: "Emglitz Technologies",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React js", "Node js", "Express.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecommerceimg,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "Express.js", "Postgres"],
  },
  {
    title: "Employee Management App",
    image: empman,
    description:
      "An application for managing Employees Data, with features such as  creation, Updation, and Deletion tracking.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Postgres",
    ],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "FramerMotion"],
  },
  {
    title: "Movie Rating App",
    image: movie,
    description:
      "A platform for creating and publishing Movies reviews, with features like rich text creating, editing, Deleting, and Updating.",
    technologies: ["React", "Node.js", "Express.js", "Postgres"],
  },
];

export const CONTACT = {
  address: "123 Street ABC City",
  phoneNo: "+91 9955544331 ",
  email: "vignesh.developer.main@gmail.com",
};
