import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  modifiedDate?: string;
  category: string;
  author: string;
  image: string;
  keywords: string[];
  readingTime: string;
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString().split("T")[0],
        modifiedDate: data.modifiedDate || data.date,
        category: data.category || "General",
        author: data.author || "Digest Media",
        image: data.image || "/logo.webp",
        keywords: data.keywords || [],
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  let fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      modifiedDate: data.modifiedDate || data.date,
      category: data.category || "General",
      author: data.author || "Digest Media",
      image: data.image || "/logo.webp",
      keywords: data.keywords || [],
      readingTime: readingTime(content).text,
    } as PostMetadata,
    content,
  };
}