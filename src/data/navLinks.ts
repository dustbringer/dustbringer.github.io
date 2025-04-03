export type Link = {
  name: string;
  path: string;
};

const navLinks: Link[] = [
  { name: "Notes", path: "/notes" },
  { name: "Talks", path: "/talks" },
  { name: "Papers", path: "/papers" },
  { name: "Tools", path: "/tools" },
  // { name: "Resume", path: "/resume" },
  { name: "About", path: "/about" },
];

export default navLinks;
