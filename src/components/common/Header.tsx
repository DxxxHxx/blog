import { ThemeToggleButton } from "./ThemeToggleButton";

// import { ThemeToggle } from './ThemeToggle'
export function Header() {
  return (
    <header className="border-b sticky top-0 z-40 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <a href="/" className="font-bold text-xl">
            My Blog
          </a>
        </div>
        <nav className="flex items-center gap-4">
          <a href="/" className="text-sm font-medium hover:underline">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            About
          </a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
