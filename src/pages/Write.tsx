import { useRef, useState } from "react";
import MarkdownEditor from "../components/write/MarkdownEditor";
import CategoryInput from "../components/write/CategoryInput";
import type { Editor } from "@toast-ui/react-editor";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface CategoryList {
  id: number;
  category: string;
}
const Write = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [categories, setCategories] = useState<CategoryList[]>([]);
  const contentRef = useRef<Editor>(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!titleRef.current) return;
    const title = titleRef.current?.value;
    const content = contentRef.current?.getInstance().getMarkdown();

    try {
      await createPost({
        title,
        category: categories,
        content,
      });
      alert("게시글 생성 완료");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="mt-5">
      <input
        type="text"
        ref={titleRef}
        className="text-4xl md:text-5xl focus:outline-none space-y-4 mb-5 w-full"
        placeholder="제목을 입력해주세요."
      />

      <CategoryInput categories={categories} setCategories={setCategories} />

      <MarkdownEditor contentRef={contentRef} />

      {/* <button
        onClick={handleSubmit}
        className="text-[#12B886] flex ml-auto dark:text-[#97F2D7] hover:bg-gray-200 dark:hover:bg-[#2E2E2E] dark:bg-[#1E1E1E] bg-gray-100 w-fit rounded-2xl px-5 my-3 py-3 cursor-pointer
        "
      >
        게시글 생성
      </button> */}
      <Button
        className="cursor-pointer my-5 flex ml-auto"
        variant={"secondary"}
        onClick={handleSubmit}
        size={"lg"}
      >
        게시글 생성
      </Button>
    </div>
  );
};

export default Write;
