import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  SearchCheck,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { serviceContextLinks } from "@/lib/navigation";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("services");

const services = [
  {
    icon: SearchCheck,
    title: "GEO生成式引擎优化",
    text: "梳理品牌、服务、场景和问答内容，让AI摘要、AI搜索和生成式引擎更容易引用企业信息。",
    points: ["AI问答语义覆盖", "品牌实体信息强化", "适合引用的内容结构"],
    outcome: "提升AI答案中的品牌出现率"
  },
  {
    icon: BrainCircuit,
    title: "AI内容策略",
    text: "围绕用户问题、行业词、品牌词和转化路径设计内容主题，减少无效堆词。",
    points: ["关键词主题地图", "问题型内容规划", "服务卖点重写"],
    outcome: "让内容从展示型变成获客型"
  },
  {
    icon: FileSearch,
    title: "企业官网SEO",
    text: "优化页面标题、描述、内部链接、结构化数据、语义层级和核心页面内容。",
    points: ["页面元信息", "站点地图", "技术SEO检查"],
    outcome: "提升搜索抓取和索引质量"
  },
  {
    icon: BarChart3,
    title: "搜索可见性提升",
    text: "持续观察收录、排名、品牌搜索结果和AI答案呈现，形成迭代建议。",
    points: ["收录状态观察", "核心词表现", "内容迭代建议"],
    outcome: "把优化动作变成长期增长闭环"
  }
];

const deliverables = ["SEO页面结构", "JSON-LD结构化数据", "llms.txt", "内容主题地图", "官网核心文案", "技术优化清单"];

const workflow = [
  ["01", "搜索诊断", "分析官网结构、索引状态、品牌词结果和AI搜索可见性。"],
  ["02", "内容重构", "围绕核心业务、客户痛点和AI问答场景重写页面表达。"],
  ["03", "技术部署", "落地SSR、结构化数据、sitemap、robots、llms.txt和内链。"],
  ["04", "数据复盘", "按周输出数据变化和下一轮优化建议。"]
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="GEO与AI数字营销服务"
        description="灵枢科技围绕企业官网SEO、AI搜索优化和生成式引擎优化，帮助企业建立更适合搜索引擎与AI爬虫理解的内容系统。"
      />

      <section className="section-shell py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-stretch">
          <div className="surface motion-rise rounded-lg p-7 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Service System</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              不是简单做页面，而是让官网进入搜索和AI推荐链路。
            </h2>
            <p className="mt-5 leading-8 text-muted">
              服务页会承接用户从“了解服务”到“查看案例”再到“联系咨询”的路径。我们把GEO、AI内容、技术SEO和数据复盘拆成可执行模块，让每一页都承担清晰的SEO任务。
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["AI可理解", "搜索可索引", "内容可引用", "咨询可转化"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-field p-3 text-sm font-semibold">
                  <CheckCircle2 className="text-brand" size={17} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="surface lift-card motion-rise rounded-lg p-6"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="text-brand" size={30} />
                    <span className="rounded-lg bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">SEO</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.text}</p>
                  <p className="mt-4 rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white">{service.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="section-shell grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Deliverables</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">第一版SEO优化交付更注重基础打牢。</h2>
            <p className="mt-4 leading-8 text-muted">
              先让官网具备可抓取、可理解、可索引的基础，再进入询盘、后台和内容规模化阶段。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item} className="muted-panel lift-card rounded-lg p-4 font-medium">
                <ShieldCheck className="mb-3 text-brand" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Workflow</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">服务流程</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {workflow.map(([number, title, text], index) => (
            <article key={title} className="surface lift-card motion-rise rounded-lg p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <span className="text-sm font-semibold text-brand">{number}</span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <div className="rounded-lg bg-ink p-7 text-white md:p-9">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <Workflow size={16} />
                内链推荐路径
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">服务页下一步应该去哪里？</h2>
            </div>
            <Link href="/contact" className="button-motion inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-ink hover:bg-accent">
              获取诊断建议
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {serviceContextLinks.map((item) => (
              <Link key={item.href} href={item.href} className="lift-card rounded-lg border border-white/12 bg-white/7 p-5">
                <span className="font-semibold text-white">{item.label}</span>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
