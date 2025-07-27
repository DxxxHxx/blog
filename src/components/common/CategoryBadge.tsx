import React from "react";

interface CategoryBadgeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  category: { id: number; category: string };
}
export default function CategoryBadge({
  category,
  ...props
}: CategoryBadgeProps) {
  return (
    <div
      {...props}
      className="text-[#12B886] dark:text-[#97F2D7] hover:bg-gray-200 dark:hover:bg-[#2E2E2E] dark:bg-[#1E1E1E] bg-gray-100 w-fit rounded-2xl px-5 my-3 py-1 cursor-pointer"
    >
      {category.category}
    </div>
  );
}
