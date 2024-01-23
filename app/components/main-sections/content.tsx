export const skillsColorLookup: { [key: string]: string | string[] } = {
  javascript: "#f9be1e",
  typescript: "#3178C6",
  python: ["#3D78A8", "#FAD44A"],
  react: ["#139ECA", "#67DAFB"],
  node: "#70C04F",
  "next.js": ["#000", "#fff"],
  aws: "#F89C1C",
  dynamodb: "#3277BA",
  postgresql: "#386696",
  "ruby on rails": ["#C50201", "#fff"],
  graphql: "#E63DAE",
  tailwind: ["#3FBDF8", "#fff"],
  mongodb: "#55AD49",
};

export const experienceContent: {
  id: string;
  title: string;
  url?: string;
  duration: string;
  about: string;
  skills: string[];
}[] = [
  {
    id: "TransitMatters",
    title: "Volunteer Software Engineer",
    url: "https://transitmatters.org/",
    duration: "Dec 2023 - Present",
    about:
      "I started working with TransitMatters in December of 2023, working on bugs and new features for their data dashboard that is used by MBTA riders and news outlets.",
    skills: [
      "react",
      "next.js",
      "node",
      "aws",
      "javascript",
      "typescript",
      "tailwind",
    ],
  },
  {
    id: "Liberty Mutual",
    title: "Software Engineer",
    url: "https://www.libertymutual.com/",
    duration: "Sept 2022 - Dec 2023",
    about:
      "At Liberty, I worked on middleware applications that served the auto-insurance interview platform. I worked with other engineers to make quote data load faster in the UI with GraphQL and Apollo.",
    skills: [
      "react",
      "node",
      "graphql",
      "aws",
      "dynamodb",
      "javascript",
      "typescript",
    ],
  },
  {
    id: "SecureSenior Connections",
    title: "Software Engineer",
    url: "https://www.linkedin.com/company/secureseniorconnections/about/",
    duration: "Feb 2021 - Sept 2022",
    about:
      "SSC was a small startup that aimed to serve elderly individuals at risk of lonliness and isolation. Their product was a virtual senior center where elder individuals could connect with one another online. While working there, I wore many hats: I worked closely with the marketing team to create email communications templates; I built out a number of microservices that would deliver those emails (both transactional and for marketing); and I assisted in the development of the internal content moderation tool.",
    skills: [
      "react",
      "node",
      "postgresql",
      "mongodb",
      "javascript",
      "typescript",
      "python",
    ],
  },
  {
    id: "Roof Rally",
    title: "Full-Stack Software Developer",
    duration: "Dec 2019 - Sept 2020",
    about:
      "Roof Rally was my first professional experience as a developer. Roof Rally's product was intended to assist homeowners connect with verified roofing contractors in their area if they were in the market for a new roof or needed repairs. I was able to touch all parts of the codebase working here, and I learned a number of best practices when writing code for React and Node applications.",
    skills: [
      "react",
      "next.js",
      "node",
      "postgresql",
      "javascript",
      "typescript",
    ],
  },
  {
    id: "Launch Academy",
    title: "Apprentice Full-Stack Developer",
    url: "https://launchacademy.com/",
    duration: "July 2019 - Nov 2019",
    about:
      "Launch Academy was where I learned all the skills I needed to become a professional software engineer. I'm eternally grateful for the knowledge, support, and camraderie of my mentors who helped me land my first software engineering role in Boston.",
    skills: ["react", "ruby on rails", "node", "postgresql", "javascript"],
  },
];
