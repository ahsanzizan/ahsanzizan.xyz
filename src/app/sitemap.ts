import { getAllBlogs } from "@/database/blog.query";
import { getAllProjects } from "@/database/project.query";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs();
  const works = await getAllProjects();

  const blogsRoutes = blogs.map((blog) => ({
    url: `${process.env.NEXTAUTH_URL}/blog/${blog.link}`,
    lastModified: new Date().toISOString(),
  }));
  const worksRoutes = works.map((work) => ({
    url: `${process.env.NEXTAUTH_URL}/works/${work.link}`,
    lastModified: new Date().toISOString(),
  }));
  const conventionalRoutes = ["", "about", "works", "blogs"].map((r) => ({
    url: `${process.env.NEXTAUTH_URL}/${r}`,
    lastModified: new Date().toISOString(),
  }));

  return [...conventionalRoutes, ...blogsRoutes, ...worksRoutes];
}
