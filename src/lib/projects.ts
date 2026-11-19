import { readdir } from "node:fs/promises";
import path from "node:path";

export type Project = {
  slug: string;
  title: string;
  description: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "src/app/projects");

export async function getProjects(): Promise<Project[]> {
  const entries = await readdir(PROJECTS_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
    .map((e) => e.name)
    .sort();

  return Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/app/projects/${slug}/page.mdx`);
      return {
        slug,
        title: metadata.title,
        description: metadata.description,
      };
    }),
  );
}
