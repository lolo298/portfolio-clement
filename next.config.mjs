import withMDX from "@next/mdx";
import withPlaiceholder from "@plaiceholder/next";
import remarkFrontmatter from "remark-frontmatter";

const withMDXFn = withMDX({
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  distDir: "./build",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withPlaiceholder(withMDXFn(nextConfig));
