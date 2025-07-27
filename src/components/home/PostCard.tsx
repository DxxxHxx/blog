import CategoryBadge from "../common/CategoryBadge";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: { id: number; category: string }[];
    imageUrl: string;
    readTime: string;
  };
  featured?: boolean;
}
export const PostCard = ({ post, featured = false }: PostCardProps) => {
  if (featured) {
    return (
      <div className="bg-white dark:bg-gray-950  rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1 mb-8 md:grid md:grid-cols-2 gap-0">
        <div className="h-64 md:h-full overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.category.map((item) => (
              <CategoryBadge key={item.id} category={item} />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
          <button className="mt-4 px-5 py-2 bg-indigo-600 dark:bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
            Read More
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-wrap gap-2">
            {post.category.map((item) => (
              <CategoryBadge key={item.id} category={item} />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {post.readTime} read
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};
