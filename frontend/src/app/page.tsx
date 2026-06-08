import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Layers3,
  LineChart,
  SearchCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildJsonLdGraph, siteProfile } from "@/lib/seo";

const services: Array<{ icon: LucideIcon; title: string; text: string; label: string }> = [
  {
    icon: SearchCheck,
    title: "GEO生成式引擎优化",
    text: "面向AI问答、搜索摘要和内容引用场景，重构官网语义层级与页面表达。",
    label: "AI引用"
  },
  {
    icon: BrainCircuit,
    title: "AI搜索优化",
    text: "让品牌、服务、优势和案例更容易被搜索引擎与大模型识别、归纳和推荐。",
    label: "语义理解"
  },
  {
    icon: FileSearch,
    title: "企业官网SEO",
    text: "通过SSR、结构化数据、站内内容规划和技术SEO，提升官网自然搜索表现。",
    label: "技术基础"
  },
  {
    icon: BarChart3,
    title: "AI数字营销增长",
    text: "把关键词、内容资产、咨询路径和转化指标串联，形成长期可复用的获客系统。",
    label: "增长闭环"
  }
];

const metrics = [
  ["12年", "互联网营销经验"],
  ["4层", "官网SEO基础设施"],
  ["AI+", "搜索可见性策略"]
];

const heroSignals: Array<[string, number, LucideIcon]> = [
  ["搜索引擎抓取", 88, Target],
  ["AI问答理解", 82, BrainCircuit],
  ["品牌词占位", 76, Layers3],
  ["内容转化路径", 91, LineChart]
];

const process = [
  ["诊断", "检查收录、页面结构、标题描述、内容语义和AI可读性。"],
  ["规划", "围绕核心业务、客户问题和关键词，设计官网内容资产。"],
  ["部署", "落地SSR页面、JSON-LD、sitemap、robots和llms.txt。"],
  ["迭代", "持续观察搜索表现和咨询路径，优化页面重点。"]
];

const decisionPoints = ["搜索引擎能抓到", "AI系统能理解", "目标客户能信任", "咨询路径能转化"];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildJsonLdGraph()} />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(15,138,157,0.28),transparent_28rem),radial-gradient(circle_at_86%_10%,rgba(228,182,74,0.22),transparent_24rem)] motion-fade" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        <div className="section-shell relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 md:grid-cols-[1.04fr_0.96fr] md:py-24">
          <div>
            <div className="motion-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/78">
              <Sparkles size={16} className="text-accent motion-pulse-soft rounded-full" />
              GEO生成式引擎优化 · AI搜索优化 · 企业官网SEO
            </div>
            <h1 className="motion-rise-delay-1 mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              灵枢科技，让企业官网成为 AI 搜索时代的获客资产。
            </h1>
            <p className="motion-rise-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">
              {siteProfile.companyName}专注GEO生成式引擎优化、AI驱动型数字营销服务和企业官网SEO，
              帮助企业把产品、服务与品牌价值转化为可抓取、可理解、可推荐的内容资产。
            </p>
            <div className="motion-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="button-motion inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-ink shadow-soft hover:bg-white"
              >
                查看服务体系
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/cases"
                className="button-motion inline-flex items-center justify-center rounded-lg border border-white/18 bg-white/8 px-5 py-3 font-semibold text-white hover:bg-white hover:text-ink"
              >
                了解优化方法论
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map(([value, label], index) => (
                <div
                  key={label}
                  className="motion-rise rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur"
                  style={{ animationDelay: `${260 + index * 90}ms` }}
                >
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="mt-1 text-sm text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative motion-float">
            <div className="rounded-lg border border-white/14 bg-white/10 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <div className="rounded-lg bg-white p-5 text-ink">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div>
                    <p className="text-sm text-muted">AI Search Visibility</p>
                    <h2 className="mt-1 text-xl font-semibold">官网语义可见性看板</h2>
                  </div>
                  <span className="rounded-lg bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">Live SEO</span>
                </div>
                <div className="mt-5 grid gap-4">
                  {heroSignals.map(([item, score, Icon], index) => (
                    <div key={item} className="rounded-lg border border-line bg-field p-4 motion-rise" style={{ animationDelay: `${index * 90}ms` }}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 font-semibold">
                          <Icon className="text-brand" size={18} />
                          {item}
                        </span>
                        <span className="text-sm font-semibold text-brand">{score}%</span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-line">
                        <div className="progress-fill h-2 rounded-full bg-brand" style={{ width: `${score}%`, animationDelay: `${320 + index * 120}ms` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/72">
                {decisionPoints.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/6 p-3">
                    <CheckCircle2 size={16} className="shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell -mt-10 relative z-10">
        <div className="surface grid gap-5 rounded-lg p-5 md:grid-cols-4">
          {decisionPoints.map((item, index) => (
            <div key={item} className="lift-card rounded-lg bg-field p-5 transition">
              <span className="text-sm font-semibold text-brand">0{index + 1}</span>
              <p className="mt-3 font-semibold text-ink">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Services</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              围绕“被抓取、被理解、被推荐”设计的官网SEO服务。
            </h2>
          </div>
          <Link href="/services" className="button-motion inline-flex items-center gap-2 text-sm font-semibold text-brand">
            查看完整服务
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="surface lift-card rounded-lg p-6">
                <div className="flex items-start justify-between gap-5">
                  <Icon className="text-brand" size={30} />
                  <span className="rounded-lg bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{service.label}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-shell grid gap-10 md:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Method</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
              从技术SEO到AI语义表达，形成可持续增长闭环。
            </h2>
            <p className="mt-4 leading-8 text-muted">
              第一版官网先把可抓取、可理解、可索引的基础打牢，再进入询盘、后台和内容规模化阶段。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map(([title, text], index) => (
              <div key={title} className="surface lift-card rounded-lg p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_0.86fr] md:items-stretch">
          <div className="surface lift-card rounded-lg p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Why LingShu</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
              12年互联网营销经验，面向AI搜索的新官网实践。
            </h2>
            <p className="mt-4 leading-8 text-muted">
              创始人周鑫深耕互联网营销12年。灵枢科技把SEO、内容策略、结构化数据和AI搜索理解结合起来，
              让企业官网不只是展示窗口，更是长期获客资产。
            </p>
          </div>
          <div className="grid gap-3">
            {siteProfile.keywords.slice(0, 5).map((keyword) => (
              <div key={keyword} className="lift-card flex items-center gap-3 rounded-lg bg-white p-4 text-sm font-medium shadow-sm ring-1 ring-line">
                <BadgeCheck className="text-brand" size={18} />
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <div className="grid gap-6 rounded-lg bg-brand p-8 text-white shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/70">
              <Workflow size={16} />
              SEO基础已就绪，下一步可以接入询盘和后台
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">想让官网更适合搜索引擎和AI抓取？</h2>
          </div>
          <Link
            href="/contact"
            className="button-motion inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand hover:bg-ink hover:text-white"
          >
            联系灵枢科技
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
