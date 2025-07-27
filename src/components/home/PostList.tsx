import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { BookOpenIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tables } from "../../types/supabase";
import CategoryBadge from "../common/CategoryBadge";

export const PostList = ({ posts }: { posts: Tables<"posts">[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          My Blog
        </h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="space-y-6">
        {filteredPosts?.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1"
          >
            {post.updated_at ? (
              // Layout for posts with images
              <div className="md:grid md:grid-cols-3 gap-0">
                {/* <div className="h-64 md:h-full overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6 md:col-span-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {(
                        post.category as { id: number; category: string }[]
                      ).map((item) => (
                        <CategoryBadge key={item.id} category={item.category} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
                    <span>{post.created_at}</span>
                    <Link
                      to={`/post/${post.id}`}
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              // Layout for posts without images
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
                      <BookOpenIcon
                        size={20}
                        className="text-indigo-600 dark:text-indigo-400"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(
                        post.category as { id: number; category: string }[]
                      ).map((item) => (
                        <CategoryBadge key={item.id} category={item.category} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
                  <span>{post.created_at}</span>
                  <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300">
                    Read More →
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {filteredPosts?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No posts found matching "{searchTerm}"
          </p>
          <button
            className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium"
            onClick={() => setSearchTerm("")}
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};
