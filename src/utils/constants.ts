export type ExperienceCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};
// export const expCards: ExperienceCard[] = [
//   {
//     review:
//       "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "Frontend Developer",
//     date: "January 2023 - Present",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "Full Stack Developer",
//     date: "June 2020 - December 2023",
//     responsibilities: [
//       "Led the development of Docker's web applications, focusing on scalability.",
//       "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//       "Contributed to open-source projects that were used with the Docker ecosystem.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "React Native Developer",
//     date: "March 2019 - May 2020",
//     responsibilities: [
//       "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//       "Improved app performance and user experience through code optimization and testing.",
//       "Coordinated with the product team to implement features based on feedback.",
//     ],
//   },
// ];
export const expCards: ExperienceCard[] = [
  {
    review:
      "Krishna has shown excellent problem-solving abilities and strong ownership in frontend development. His work on building responsive interfaces and optimizing performance significantly enhanced user experience.",
    imgPath: "/github-light.svg",
    logoPath: "/react.svg",
    title: "Software Engineer",
    date: "July 2023 - Present",
    responsibilities: [
      "Building responsive and scalable web interfaces using React.js, Next.js, and TypeScript.",
      "Collaborating with UI/UX teams to convert Figma designs into pixel-perfect and accessible UI.",
      "Implementing reusable components, theme systems, dark mode, and design consistency using Material UI.",
      "Improving app performance using lazy loading, memoization, and API optimization strategies.",
      "Actively working on personal projects like aexyn_studio (web builder) and AI image generation apps.",
    ],
  },
  {
    review:
      "Krishna demonstrated quick learning and strong fundamentals during his training, gaining hands-on experience in frontend and basic backend development.",
    imgPath: "/github-light.svg",
    logoPath: "/typescript.svg",
    title: "Software Trainee",
    date: "January 2023 – June 2023",
    responsibilities: [
      "Trained in JavaScript, TypeScript, React.js, Git, API integration, and web development fundamentals.",
      "Built mini-projects to understand component architecture, props, state management, and hooks.",
      "Learned REST API integration using Fetch, Axios, and handled form validations using Formik and Yup.",
      "Collaborated in small team projects to follow proper folder structure and professional coding practices.",
    ],
  },
  {
    review:
      "Krishna showcased strong full-stack learning capabilities during his trainee period, especially in building complete MERN stack applications with authentication and database integration.",
    imgPath: "/github-light.svg",
    logoPath: "/nodejs.svg",
    title: "Full Stack Trainee",
    date: "September 2022 – December 2022",
    responsibilities: [
      "Built full-stack apps using Node.js, Express.js, MongoDB, and React.js including JWT-based authentication.",
      "Designed and consumed REST APIs for user authentication, task management, and data handling.",
      "Worked with MongoDB and Mongoose for schema design, CRUD operations, and performance improvements.",
      "Deployed applications on Render and Netlify, integrating frontend and backend successfully.",
      "Developed the PathShala ed-tech platform prototype using MERN stack and demonstrated functional UI.",
    ],
  },
];


export const icons = [
  "/email.svg",
  "/linkedin.png",
  "/github.svg",
  "/leetcode.png",
];
export const HeroIcons:{iconUrl:string, altText:string, link:string}[] = [
  {
    iconUrl: "/email.svg",
    altText: "Email Icon",
    link:"mailto:krishnamahto.dev@gmail.com"
  },
  {
    iconUrl: "/linkedin.png",
    altText: "LinkedIn Icon",
    link:"https://www.linkedin.com/in/krishna-mahto-092977294/"
  },
  {
    iconUrl: "/github.svg",
    altText: "GitHub Icon",
    link:"https://github.com/krishnamahtocodingworkx"
  },
  {
    iconUrl: "/leetcode.png",
    altText: "LeetCode Icon",
    link:"https://leetcode.com/u/krishnamahto/"
  }
]
export const mobileIcons = [
  "/email-light.svg",
  "/linkedin-light.svg",
  "/github-light.svg",
  "/leetcode-light.svg",
];

export const projects = [
  {
    id: 1,
    title: "DiveBuddies - Explore dive sites for scuba diving",
    des: "Discover and explore the best scuba diving sites around the world with DiveBuddies.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/fm.svg"],
    link: "https://divebuddies.app/",
  },
  {
    id: 2,
    title: "MindCraft - Learning, Development & Growth Platform",
    des: "A comprehensive platform offering courses, resources, and community support for personal and professional growth.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/fm.svg"],
    link: "https://mindcrafttrainings.com/",
  },
  {
    id: 3,
    title: "Shinology (Admin Dashboard) - Car Service Booking App",
    des: "A Car Service Booking App that allows users to schedule and manage car maintenance appointments easily.",
    img: "/p6.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/java.svg"],
    link: "https://shinologyservice.com/",
  },
  {
    id: 4,
    title: "PetPalz (Admin Dashboard)- Platform for Pet Care Services",
    des: "A platform connecting pet owners with trusted pet care providers for services like grooming, walking, and sitting.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://admin.petpalz.co/",
  },
];
