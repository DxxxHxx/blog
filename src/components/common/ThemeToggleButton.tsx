import { Moon, Sun } from "lucide-react";
import { useTheme } from "./themeProvider";

export function ThemeToggleButton() {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="cursor-pointer hover:text-primary transition-colors duration-200"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
