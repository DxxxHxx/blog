import { useEffect, useState } from "react";

type DisPlaySize = "mobile" | "tablet" | "desktop";

const useMediaQuery = () => {
  const getDisplaySize = (): DisPlaySize => {
    const width = window.screen.width;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  };

  const [displaySize, setDisplaySize] = useState<DisPlaySize>(getDisplaySize);

  useEffect(() => {
    const handleResize = () => setDisplaySize(getDisplaySize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return displaySize;
};
export default useMediaQuery;
