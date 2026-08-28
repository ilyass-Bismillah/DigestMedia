import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Bookmark,
  ShieldCheck,
  Sparkles,
  MoveRight,
} from "lucide-react";
import { AccordionBasic } from "@/components/Accordions";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Article Not Found | Digest Media" };

  return {
    title: `${post.metadata.title} | Digest Media`,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
    authors: [{ name: post.metadata.author }],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    author: {
      "@type": "Organization",
      name: post.metadata.author,
    },
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Google Structured Data Injection */}
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      {/* 1. Header Hero Banner */}
      <header className="relative pt-32 pb-16">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 dark:hover:text-pink-300 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3">
            <span className="bg-pink-600/30 dark:text-pink-300 text-pink-800 border border-pink-500/40 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              {post.metadata.category}
            </span>
            <span className="text-xs dark:text-slate-400 text-slate-600 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.metadata.date}
            </span>
            <span className="text-xs dark:text-slate-400 text-slate-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.metadata.readingTime}
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
            {post.metadata.title}
          </h1>

          <p className="dark:text-slate-400 text-slate-800 text-base sm:text-lg leading-relaxed font-light">
            {post.metadata.description}
          </p>
        </div>
      </header>

      {/* 2. Main 3-Column Layout */}
      <main className="2xl:max-w-7xl lg:max-w-5xl md:max-w-lg max-w-sm mx-auto pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Table of Contents / Context */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
            <div className="p-5 rounded-2xl border border-pink-950/50 dark:bg-[#0b0314]/80 bg-pink-800/10 backdrop-blur-md space-y-4 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-800 dark:text-pink-300 flex items-center gap-2">
                <Bookmark className="w-3.5 h-3.5" /> Topic Overview
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Reading insights from{" "}
                <span className="font-medium text-black dark:text-white">
                  {post.metadata.category}
                </span>{" "}
                framework.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-pink-950/30 bg-pink-800/10 dark:bg-[#080212]/60 space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                Digest Media Benchmark
              </span>
              <div className="text-2xl font-black text-black dark:text-white">
                +28.4%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Average net scaling efficiency unlocked on whitelisted ad lines.
              </p>
            </div>
          </aside>

          {/* Center Column: Dynamic MDX Editorial Body */}
          <article className="lg:col-span-6 space-y-10">
            {/* Visual Header Frame */}
            <div className="w-full aspect-video rounded-3xl bg-linear-to-br from-pink-800/30 via-pink-800/10 to-pink-800/5 border border-pink-800/40 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 bg-pink-950/80 dark:bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-pink-300">
                  <Sparkles className="w-3.5 h-3.5" /> Performance Engineering
                </div>
                <span className="text-xs dark:text-pink-400 text-pink-800 uppercase tracking-wider">
                  {post.metadata.category}
                </span>
              </div>
              {post.metadata.image && (
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.category}
                  width={600}
                  height={400}
                  className="w-full h-full z-10 object-cover absolute top-0 left-0 right-0 bottom-0"
                />
              )}
              <div className="space-y-2 z-10">
                <div className="h-1.5 w-20 bg-linear-to-r from-pink-300 to-pink-500 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {post.metadata.title}
                </h3>
              </div>
            </div>

            {/* Rendered MDX Content */}
            <div
              className="prose prose-invert max-w-none dark:text-slate-300 text-slate-800 leading-relaxed 
                         prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight 
                         prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-pink-950/60 prose-h2:pb-3
                         prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                         prose-p:text-sm prose-p:sm:text-base prose-p:leading-relaxed prose-p:text-slate-300
                         prose-ul:space-y-2 prose-ul:my-4
                         prose-li:text-sm prose-li:sm:text-base prose-li:text-slate-300
                         prose-strong:text-purple-300 prose-strong:font-semibold
                         prose-table:border prose-table:border-pink-950/60 prose-table:rounded-xl prose-table:overflow-hidden
                         prose-thead:bg-[#150724] prose-th:p-3.5 prose-th:text-slate-200
                         prose-td:p-3.5 prose-td:border-t prose-td:border-pink-950/40"
            >
              <MDXRemote source={post.content} />
            </div>
          </article>

          {/* Right Column: Sticky Agency Promo CTA */}
          <aside className="lg:col-span-3 sticky top-28 space-y-6">
            <div className="p-6 rounded-3xl border border-pink-800/40 bg-linear-to-br from-pink-800/30 to-pink-800/10 space-y-5 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 dark:text-pink-300 text-pink-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold leading-snug">
                  Scale Without Limits
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  Access whitelisted Google, Meta, TikTok, and Bing agency lines
                  with zero spend caps and dedicated reps.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs transition-all shadow-lg shadow-pink-950 flex items-center justify-center gap-1.5"
              >
                Apply for Accounts <MoveRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>
        </div>

        <div className="pt-30">
          <AccordionBasic />
        </div>

        {/* 3. Related Articles Grid */}
        <section className="mt-28 pt-16 border-t dark:border-pink-950/40 border-pink-900/10 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Related Articles
            </h3>
            <Link
              href="/blog"
              className="flex items-center gap-3 text-xs font-semibold text-pink-400 dar:hover:text-pink-300 hover:text-pink-800 transition-colors"
            >
              View all posts <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <article
                key={rPost.slug}
                className="rounded-3xl border border-pink-950/40 dark:bg-pink-500/5 bg-pink-800/10 p-5 flex flex-col justify-between hover:border-pink-800/50 dark:hover:bg-black/10 hover:bg-pink-800/5  transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="w-full aspect-16/10 rounded-2xl bg-linear-to-br from-pink-800/30 via-pink-800/10 to-pink-800/5 border border-pink-900/30 p-4 flex items-end justify-start">
                    <span className="bg-pink-600/30 dark:text-pink-200 text-pink-800 border border-pink-500/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {rPost.category}
                    </span>
                    {rPost.image && (
                      <Image
                        src={rPost.image}
                        alt={rPost.category}
                        width={100}
                        height={100}
                        className="w-full h-full z-10 object-cover absolute top-0 left-0 right-0 bottom-0"
                      />
                    )}
                  </div>
                  <h4 className="text-sm font-bold dark:group-hover:text-pink-300 group-hover:text-pink-500 transition-colors line-clamp-2">
                    {rPost.title}
                  </h4>
                  <p className="text-xs dark:text-slate-400 text-slate-600 line-clamp-2 font-light">
                    {rPost.description}
                  </p>
                </div>

                <div className="pt-4 mt-2">
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="flex items-center gap-3 text-xs font-semibold dark:text-pink-400 text-pink-600 dark:hover:text-pink-300 hover:text-pink-500"
                  >
                    Read article <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
