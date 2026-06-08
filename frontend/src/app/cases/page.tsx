import type { Metadata } from "next";
import { BadgeCheck, TrendingDown, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { benchmarkCases, serviceGuarantees } from "@/lib/content";
import { absoluteUrl, getPageSeo, siteProfile } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("cases");

const steps = [
  ["01", "诊断", "检查站点结构、页面源代码、标题描述、收录入口和核心关键词覆盖。"],
  ["02", "规划", "根据业务线和客户问题设计内容矩阵，让服务表达更符合搜索与AI理解。"],
  ["03", "部署", "落地SSR页面、JSON-LD结构化数据、sitemap、robots和llms.txt。"],
  ["04", "复盘", "跟踪搜索表现、内容命中和咨询路径，持续调整页面重点。"]
];

export default function CasesPage() {
  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl("/cases")}#case-list`,
    name: "GEO优化标杆案例",
    description: "灵枢科技GEO生成式引擎优化与AI精准获客案例列表。",
    itemListElement: benchmarkCases.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.client,
        about: item.industry,
        provider: {
          "@type": "Organization",
          name: siteProfile.companyName,
          url: siteProfile.url
        },
        description: `${item.pain} 服务内容：${item.service}。项目成果：${item.results.join("")}`
      }
    }))
  };

  return (
    <>
      <JsonLd data={caseJsonLd} />
      <PageHero
        eyebrow="Cases"
        title="标杆案例与GEO优化方法论"
        description="以常州本地企业为样本，展示GEO生成式引擎优化、营销型官网建设和AI渠道获客的可量化成果。"
      />

      <section className="section-shell py-16 md:py-20">
        <div className="motion-rise mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Benchmark</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            从传统流量到AI精准获客，案例结果必须能被数据说明。
          </h2>
        </div>
        <div className="grid gap-6">
          {benchmarkCases.map((item, index) => (
            <article
              key={item.client}
              className="surface lift-card motion-rise rounded-lg p-7 md:p-8"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="grid gap-7 md:grid-cols-[0.88fr_1.12fr]">
                <div>
                  <span className="rounded-lg bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
                    案例 {index + 1} · {item.industry}
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">{item.client}</h2>
                  <div className="mt-5 grid gap-4">
                    <div className="rounded-lg bg-field p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <TrendingDown size={17} className="text-brand" />
                        客户痛点
                      </p>
                      <p className="mt-2 leading-7 text-muted">{item.pain}</p>
                    </div>
                    <div className="rounded-lg bg-field p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <BadgeCheck size={17} className="text-brand" />
                        服务内容
                      </p>
                      <p className="mt-2 leading-7 text-muted">{item.service}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {item.metrics.map((metric, metricIndex) => (
                      <div
                        key={metric}
                        className="motion-rise rounded-lg bg-ink p-4 text-white"
                        style={{ animationDelay: `${180 + metricIndex * 90}ms` }}
                      >
                        <p className="text-lg font-semibold">{metric}</p>
                        <p className="mt-1 text-xs text-white/52">项目成果</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-line bg-white p-5">
                    <p className="flex items-center gap-2 font-semibold">
                      <TrendingUp size={18} className="text-brand" />
                      项目成果
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                      {item.results.map((result) => (
                        <li key={result} className="rounded-lg bg-field px-4 py-3 transition hover:bg-white hover:shadow-sm">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-shell">
          <div className="motion-rise mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Guarantee</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">服务保障</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-5">
            {serviceGuarantees.map((item, index) => (
              <article
                key={item.title}
                className="surface lift-card motion-rise rounded-lg p-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="text-sm font-semibold text-brand">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map(([number, title, text], index) => (
            <article
              key={title}
              className="surface lift-card motion-rise rounded-lg p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="text-sm font-semibold text-brand">{number}</span>
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
