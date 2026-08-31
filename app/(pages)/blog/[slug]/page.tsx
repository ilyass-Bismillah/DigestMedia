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
      <header className="relative pt-16 lg:pt-32 pb-12">
        <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-xl mx-auto px-4 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-pink-500 hover:text-pink-400 transition-colors"
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

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            {post.metadata.title}
          </h1>

          <p className="dark:text-slate-400 text-slate-700 text-lg sm:text-xl leading-relaxed font-light">
            {post.metadata.description}
          </p>
        </div>
      </header>

      {/* 2. Main 3-Column Layout */}
      <main className="2xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-xl mx-auto px-4 pt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Context Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
            <div className="p-6 rounded-3xl border border-pink-950/40 dark:bg-[#0b0314]/80 bg-pink-800/10 backdrop-blur-md space-y-4 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-800 dark:text-pink-300 flex items-center gap-2">
                <Bookmark className="w-3.5 h-3.5" /> Topic Overview
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Reading insights from{" "}
                <span className="font-semibold text-black dark:text-white">
                  {post.metadata.category}
                </span>{" "}
                framework.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-pink-950/30 bg-pink-800/10 dark:bg-[#080212]/60 space-y-2 shadow-lg">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                Digest Media Benchmark
              </span>
              <div className="text-3xl font-black text-black dark:text-white">
                +28.4%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Average net scaling efficiency unlocked on whitelisted ad lines.
              </p>
            </div>
          </aside>

          {/* Center Column: Dynamic MDX Body (Larger Font & Clean Hierarchy) */}
          <article className="lg:col-span-6 space-y-8 min-w-0">
            {/* Visual Frame */}
            <div className="w-full aspect-video rounded-3xl bg-linear-to-br from-pink-800/30 via-pink-800/10 to-pink-800/5 border border-pink-800/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {post.metadata.image && (
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.category}
                  fill
                  priority
                  className="object-cover rounded-3xl"
                />
              )}

              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 bg-pink-950/80 dark:bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-500/30 text-xs text-pink-300 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Performance Engineering
                </div>
                <span className="text-xs dark:text-pink-300 text-pink-800 uppercase font-bold tracking-wider">
                  {post.metadata.category}
                </span>
              </div>

              <div className="space-y-3 z-10">
                <div className="h-1.5 w-20 bg-linear-to-r from-pink-400 to-pink-600 rounded-full" />
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight">
                  {post.metadata.title}
                </h3>
              </div>
            </div>

            {/* Rendered MDX Content - Scaled Typography */}
            <div
              className="prose prose-invert prose-lg max-w-none dark:text-slate-300 text-slate-800 leading-relaxed font-light
                         prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                         prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-pink-950/60 prose-h2:pb-3
                         prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-pink-200
                         prose-p:text-base sm:prose-p:text-lg prose-p:leading-8 dark:prose-p:text-slate-300 prose-p:text-slate-800
                         prose-ul:space-y-2 prose-ul:my-6
                         prose-li:text-base sm:prose-li:text-lg dark:prose-li:text-slate-300 prose-li:text-slate-800
                         prose-strong:text-pink-400 prose-strong:font-bold
                         prose-table:w-full prose-table:my-8 prose-table:border prose-table:border-pink-950/60 prose-table:rounded-2xl prose-table:overflow-hidden
                         prose-thead:bg-[#150724] prose-th:p-4 prose-th:text-slate-200 prose-th:font-semibold
                         prose-td:p-4 prose-td:border-t prose-td:border-pink-950/40"
            >
              <MDXRemote source={post.content} />
            </div>
          </article>

          {/* Right Column: Sticky Agency Promo CTA */}
          <aside className="lg:col-span-3 sticky top-28 space-y-6">
            <div className="p-6 rounded-3xl border border-pink-800/40 bg-linear-to-br from-pink-800/20 via-pink-900/10 to-[#0c0414] space-y-5 shadow-2xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 dark:text-pink-300 text-pink-800 flex items-center justify-center border border-pink-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold leading-snug">
                  Scale Without Limits
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed font-light">
                  Access whitelisted Google, Meta, TikTok, and Bing agency lines with zero spend caps and dedicated reps.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full py-3.5 px-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs transition-all shadow-lg shadow-pink-950/60 flex items-center justify-center gap-2"
              >
                Apply for Accounts <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>

        {/* FAQs Accordion */}
        <div className="pt-24 max-w-4xl mx-auto">
          <AccordionBasic />
        </div>

        {/* 3. Related Articles Grid */}
        <section className="mt-28 pt-16 border-t dark:border-pink-950/40 border-pink-900/10 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Related Articles
            </h3>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-xs font-bold text-pink-500 hover:text-pink-400 transition-colors"
            >
              View all posts <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <article
                key={rPost.slug}
                className="rounded-3xl border border-pink-950/40 dark:bg-pink-500/5 bg-pink-800/10 p-5 flex flex-col justify-between hover:border-pink-800/50 dark:hover:bg-black/30 hover:bg-pink-800/5 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <Link href={`/blog/${rPost.slug}`} className="w-full aspect-video rounded-2xl bg-linear-to-br from-pink-800/30 via-pink-800/10 to-pink-800/5 border border-pink-900/30 p-4 flex items-end justify-start relative overflow-hidden">
                    <span className="bg-pink-600/40 dark:text-pink-200 text-pink-800 border border-pink-500/30 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider z-20 backdrop-blur-sm">
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
        </section>
      </main>
    </div>
  );
}