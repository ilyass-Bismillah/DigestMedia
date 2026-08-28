import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { getPostsByPage, getAllPosts } from "@/lib/posts";
import Platforms from "@/components/Platforms";
import { Button } from "@/components/ui/button";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const { posts, totalPages } = getPostsByPage(currentPage, 9);
  const featuredPost = getAllPosts()[0];

  return (
    <div className="min-h-screen">
      <div className="relative z-10 2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto pt-32 pb-20 space-y-24">
        {/* 1. Page Title */}
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
            Blog
          </h1>
        </div>

        {/* 2. Featured Post Card (Top Hero) */}
        {featuredPost && (
          <div className="relative rounded-3xl border dark:border-pink-900/30 dark:bg-black/30 bg-slate-500/10 backdrop-blur-md p-6 sm:p-10 overflow-hidden shadow-2xl transition-all duration-300 dark:hover:border-pink-700/50 hover:border-pink-500/50 group">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Graphic Visual Window */}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="lg:col-span-6 aspect-16/10 w-full rounded-2xl bg-linear-to-br from-pink-800/30 via-pink-800/10 to-pink-800/5 border border-pink-800/40 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-500"
              >
                <span className="self-start bg-pink-600/30 text-pink-300 border border-pink-500/40 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider z-40">
                  {featuredPost.category}
                </span>
                <Image
                  src="/blog/marketing.jpg"
                  alt="marketing"
                  width={500}
                  height={100}
                  className="w-full h-full z-10 object-cover absolute top-0 left-0 right-0 bottom-0"
                />
              </Link>

              {/* Content Description */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3 text-xs">
                  <span className="bg-pink-600 text-white font-bold px-2.5 py-1 rounded-md text-[11px] tracking-wide uppercase">
                    {featuredPost.category}
                  </span>
                  <span className="dark:text-slate-400 text-slate-600 font-medium">
                    {featuredPost.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight dark:group-hover:text-pink-300 group-hover:text-pink-500 transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-5 px-5 py-2.5 rounded-lg dark:bg-slate-900 border dark:border-slate-700 border-slate-400/30 bg-slate-50/50 hover:bg-slate-50/20 dark:hover:border-pink-500 dark:hover:bg-slate-800 text-xs font-bold transition-all shadow-md hover:scale-105"
                  >
                    Read more <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. All Posts Feed Section */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">
              All Posts
            </h2>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border dark:border-pink-950/40 bg-slate-400/10 dark:bg-[#0c0414]/50 backdrop-blur-sm p-5 flex flex-col justify-between hover:border-pink-500/50 dark:hover:border-pink-800/50 dark:hover:bg-[#11061c]/80 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Visual Frame */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full aspect-16/10 rounded-2xl bg-linear-to-br dark:from-[#160a2b] from-pink-500/50 dark:via-[#0e051c] via-pink-500/30 dark:to-[#07020e] to-pink-500/20 border dark:border-pink-900/30 p-4 flex flex-col justify-between relative overflow-hidden"
                  >
                    <span className="self-end bg-pink-600/70 text-pink-200 border border-pink-500/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider z-40">
                      {post.category}
                    </span>
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.category}
                        width={600}
                        height={400}
                        className="w-full h-full z-10 object-cover absolute top-0 left-0 right-0 bottom-0"

                      />
                    )}
                    <div className="space-y-1.5 opacity-30">
                      <div className="h-1.5 w-10 bg-pink-400 rounded-full" />
                      <div className="h-2 w-32 bg-white rounded" />
                    </div>
                  </Link>

                  {/* Title & Body */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold dark:text-slate-100 dark:group-hover:text-pink-300 group-hover:text-pink-500 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors flex items-center gap-3"
                  >
                    Read more <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 pt-8">
            <Link
              href={`/blog?page=${Math.max(1, currentPage - 1)}`}
              className={`flex items-center gap-3 px-3 p-2 rounded-lg border dark:border-slate-800 dark:bg-slate-900/80 bg-white/50 hover:bg-white/80  dark:text-slate-400 dark:hover:text-white transition-colors ${
                currentPage === 1 ? "pointer-events-none opacity-40" : ""
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Link>

            <Link
              href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
              className={`flex items-center gap-3 px-3 p-2 rounded-lg border dark:border-slate-800 dark:bg-slate-900/80 bg-white/50 hover:bg-white/80 dark:text-slate-400  dark:hover:text-white transition-colors ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-40"
                  : ""
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4. Supported Platforms Bar */}
        <Platforms />

        {/* 5. Newsletter & Pre-Footer */}
        <div className="rounded-3xl border dark:border-pink-950/40 dark:bg-[#0d0517]/40 bg-slate-400/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-md">
            <h3 className="text-xl font-bold">Subscribe to our newsletter</h3>
            <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
              Get a summary of what we&apos;ve shipped during the last month,
              behind the scenes updates, and team picks.
            </p>
          </div>

          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 rounded-xl dark:bg-slate-900/80 bg-white/10 border dark:border-slate-800 border-slate-300 text-xs focus:outline-none focus:border-pink-500 w-full sm:w-64"
            />
            <Button
              variant={"digest"}
              type="submit"
              className="text-xs font-semibold flex items-center gap-3 shrink-0"
            >
              Get Access <MoveRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
