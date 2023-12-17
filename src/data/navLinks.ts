export type Link = {
  name: string;
  path: string;
};

const navLinks: Link[] = [
  { name: "Posts", path: "/posts" },
  { name: "Notes", path: "/notes" },
  { name: "Tools", path: "/tools" },
  // { name: "Resume", path: "/resume" },
  { name: "About", path: "/about" },
];

export default navLinks;
