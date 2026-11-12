"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import {
  BLOG_CATEGORIES,
  type BlogArticle,
  type BlogCategory,
} from "@/data/blog";

export function BlogExplorer({ articles }: { articles: BlogArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | BlogCategory>("All");

  const featuredArticle = useMemo(
    () => articles.find((a) => a.featured) ?? articles[0],
    [articles]
  );

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      );
    });
  }, [articles, category, query]);

  return (
    <div className="space-y-12">
      {/* Featured Article */}
      {featuredArticle && (
        <article className="overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white shadow-[0_14px_40px_-18px_rgba(16,45,101,0.14)] lg:grid lg:grid-cols-12">
          <div className="aspect-[16/10] overflow-hidden bg-[#F5F8FF] lg:col-span-6 lg:aspect-auto">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              width={1200}
              height={750}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-[#D6B879]/60 bg-[#F5F8FF] px-3 py-1 font-bold uppercase tracking-wider text-[#1749B8]">
                  Featured Guide
                </span>
                <span className="font-semibold text-slate-500">
                  {featuredArticle.category}
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-[#102D65] sm:text-3xl">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="hover:text-[#1749B8]"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7ECF5] pt-5">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={featuredArticle.publishedAt}>
                    {new Date(featuredArticle.publishedAt).toLocaleDateString(
                      "en-IN",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1749B8] hover:text-[#102D65]"
              >
                <span>Read Article</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Search & Category Filters */}
      <search className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1 lg:max-w-md">
            <label htmlFor="blog-search-input" className="visually-hidden">
              Search dental education articles
            </label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="blog-search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics (e.g., braces, implants, oral hygiene)..."
              className="smilo-input w-full rounded-xl pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div
            role="group"
            aria-label="Filter articles by category"
            className="flex flex-wrap gap-2"
          >
            {BLOG_CATEGORIES.map((cat) => {
              const selected = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCategory(cat)}
                  className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    selected
                      ? "bg-[#1749B8] text-white shadow-xs"
                      : "border border-[#E7ECF5] bg-white text-slate-700 hover:bg-white/80 hover:text-[#102D65]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </search>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="rounded-3xl border border-[#E7ECF5] bg-white p-10 text-center">
          <p className="font-display text-lg font-bold text-[#102D65]">
            No articles matched your search.
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Try clearing the filter or searching for &ldquo;braces&rdquo;,
            &ldquo;implants&rdquo;, or &ldquo;hygiene&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-4 rounded-xl bg-[#1749B8] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7ECF5] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#1749B8]/35 hover:shadow-xl"
            >
              <Link
                href={`/blog/${article.slug}`}
                className="aspect-[16/10] w-full overflow-hidden bg-[#F5F8FF]"
              >
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded-full bg-[#F5F8FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1749B8]">
                    {article.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold leading-snug text-[#102D65] group-hover:text-[#1749B8]">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E7ECF5] pt-4 text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString(
                        "en-IN",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <span>&bull; {article.readingTime}</span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    aria-label={`Read ${article.title}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#1749B8] hover:text-[#102D65]"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
