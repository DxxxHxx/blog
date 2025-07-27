import { useEffect } from "react";
import { useTheme } from "@/components/common/themeProvider";

const useToggleEditorTheme = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const $editor = document.querySelector(".toastui-editor-defaultUI");

    if (theme === "dark") {
      $editor?.classList.add(`toastui-editor-dark`);
      $editor?.classList.remove(`toastui-editor-default`);
    } else {
      $editor?.classList.add(`toastui-editor-default`);
      $editor?.classList.remove(`toastui-editor-dark`);
    }
  }, [theme]);
};

export default useToggleEditorTheme;
