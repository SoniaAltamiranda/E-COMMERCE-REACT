import { Link } from "react-router-dom";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="bg-primary text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex cursor-pointer title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl text-[#8C7064]">
            <img
              src="/src/img/LOGO IRONIC.png"
              alt="Logo"
              height="100"
              width="100"
            />
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => {
            return (
              <Link
                to={navigation.path}
                className="mr-5 hover:text-gray-900 text-[#8C7064]"
              >
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <Link
          to={"/cart"}
          className="inline-flex items-center text-white bg-[#8C7064] border-0 py-2 px-4 focus:outline-none hover:bg-[#645751] rounded text-base mt-4 md:mt-0"
        >
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
