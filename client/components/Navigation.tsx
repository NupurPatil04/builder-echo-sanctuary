import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center">
            <div className="relative w-8 h-12">
              <svg
                className="absolute inset-0"
                viewBox="0 0 25 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4289 29.6647C21.9233 29.6647 23.42 34.3001 23.42 34.3001C23.42 34.3001 28.9077 24.1023 19.4289 19.0034C19.4289 19.0034 21.9039 7.04566 12.5554 0.538628L12.5 0.5L12.4446 0.538628C3.09608 7.04566 5.57109 19.0034 5.57109 19.0034C-3.90766 24.1023 1.58004 34.3001 1.58004 34.3001C1.58004 34.3001 3.07668 29.6647 5.57109 29.6647C6.56885 29.6647 6.56885 31.5189 6.56885 31.5189H18.4311C18.4311 31.5189 18.4311 29.6647 19.4289 29.6647ZM16.2422 17.4325C16.2422 19.3526 14.567 20.9091 12.5006 20.9091C10.4341 20.9091 8.75894 19.3526 8.75894 17.4325C8.75894 15.5125 10.4341 13.956 12.5006 13.956C14.567 13.956 16.2422 15.5125 16.2422 17.4325Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8392 5.6529C11.8356 6.69969 11.5058 7.72312 10.8896 8.59945C10.8896 8.59945 9.8331 9.95041 8.79321 10.8435C7.96673 11.5527 6.48117 12.5431 5.91078 12.9212C5.86422 12.9516 5.82431 12.9783 5.7905 13L5.67631 12.9217C5.122 12.54 3.70683 11.5537 2.91749 10.8471C1.91973 9.95298 0.904784 8.60049 0.904784 8.60049C0.309079 7.71382 -0.00755867 6.68991 -0.00927734 5.64466C-0.00927734 2.82327 2.30609 0.208918 5.6558 0.0559507V0.0410156C5.70643 0.0410156 5.75687 0.0420456 5.80713 0.0441057C9.36471 0.148659 11.8392 2.797 11.8392 5.6529Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0.0470905"
                    y1="0.890473"
                    x2="6.85752"
                    y2="14.5057"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A80D11" />
                    <stop offset="0.364819" stopColor="#C2250F" />
                    <stop offset="0.682117" stopColor="#F46D1C" />
                    <stop offset="1" stopColor="#FFB84C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-14">
            <Link
              to="/"
              className="text-white text-lg lg:text-xl font-medium hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link
              to="#about"
              className="text-white text-lg lg:text-xl font-medium hover:opacity-80 transition-opacity"
            >
              About
            </Link>
            <Link
              to="/team"
              className="text-white text-lg lg:text-xl font-medium hover:opacity-80 transition-opacity"
            >
              Team
            </Link>
            <Link
              to="/"
              className="text-white text-lg lg:text-xl font-medium hover:opacity-80 transition-opacity"
            >
              Sponsors
            </Link>
            <Link
              to="#faq"
              className="text-white text-lg lg:text-xl font-medium hover:opacity-80 transition-opacity"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
