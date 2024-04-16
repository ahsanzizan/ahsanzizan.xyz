import { getBlogs, getProjects } from "@/database";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const works = await getProjects();

  const blogsRoutes = blogs.map((blog) => ({
    url: `${process.env.NEXTAUTH_URL}/blog/${blog.link}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
    changeFrequency: "monthly",
  }));
  const worksRoutes = works.map((work) => ({
    url: `${process.env.NEXTAUTH_URL}/works/${work.link}`,
    lastModified: new Date().toISOString(),
  }));
  const conventionalRoutes = ["", "about", "works", "blogs"].map((r) => ({
    url: `${process.env.NEXTAUTH_URL}/${r}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "yearly",
  }));

  return [...conventionalRoutes, ...blogsRoutes, ...worksRoutes];
}
