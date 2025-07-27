import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./themeProvider";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="transition-colors duration-200 bg-white dark:bg-gray-950 w-full min-h-screen">
        <Header />

        <main className="container mx-auto px-4 py-4 h-[clac(100%-60px)] bg-background">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
