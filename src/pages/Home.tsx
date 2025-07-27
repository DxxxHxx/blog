import Loader from "../components/common/Loader";
import PostList from "../components/home/PostList";
import usePosts from "../hooks/posts/usePosts";

export default function Home() {
  const { isLoading, posts } = usePosts();

  if (isLoading) return <Loader />;
  return (
    <div>
      <PostList posts={posts!} />
    </div>
  );
}
