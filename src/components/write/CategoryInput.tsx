import { AnimatePresence, motion } from "framer-motion";
import { useState, type KeyboardEvent } from "react";
import type { CategoryList } from "../../pages/Write";
import CategoryBadge from "../common/CategoryBadge";

interface CategoryInputProps {
  categories: CategoryList[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryList[]>>;
}

export default function CategoryInput({
  categories,
  setCategories,
}: CategoryInputProps) {
  const [category, setCategory] = useState("");
  const [showOnboarding, setShowOnBoarding] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Backspace" && categories.length > 0 && !category) {
      const newCategories = categories.filter(
        (_, index, arr) => index !== arr.length - 1
      );
      setCategories(newCategories);
    }
    if (e.key !== "Enter" || !category) return;

    setCategories((prev) => {
      if (prev.findIndex((item) => item.category === category) !== -1) {
        return prev;
      }
      return [...prev, { id: Date.now(), category }];
    });
    setCategory("");
  };

  return (
    <div className="flex justify-start items-center gap-x-3 md:mr-3 w-full flex-wrap relative">
      {categories.map((item) => (
        <CategoryBadge
          category={item}
          key={item.id}
          onClick={() =>
            setCategories((prev) => prev.filter((p) => p.id !== item.id))
          }
        />
      ))}
      <div className="md:relative">
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onFocus={() => setShowOnBoarding(true)}
          onBlur={() => setShowOnBoarding(false)}
          type="text"
          placeholder="카테고리를 입력하세요."
          className=" dark:text-white placeholder:dark:text-white px-5 py-2 rounded-2xl outline-none my-3"
          onKeyDown={handleKeyDown}
        />
        <AnimatePresence>
          {showOnboarding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-14 left-0 z-10 rounded-lg py-2 px-8 bg-[#343A40] text-white w-full md:w-80 text-xs md:text-sm"
            >
              엔터를 입력해 카테고리를 등록할 수 있습니다. <br /> 등록된
              카테고리를 클릭하면 삭제됩니다.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
