import { g as getPosts } from "../../../chunks/blog.js";
async function load() {
  const posts = await getPosts();
  return {
    posts
  };
}
export {
  load
};
