import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export", // fully static site, deployable anywhere
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      ["rehype-pretty-code", { theme: "github-dark-default", keepBackground: false }],
    ],
  },
});

export default withMDX(nextConfig);
