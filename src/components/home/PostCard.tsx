import type { Post } from "@/types/supabase";
import CategoryBadge from "../common/CategoryBadge";
import { Link } from "react-router-dom";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-lg border p-4 space-y-3 transition-all bg-card hover:bg-card/80">
      <div className="flex justify-between items-start">
        {/* <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
          {post.category[0]}
        </span> */}
        <time className="text-sm text-muted-foreground">{post.created_at}</time>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold leading-tight tracking-tight">
          <Link to={`/post/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="flex gap-x-3">
          {post.category?.map((item) => (
            <CategoryBadge category={item} />
          ))}
        </div>
      </div>
      {/* {post.image && (
        <div className="mt-4 overflow-hidden rounded-md">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-48 transition-transform group-hover:scale-105"
          />
        </div>
      )} */}
    </article>
  );
}
