import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="transition-colors duration-200 bg-white dark:bg-gray-950 w-full min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-4 h-[clac(100%-60px)]">
        <Outlet />
      </main>
    </div>
  );
}
