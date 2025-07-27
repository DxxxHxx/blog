import { MenuIcon, XIcon, MoonIcon, SunIcon } from "lucide-react";
import useThemeStore from "../../store/useThemeStore";
import { Link, useMatch } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const homeMatch = useMatch("/");
  const categoriesMatch = useMatch("/categories");
  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm dark:shadow-gray-700 sticky top-0 z-10 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to={"/"}
              className="text-xl font-bold text-gray-900 dark:text-white mr-8"
            >
              DxxxHxx
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to={"/"}
                    className={`font-medium ${
                      homeMatch
                        ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    Post List
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/categories"}
                    className={`font-medium ${
                      categoriesMatch
                        ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <SunIcon size={20} />
              ) : (
                <MoonIcon size={20} />
              )}
            </button>

            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <ul className="space-y-3">
              <li>
                <Link
                  to={"/"}
                  className={`block font-medium ${
                    homeMatch
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Post List
                </Link>
              </li>
              <li>
                <Link
                  to={"/categories"}
                  className={`block font-medium ${
                    categoriesMatch
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
