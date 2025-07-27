import { Link, useMatch } from "react-router-dom";
import { ThemeToggleButton } from "./ThemeToggleButton";
import clsx from "clsx";

export function Header() {
  const homeMatch = useMatch("/");
  return (
    <header className="border-b sticky top-0 z-40 shadow-md bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="font-bold text-xl hover:text-primary transition-colors duration-200"
          >
            My Blog
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className={clsx(
              "text-sm font-medium hover:underline",
              homeMatch && "text-primary"
            )}
          >
            Home
          </Link>
          <a href="#" className="text-sm font-medium hover:underline">
            About
          </a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
