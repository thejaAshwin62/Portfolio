import {
  Blender,
  ship,
  Unity,
  Mirror,
  AR,
  Tinger,
  Music,
  Filem,
  mobile,
  backend,
  mongo,
  express,
  react,
  node,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  jobify,
  threejs,
  mern,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity Developer",
    icon: web,
  },
  {
    title: "Blender Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: mern,
  },
];

const technologies = [
  {
    name: "Blender",
    icon: Blender,
  },
  {
    name: "Unity",
    icon: Unity,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: "ReactJS",
    icon: react,
  },
  {
    name: "NodeJS",
    icon: node,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    topic: "Smart Mirror",
    testimonial:
      "The Smart Mirror project has been opted to place third in the Intercollege hackathon. ",
    name: "Mahendra Educational Institutions",
    designation: "Catch-24",
    company: "Hackathon",
    image:
      "https://www.pngkit.com/png/detail/227-2275213_mahendra-engineering-college-logo.png",
  },
  {
    topic: "File Metamorphy",
    testimonial:
      "My Project chosen as one of the top eight teams at the Indian Cyber Security Hackathon.",
    name: "Christ University",
    designation: "ARDC's",
    company: "CS hackathon",
    image:
      "https://th.bing.com/th/id/OIP.3aRrpGLM711-1bKOFAP90QHaFj?w=187&h=159&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    topic: "AR Appliences",
    testimonial:
      "The AR Appliances project has been seleted for Third Round in the Government's Hackathon.",
    name: "MSME Government of India",
    designation: "MSME",
    company: "Idea Hackathon",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    topic: "Web Development Intenship",
    testimonial:
      "Acquired expertise and understanding in HTML, CSS, and JavaScript ",
    name: "Imagecon Academy",
    designation: "Salem",
    company: "Imagecon India",
    image: "https://imageconindia.com/assets-2/img/logo_svg-3.min.svg",
  },
  {
    topic: "Mobile Application Development Intenship",
    testimonial:
      "Acquired expertise and understanding in Android Studio, Flutter, and Dart Language ",
    name: "Imagecon Academy",
    designation: "Salem",
    company: "Imagecon India",
    image: "https://imageconindia.com/assets-2/img/logo_svg-3.min.svg",
  },
  {
    topic: "Full Stack Development Workshop",
    testimonial:
      "noticed a concept from the MERN stack (MongoDB, Express, Reactjs, and Node.js)",
    name: "Sona college of technology",
    designation: "Salem",
    company: "college",
    image: "https://www.sonatech.ac.in/images/logo.png",
  },
];

const projects = [
  {
    name: "AR Appliences",
    description:
      "Developed an AR app allows users to visualize home appliances in their space, providing an immersive and interactive experience. Demonstrated expertise in AR development, Unity, and enhancing user engagement through innovative technology",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "SketchFab",
        color: "green-text-gradient",
      },
      {
        name: "CG Traders",
        color: "pink-text-gradient",
      },
    ],
    image: AR,
    source_code_link: "https://github.com/",
  },

  {
    name: "Smart Mirror",
    description:
      "Developed a Smart Mirror with real-time data integration using Kali Linux, Features include interactive voice control, weather updates, calendar integration. Demonstrated skills in IoT, software development, and user experience design.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Kali Linux",
        color: "green-text-gradient",
      },
      {
        name: "Google Assistant",
        color: "pink-text-gradient",
      },
      {
        name: "RSS",
        color: "red-text-gradient",
      },
      {
        name: "Snow Boy",
        color: "blue-text-gradient",
      },
    ],
    image: Mirror,
    source_code_link: "https://github.com/",
  },
  {
    name: "Odyssey Journey",
    description:
      "My project offers users a seamless experience to book and manage ship events. This platform caters to both event organizers and attendees",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "red-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
    ],
    image: ship,
    web_link: "https://odyssey-journey.onrender.com/",
    source_code_link: "https://github.com/thejaAshwin62/Odyssey-Journey",
  },

  {
    name: "EA Infinity",
    description:
      "esports_Arena, is a dynamic platform that allows users to book and participate in esports tournaments for popular games,Players can register for matches,The platform features an integrated admin panel where admins can manage tournaments",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "red-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "Daisy-UI",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/GxtJ5RL/ea.png",
    web_link: "ea-infinity.onrender.com",
    source_code_link: "https://github.com/thejaAshwin62/EA-Infinity",
  },
  {
    name: "Jobify",
    description:
      "Job tracking is part of the project management processes within field service operations. It’s what you follow to keep an eye on the pipeline of jobs and their statuses.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "red-text-gradient",
      },
    ],
    image: jobify,
    web_link: "https://jobify-mern-bubi.onrender.com/",
    source_code_link: "https://github.com/thejaAshwin62/Jobify_MERN",
  },
  {
    name: "Tinger",
    description:
      "I deploy a Basic ReactJS website which extracts news/article body from a URL and uses GPT to summarize (and optionally translate) the article content. Useful for text mining purposes (ScrapeNinja.net) with high-quality rotating proxies under the hood.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    web_link: "https://tinger-finity.netlify.app/",
    image: Tinger,
    source_code_link: "https://github.com/thejaAshwin62/Tinger",
  },
  {
    name: "Finite Music",
    description:
      "I deploy a Basic ReactJS website which Displays and play the songs with limited duration.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Spotify-API",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: Music,
    web_link: "https://finity-music.netlify.app/",
    source_code_link: "https://github.com/thejaAshwin62/finity_music",
  },
  {
    name: "File Metamorphy",
    description:
      "I used Infinity Stroage Glitch concept in Data hiding process using Kali OS",
    tags: [
      {
        name: "Kali OS",
        color: "blue-text-gradient",
      },
      {
        name: "Infinty Stroage Glitch Repo",
        color: "pink-text-gradient",
      },
    ],
    image: Filem,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gemini-AI",
    description:
      "integrates the Gemini API to create a dynamic, GPT-powered content generation system that ensures real-time updates and relevant information. By leveraging the Gemini API, the platform can fetch the latest data and trends",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/kHC6rRF/Screenshot-2024-07-10-204753.png",
    web_link:"https://gemoai.netlify.app/",
    source_code_link: "https://github.com/thejaAshwin62/Gemini-AI",
  },
];

export { services, technologies, experiences, testimonials, projects };
