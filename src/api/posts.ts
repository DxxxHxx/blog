import { supabase } from "../lib/supabaseClient";
import type { TablesInsert } from "../types/supabase";

// 'posts' 테이블에 삽입할 데이터 타입을 정의합니다.
export type Post = TablesInsert<"posts">;

/**
 * 새로운 게시글을 생성합니다.
 * @param post - 생성할 게시글 데이터 ({ title, category, content })
 * @returns 생성된 게시글 데이터 또는 에러 객체
 */
export const createPost = async (post: Post) => {
  const { data, error } = await supabase
    .from("posts")
    .insert(post)
    .select()
    .single(); // 단일 객체를 반환받기 위해 .single()을 사용합니다.

  if (error) {
    console.error("Error creating post:", error);
    // 실제 애플리케이션에서는 에러를 더 정교하게 처리하는 것이 좋습니다.
    // 예를 들어, 사용자에게 에러 메시지를 보여주거나 로깅 서비스에 기록할 수 있습니다.
    throw new Error("게시글을 생성하는 데 실패했습니다.");
  }

  return data;
};

export const getPosts = async () => {
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    throw new Error("게시글을 불러오는 데 실패했습니다.");
  }

  return posts;
};

export const getPostDetail = async (postId: string) => {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (error) {
    throw new Error("게시글을 불러오는 데 실패했습니다.");
  }

  return posts;
};
