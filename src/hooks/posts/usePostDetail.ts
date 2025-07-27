import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../api/posts";
import QUERY_KEYS from "../../constants/queryKeys";
import type { Post } from "../../types/supabase";

export default function usePostDetail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery<Post>({
    queryKey: QUERY_KEYS.postDetail(id!),
    queryFn: async () => getPostDetail(id!),
  });

  return { data, isLoading };
}
