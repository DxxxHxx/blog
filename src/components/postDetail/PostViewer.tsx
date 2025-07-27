import { Viewer } from "@toast-ui/react-editor";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import CategoryBadge from "../common/CategoryBadge";
import type { Post } from "@/types/supabase";

export default function PostViewer({ post }: { post: Post }) {
  const createdAt = new Date(post?.created_at as string)
    .toString()
    .split("GMT")[0];

  const headingMarkdown = `# ${post?.title}\n <h6>${createdAt}</h6> `;
  return (
    <>
      <Viewer initialValue={headingMarkdown} />
      <section className="flex my-3 gap-x-3 flex-wrap justify-start items-center">
        {post.category?.map((item) => (
          <CategoryBadge key={item.id} category={item} />
        ))}
      </section>
      <Viewer
        initialValue={post?.content}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  );
}
