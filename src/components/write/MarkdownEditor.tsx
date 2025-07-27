import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import useMediaQuery from "../../hooks/editor/useMediaQuery";
import useToggleEditorTheme from "../../hooks/editor/useToggleEditorTheme";

const MarkdownEditor = ({
  contentRef,
}: {
  contentRef: React.RefObject<Editor | null>;
}) => {
  const displaySize = useMediaQuery();
  useToggleEditorTheme();
  return (
    <Editor
      ref={contentRef}
      previewStyle={displaySize === "mobile" ? "tab" : "vertical"}
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      initialValue=""
      placeholder="글을 작성해주세요."
      hideModeSwitch={true}
      previewHighlight={false}
    />
  );
};

export default MarkdownEditor;
