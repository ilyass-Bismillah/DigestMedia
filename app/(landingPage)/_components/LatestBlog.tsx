import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllPosts } from "@/lib/mdx";

const LatestBlog = () => {
  const posts = getAllPosts().slice(0, 3);
  return (
    <div className="py-15 lg:py-20 2xl:max-w-7xl lg:max-w-6xl md:max-w-lg max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Latest blogs
        </h3>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-xs font-bold text-pink-500 hover:text-pink-400 transition-colors"
        >
          <Button variant={"digest"}>
            View all <MoveRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((rPost) => (
          <article
            key={rPost.slug}
            className="rounded-3xl border dark:border-pink-950/40 dark:bg-pink-500/5 bg-white p-5 flex flex-col justify-between dark:hover:border-pink-800/50 dark:hover:bg-black/30 transition-all duration-300 group shadow-md"
          >
            <div className="space-y-4">
              <Link
                href={`/blog/${rPost.slug}`}
                className="w-full aspect-video rounded-2xl bg-linear-to-br from-pink-800/30 via-pink-800/10 to-pink-800/5 border border-pink-900/30 p-4 flex items-end justify-start relative overflow-hidden"
              >
                <span className="bg-pink-600/40 text-pink-200 border border-pink-500/30 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider z-20 backdrop-blur-sm">
                  {rPost.category}
                </span>
                {rPost.image && (
                  <Image
                    src={rPost.image}
                    alt={rPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </Link>
              <h4 className="text-base font-bold dark:group-hover:text-pink-300 group-hover:text-pink-500 transition-colors line-clamp-2 leading-snug">
                {rPost.title}
              </h4>
              <p className="text-xs dark:text-slate-400 text-slate-600 line-clamp-2 font-light leading-relaxed">
                {rPost.description}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-pink-950/20">
              <Link
                href={`/blog/${rPost.slug}`}
                className="flex items-center gap-2 text-xs font-semibold text-pink-500 hover:text-pink-400"
              >
                Read article <MoveRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
