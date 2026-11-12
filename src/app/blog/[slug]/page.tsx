import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Phone,
  Stethoscope,
} from "lucide-react";
import {
  BLOG_ARTICLES,
  getBlogBySlug,
  getRelatedArticles,
} from "@/data/blog";
import { CLINIC_INFO, SITE_URL } from "@/data/clinic";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationTriggerButton } from "@/components/booking/ConsultationTriggerButton";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    return buildPageMetadata({
      title: "Article Not Found | Smilo Care Dental Blog",
      description:
        "Educational dental health articles from Smilo Care Orthodontic And Implant Centre in Kanpur.",
      path: `/blog/${slug}`,
    });
  }

  return buildPageMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    ogImage: article.image,
  });
}

function formatReadableDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: article.title, path: `/blog/${article.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Person",
      name: article.authorName,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "MedicalClinic",
      name: CLINIC_INFO.brandName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${CLINIC_INFO.assets.logo}`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-white">
        <section className="bg-gradient-to-b from-[#F5F8FF] to-white pb-10 pt-10 sm:pb-14 sm:pt-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: article.title },
              ]}
            />

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
              <span className="rounded-full border border-[#D6B879]/60 bg-white px-3.5 py-1 text-[#1749B8]">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#1749B8]" aria-hidden="true" />
                {article.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar
                  className="h-3.5 w-3.5 text-[#1749B8]"
                  aria-hidden="true"
                />
                <time dateTime={article.publishedAt}>
                  {formatReadableDate(article.publishedAt)}
                </time>
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-[#102D65] sm:text-4xl lg:text-[2.65rem]">
              {article.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#E7ECF5] py-4">
              <div className="flex items-center gap-3.5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#D6B879] bg-[#F5F8FF]">
                  <Image
                    src={CLINIC_INFO.doctor.portraitSrc}
                    alt={CLINIC_INFO.doctor.portraitAlt}
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#102D65]">
                    {article.authorName}
                  </p>
                  <p className="text-xs text-slate-600">
                    {article.authorRole} &bull; {CLINIC_INFO.shortName} Kanpur
                  </p>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1749B8] transition hover:text-[#102D65]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All Articles
              </Link>
            </div>

            <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] shadow-md">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-16 pt-2">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
            <div className="space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="font-display text-2xl font-bold text-[#102D65] sm:text-[1.65rem]">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph, idx) => (
                    <p
                      key={`${section.heading}-p-${idx}`}
                      className="text-base leading-relaxed text-slate-700"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5 rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF]/70 p-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1749B8]"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subSections && section.subSections.length > 0 && (
                    <div className="space-y-6 pt-2">
                      {section.subSections.map((sub) => (
                        <div
                          key={sub.subHeading}
                          className="rounded-2xl border border-[#E7ECF5] bg-white p-5 shadow-xs"
                        >
                          <h3 className="font-display text-lg font-bold text-[#102D65]">
                            {sub.subHeading}
                          </h3>
                          <div className="mt-2.5 space-y-3">
                            {sub.paragraphs.map((subP, idx) => (
                              <p
                                key={`${sub.subHeading}-p-${idx}`}
                                className="text-sm leading-relaxed text-slate-700 sm:text-base"
                              >
                                {subP}
                              </p>
                            ))}
                          </div>
                          {sub.bullets && sub.bullets.length > 0 && (
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                              {sub.bullets.map((subBullet) => (
                                <li
                                  key={subBullet}
                                  className="flex items-start gap-2"
                                >
                                  <span
                                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6B879]"
                                    aria-hidden="true"
                                  />
                                  <span>{subBullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              <div className="rounded-2xl border border-[#E7ECF5] bg-[#F5F8FF] p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                  Clinical Educational Note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  This article is intended for general patient education and
                  oral health awareness. Because dental anatomy, gum health, and
                  treatment suitability differ for every person, an in-person
                  clinical evaluation with {CLINIC_INFO.doctor.name} (
                  {CLINIC_INFO.doctor.qualifications}) is recommended for
                  personalized guidance.
                </p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-[#E7ECF5] bg-[#F5F8FF] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                  <Stethoscope className="h-4 w-4" aria-hidden="true" />
                  Kanpur Clinic Consultation
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-[#102D65]">
                  Have Questions About Your Smile?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Visit {CLINIC_INFO.brandName} in Ashok Nagar, Harsh Nagar,
                  Kanpur for a personalized evaluation.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <ConsultationTriggerButton
                    label="Book Appointment"
                    variant="primary"
                    className="w-full"
                  />
                  <a
                    href={CLINIC_INFO.phone.telHref}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#E7ECF5] bg-white px-4 py-2.5 text-sm font-semibold text-[#102D65] transition hover:border-[#1749B8]/40 hover:text-[#1749B8]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {CLINIC_INFO.phone.display}
                  </a>
                </div>
              </div>

              {article.internalLinks.length > 0 && (
                <div className="rounded-3xl border border-[#E7ECF5] bg-white p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102D65]">
                    <BookOpen
                      className="h-4 w-4 text-[#D6B879]"
                      aria-hidden="true"
                    />
                    Explore Related Services
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {article.internalLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between rounded-xl border border-[#E7ECF5] bg-[#F5F8FF]/60 px-4 py-3 text-sm font-semibold text-[#102D65] transition hover:border-[#1749B8]/40 hover:bg-[#F5F8FF] hover:text-[#1749B8]"
                        >
                          <span>{item.label}</span>
                          <ArrowRight
                            className="h-4 w-4 text-[#1749B8] transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="border-t border-[#E7ECF5] bg-[#F5F8FF] py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1749B8]">
                    Keep Reading
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-[#102D65] sm:text-3xl">
                    Related Dental Health Guides
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1749B8] hover:underline"
                >
                  View All Articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#E7ECF5] bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-[#F5F8FF]">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold text-[#1749B8]">
                        {related.category} &bull; {related.readingTime}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-[#102D65] group-hover:text-[#1749B8]">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                        {related.excerpt}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#1749B8]">
                        Read Article
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
