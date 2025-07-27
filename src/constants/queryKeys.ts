const QUERY_KEYS = {
  allPosts: ["posts"] as const,
  postDetail: (id: string) => ["post", id] as const,
};
export default QUERY_KEYS;
