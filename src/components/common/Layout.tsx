import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./themeProvider";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full min-h-screen bg-background">
        <Header />

        <main className="h-[clac(100%-60px)] container m-auto px-5">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
