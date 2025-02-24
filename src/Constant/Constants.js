import {
  carrent,
  jobit,
  tripguide,
  ktu,
  luminar,
  geesesquads,
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

const Technologies = [
  {
    title: "Frontend Technologies",
    points: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Angular",
      "Svelte",
      "Redux",
      "Tailwind ",
    ],
  },
  {
    title: "Mobile Technologies",
    points: ["React Native", "Expo"],
  },
  {
    title: "Backend Technologies",
    points: ["Node.js", "Express.js", "MongoDB", "Firebase", "AWS"],
  },
  {
    title: "Other",
    points: ["GitHub"],
  },
];

const education = [
  {
    title: "Kerala University",
    company_name: " B-Tech",
    icon: ktu,
    iconBg: "#ffff",
    date: "2019 - 2023",
    points: [
      "Completed B-Tech in Computer Science, focusing on key areas such as algorithms, data structures, and web development.",
    ],
  },
  {
    title: "MEARN Stack",
    company_name: "Luminar",
    icon: luminar,
    iconBg: "#ffff",
    date: "Nov 2023 - jun 2024",
    points: [
      "6 months+ internship in MERN Stack development, gaining hands-on experience in web development using MongoDB, Express.js, React.js, and Node.js.",
    ],
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Geesquard",
    icon: geesesquads,
    iconBg: "#ffff",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export { Technologies, experiences, education };
