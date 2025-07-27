import { create } from "zustand";

export type Theme = "light" | "dark";

interface UseThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

const setHtmlTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const $body = document.querySelector("body");
  if (theme === "dark") {
    $body?.classList.add("bg-gray-950");
    $body?.classList.remove("bg-white");
  } else {
    $body?.classList.remove("bg-gray-950");
    $body?.classList.add("bg-white");
  }
};

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  let theme: Theme;
  if (storedTheme === "light" || storedTheme === "dark") {
    theme = storedTheme;
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    theme = prefersDark ? "dark" : "light";
  }
  setHtmlTheme(theme);
  return theme;
};

const useThemeStore = create<UseThemeStore>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () => {
    set((state) => {
      const newTheme: Theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      setHtmlTheme(newTheme);
      return { theme: newTheme };
    });
  },
}));

export default useThemeStore;
