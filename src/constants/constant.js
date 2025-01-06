import {
    backend,
    celebal,
    creator,
    css,
    ecom,
    git,
    html,
    javascript,
    livechat,
    mobile,
    mongodb,
    movieapp,
    nodejs,
    reactjs,
    redux,
    skillonationkids,
    tailwind,
    threejs,
    typescript,
    web
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
const overview =
    "I'm a skilled full-stack developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js.I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user - friendly solutions that solve real - world problems.Let's work together to bring your ideas to life!"

const social_links = {

    email: "rahul0singh003@gmail.com"
    ,

    github: "https://github.com/ryuga001",

    codeforces: "https://codeforces.com/profile/ryuga01",

    codechef: "https://www.codechef.com/users/rahul_singh36",

    linkedin: "https://www.linkedin.com/in/rahul-singh-546676240/",

}

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Commpetetive Coder ",
        icon: creator,
    },
];

const technologies = [
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
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

];

const experiences = [
    {
        title: "Software Development Intern",
        company_name: "Skillonation Kids",
        icon: skillonationkids,
        iconBg: "#383E56",
        date: "June 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Developed the frontend of a block-based coding learning platform using Blockly, enabling users to create code through an intuitive drag-and-drop interface",
            "Implemented and optimized custom block logic in JavaScript, ensuring seamless functionality and accurate execution of visually generated code"
        ],
    },
    {
        title: "Summer Intern",
        company_name: "Celebal Technologies",
        icon: celebal,
        iconBg: "#E6DEDD",
        date: "May 2024 - July 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Contributed to backend development using Node.js and Express.js",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Efficiently managing version control and collaboration with Git and GitHub",
        ],
    },

];



const projects = [
    {
        name: "ECOM",
        description:
            "Web application that is a user-friendly online shopping platform with secure login, fast search, and smooth navigation. Created an admin dashboard to easily manage users, products, and orders, complete with interactive charts to track sales and user activity. Designed the system to handle high traffic efficiently.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient"
            }
        ],
        image: ecom,
        source_code_link: "https://github.com/ryuga001/ECOM",
    },
    {
        name: "LiveChat",
        description:
            "A secure messaging web application with features like account creation, avatar selection, and real-time chats. The app offers a simple, user-friendly design for easy navigation and personalized messaging, ensuring a smooth and engaging experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "socket.io",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            }
        ],
        image: livechat,
        source_code_link: "https://github.com/ryuga001/Live_chat",
    },
    {
        name: "MovieApp",
        description:
            "A responsive movie app with a movie slider, YouTube trailer view, animations, and an upcoming movie banner. Users can explore trending and genre-based movies for a smooth, engaging experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tmdbapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: movieapp,
        source_code_link: "https://github.com/ryuga001/MovieApp",
    },
];

export { experiences, overview, projects, services, technologies, social_links };

