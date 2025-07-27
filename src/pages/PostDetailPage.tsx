import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import usePostDetail from "../hooks/posts/usePostDetail";
import Loader from "../components/common/Loader";
import { useEffect } from "react";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";

import { useTheme } from "@/components/common/themeProvider";
import PostViewer from "@/components/postDetail/PostViewer";

export default function PostDetailPage() {
  const { data, isLoading } = usePostDetail();

  const { theme } = useTheme();
  useEffect(() => {
    if (isLoading) return;
    const $viewers = document.querySelectorAll("main div");

    if (theme === "dark") {
      $viewers.forEach((viewer) => viewer.classList.add(`toastui-editor-dark`));
      $viewers.forEach((viewer) =>
        viewer.classList.remove(`toastui-editor-default`)
      );
    } else {
      $viewers.forEach((viewer) =>
        viewer.classList.add(`toastui-editor-default`)
      );
      $viewers.forEach((viewer) =>
        viewer.classList.remove(`toastui-editor-dark`)
      );
    }
  }, [theme, isLoading]);
  return <>{isLoading ? <Loader /> : <PostViewer post={data!} />}</>;
}
