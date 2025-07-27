import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";
import type { Tables } from "../../types/supabase";
import QUERY_KEYS from "../../constants/queryKeys";

export default function usePosts() {
  const { data: posts, isLoading } = useQuery<Tables<"posts">[]>({
    queryKey: QUERY_KEYS.allPosts,
    queryFn: getPosts,
  });

  return { posts, isLoading };
}
