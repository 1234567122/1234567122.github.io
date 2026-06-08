import type { Metadata } from "next";
import { BadgeCheck, Flag, Gem, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { culture } from "@/lib/content";
import { getPageSeo, siteProfile } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("about");

const positioning = ["以SEO基础设施为底座", "以AI搜索理解为方向", "以企业咨询转化为结果"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="常州灵枢网络科技有限公司"
        description="灵枢科技聚焦GEO生成式引擎优化与AI驱动型数字营销服务，帮助企业在搜索引擎与生成式AI共同影响决策的环境中提升可见性。"
      />

      <section className="section-shell grid gap-8 py-16 md:grid-cols-[0.82fr_1.18fr] md:py-20">
        <div className="surface rounded-lg p-7">
          <p className="text-sm text-muted">创始人</p>
          <h2 className="mt-3 text-3xl font-semibold">{siteProfile.founder}</h2>
          <p className="mt-4 leading-8 text-muted">
            {siteProfile.founderIntro}，长期关注企业获客、搜索流量、内容营销和AI时代的信息分发变化。
          </p>
        </div>
        <div className="surface rounded-lg p-7">
          <h2 className="text-2xl font-semibold">公司定位</h2>
          <p className="mt-4 leading-8 text-muted">
            我们把官网视为企业面向搜索引擎、AI爬虫与真实客户的共同入口。第一阶段重点解决页面内容清晰度、
            结构化数据、SEO基础设施和AI可读性，让官网具备长期增长的基础。
          </p>
          <div className="mt-6 grid gap-3">
            {positioning.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-field p-3 text-sm font-medium">
                <BadgeCheck className="text-brand" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Culture</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">企业文化</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="surface rounded-lg p-7">
              <Target className="text-brand" size={28} />
              <h3 className="mt-5 text-xl font-semibold">使命</h3>
              <p className="mt-4 leading-8 text-muted">{culture.mission}</p>
            </article>
            <article className="surface rounded-lg p-7">
              <Flag className="text-brand" size={28} />
              <h3 className="mt-5 text-xl font-semibold">愿景</h3>
              <p className="mt-4 leading-8 text-muted">{culture.vision}</p>
            </article>
            <article className="surface rounded-lg p-7">
              <Gem className="text-brand" size={28} />
              <h3 className="mt-5 text-xl font-semibold">价值观</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {culture.values.map((item) => (
                  <span key={item} className="rounded-lg bg-field px-3 py-2 text-sm font-semibold text-ink">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
