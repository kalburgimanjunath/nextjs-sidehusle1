const getAllPosts = async () => {
  const allPosts = await fetch('./api/posts').then((res) => res.json());
  (result) => result.json(result.posts);
  return allPosts;
};
export const getUserById = () => {};
export { getAllPosts };
