import { _ as __vite_glob_0_2, a as __vite_glob_0_1, b as __vite_glob_0_0 } from "./dominando-animacoes.js";
async function getPosts() {
  const paths = /* @__PURE__ */ Object.assign({ "/src/lib/data/posts/arquitetura-frontend.md": __vite_glob_0_0, "/src/lib/data/posts/design-premium-tailwind.md": __vite_glob_0_1, "/src/lib/data/posts/dominando-animacoes.md": __vite_glob_0_2 });
  const posts = [];
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    if (file && typeof file === "object" && "metadata" in file && file.metadata) {
      const metadata = file.metadata;
      posts.push({
        ...metadata,
        slug,
        content: file.default
        // the renderable component from mdsvex
      });
    }
  }
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export {
  getPosts as g
};
