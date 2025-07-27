import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import usePostDetail from "../hooks/posts/usePostDetail";
import Loader from "../components/common/Loader";
import { useEffect } from "react";
import useThemeStore from "../store/useThemeStore";
import CategoryBadge from "../components/common/CategoryBadge";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";
import Prism from "prismjs";

export default function PostDetailPage() {
  const { data, isLoading } = usePostDetail();

  const createdAt = new Date(data?.created_at as string)
    .toString()
    .split("GMT")[0];

  const headingMarkdown = `# ${data?.title}\n <h6>${createdAt}</h6> `;

  const theme = useThemeStore((s) => s.theme);
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
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Viewer initialValue={headingMarkdown} />
          <section className="flex my-3 gap-x-3 flex-wrap justify-start items-center">
            {(
              data?.category as unknown as { id: number; category: string }[]
            ).map((item) => (
              <CategoryBadge key={item.id} category={item} />
            ))}
          </section>
          <Viewer
            initialValue={data?.content}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        </>
      )}
    </>
  );
}
