import { _ as __vite_glob_0_2, a as __vite_glob_0_1, b as __vite_glob_0_0 } from "../../../../chunks/dominando-animacoes.js";
import { error } from "@sveltejs/kit";
async function load({ params }) {
  try {
    const paths = /* @__PURE__ */ Object.assign({ "/src/lib/data/posts/arquitetura-frontend.md": __vite_glob_0_0, "/src/lib/data/posts/design-premium-tailwind.md": __vite_glob_0_1, "/src/lib/data/posts/dominando-animacoes.md": __vite_glob_0_2 });
    let postFile;
    let matchingSlug = "";
    for (const path in paths) {
      const slug = path.split("/").pop()?.replace(".md", "");
      if (slug === params.slug) {
        postFile = paths[path];
        matchingSlug = slug;
        break;
      }
    }
    if (!postFile) {
      throw error(404, "Post not found");
    }
    const metadata = postFile.metadata;
    return {
      content: postFile.default,
      meta: {
        ...metadata,
        slug: matchingSlug
      }
    };
  } catch (e) {
    throw error(404, "Post not found");
  }
}
export {
  load
};
