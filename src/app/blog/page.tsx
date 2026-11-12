import { BLOG_ARTICLES } from "@/data/blog";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogExplorer } from "@/components/blog/BlogExplorer";

export const metadata = buildPageMetadata({
  title: "Dental Health Blog | Smilo Care Orthodontic & Implant Centre Kanpur",
  description:
    "Read patient-friendly dental guides on dental implants, metal vs ceramic braces, orthodontic care, and everyday oral hygiene from Smilo Care in Kanpur.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-[#F5F8FF] to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />

          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-[#D6B879]/60 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
              Patient Education Library
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-[#102D65] sm:text-4xl">
              Dental Care Insights &amp; Patient Guides
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Clear, accurate educational articles designed to help you make
              informed choices about dental implants, braces, orthodontics, and
              everyday oral health in Kanpur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 pt-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogExplorer articles={BLOG_ARTICLES} />
        </div>
      </section>
    </>
  );
}
