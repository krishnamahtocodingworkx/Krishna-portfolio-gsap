export type ExperienceCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};
export const expCards: ExperienceCard[] = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/github-light.svg",
    logoPath: "/react.svg",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/github-light.svg",
    logoPath: "/react.svg",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/github-light.svg",
    logoPath: "/react.svg",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

export const icons = [
  "/email.svg",
  "/linkedin.png",
  "/github.svg",
  "/leetcode.png",
];
export const mobileIcons = [
  "/email-light.svg",
  "/linkedin-light.svg",
  "/github-light.svg",
  "/leetcode-light.svg",
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/java.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];
