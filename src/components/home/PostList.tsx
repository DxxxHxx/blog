import type { Post } from "@/types/supabase";
import PostCard from "./PostCard";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-8">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
