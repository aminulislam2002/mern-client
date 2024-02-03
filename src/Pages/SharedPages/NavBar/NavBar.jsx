import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = [
    {
      path: "/",
      label: "Home 1",
    },
    {
      path: "/2",
      label: "Home 2",
    },
    {
      path: "/3",
      label: "Home 3",
    },
    {
      path: "/4",
      label: "Home 4",
    },
    {
      path: "/5",
      label: "Home 5",
    },
  ];

  return (
    <div>
      <div className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-white text-2xl font-bold">Your Logo</div>
              <div className="lg:hidden">
                <button className="text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden lg:flex space-x-4">
              <ul className="flex items-center space-x-4">
                {navOptions.map((option, index) => (
                  <li key={index}>
                    <Link to={option.path} className="text-white hover:text-gray-300">
                      {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
