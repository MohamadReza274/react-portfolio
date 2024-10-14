const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    active: true,
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    active: false,
  },
  {
    id: 3,
    name: "Resume",
    href: "/resume",
    active: false,
  },
  {
    id: 4,
    name: "Services",
    href: "/services",
    active: false,
  },
  {
    id: 5,
    name: "Skills",
    href: "/skills",
    active: false,
  },
  {
    id: 6,
    name: "Projects",
    href: "/projects",
    active: false,
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
    active: false,
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:text-white h-20 flex items-center justify-around">
      <h1 className="text-2xl font-bold">M.Reza</h1>
      <ul className="flex justify-center items-center gap-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              className={`hover:border-b-[0.15rem]  hover:border-primary transition-all duration-200 ${
                item.active && "text-primary border-primary border-b-[0.15rem]"
              }`}
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
