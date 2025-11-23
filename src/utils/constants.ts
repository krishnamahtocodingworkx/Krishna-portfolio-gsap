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
