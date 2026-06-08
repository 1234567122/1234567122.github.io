import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("solutions");

const solutions = [
  ["企业官网AI SEO升级", "适合已经有官网但内容结构、SEO基础和AI可读性不足的企业。"],
  ["B2B服务获客内容体系", "适合依赖搜索流量和咨询转化的服务型、制造型和解决方案型企业。"],
  ["品牌搜索结果占位", "适合希望用户搜索品牌时看到清晰、可信、统一信息的企业。"],
  ["行业知识库与长尾内容资产", "适合需要长期沉淀行业问题、服务解释和客户教育内容的企业。"]
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="面向AI搜索时代的官网增长解决方案"
        description="从网站技术基础、内容表达、结构化数据到转化路径，帮助企业把官网建设成可持续沉淀的获客资产。"
      />
      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map(([title, text]) => (
            <article key={title} className="surface rounded-lg p-7">
              <div className="flex items-start justify-between gap-5">
                <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
                <ArrowUpRight className="shrink-0 text-brand" size={22} />
              </div>
              <p className="mt-5 leading-8 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
