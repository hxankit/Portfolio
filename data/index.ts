export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Working on A secret Project",
    description: "The Top Secret",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    des: "A fully functional eCommerce website with product listings, cart, payment integration, and admin dashboard.",
    img: "/p1.svg",
    iconLists:  ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Social Media App with Video Support",
    des: "A dynamic social media platform enabling video posts, likes, comments, real-time messaging, and user profiles.",
    img: "/p2.svg",
    iconLists:  ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/projects/socialmedia",
  },
  {
    id: 3,
    title: "Terminator - Voice Assistant",
    des: "An AI-powered voice assistant using speech recognition to perform tasks, answer queries, and interact naturally.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/projects/terminator",
  },
  {
    id: 4,
    title: "More Projects Coming Soon",
    des: "New innovative full-stack projects are on the way, featuring AI tools, real-time systems, and scalable apps.",
    img: "/p4.svg",
    iconLists:  ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
  },
];


export const testimonials = [
  {
    quote:
      "Working with Ankit was a fantastic experience. His deep backend expertise and full-stack skills helped deliver a robust and scalable solution on time. He is professional, detail-oriented, and communicates clearly throughout the project.",
    name: "Rohit Sharma",
    title: "Product Manager at TechSolutions",
  },
  {
    quote:
      "Ankit brought our ideas to life with his exceptional full-stack development capabilities. His backend architecture knowledge ensured the app was both fast and reliable. Highly recommend him for any challenging development projects.",
    name: "Sneha Gupta",
    title: "Founder, InnovateX Labs",
  },
  {
    quote:
      "Ankit’s ability to bridge backend and frontend seamlessly impressed the entire team. His problem-solving skills and dedication to clean, maintainable code were invaluable to our product’s success.",
    name: "Amit Verma",
    title: "CTO at CloudWare",
  },
  {
    quote:
      "We appreciated Ankit’s proactive approach and technical expertise. He consistently delivered efficient backend solutions while integrating smoothly with frontend requirements, making the development cycle faster and more efficient.",
    name: "Priya Singh",
    title: "Project Lead, NexGen Apps",
  },
  {
    quote:
      "Ankit is a talented full-stack developer with strong backend knowledge. His professionalism and ability to understand complex requirements helped us build a scalable and user-friendly platform.",
    name: "Manish Patel",
    title: "CEO at BlueWave Tech",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer (Remote)",
    desc: "Worked remotely for 1.5 years building scalable web apps using MongoDB, Express.js, React.js, and Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer - JSM Tech",
    desc: "Developed cross-platform mobile and web apps using React Native and integrated APIs with Node.js backend.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Developer",
    desc: "Delivered full-stack projects for clients using MEAN, MERN, and .NET Core based on specific business needs.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Junior Full Stack Developer",
    desc: "Contributed to both frontend and backend development using modern JS frameworks and .NET Core technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hxankit",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "#",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "www.linkedin.com/in/ankit-verma-56bb72346",
  },
];