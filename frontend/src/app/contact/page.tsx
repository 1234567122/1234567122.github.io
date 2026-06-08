import type { Metadata } from "next";
import { Globe2, MapPin, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getPageSeo, siteProfile } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("contact");

const cards = [
  { icon: Globe2, label: "官网", value: siteProfile.url },
  { icon: MapPin, label: "公司", value: siteProfile.companyName },
  { icon: ShieldCheck, label: "备案", value: siteProfile.icp }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="获取GEO优化与AI营销建议"
        description="第一版暂不开放询盘表单提交。你可以先通过官网信息与服务方向了解灵枢科技，后续版本将接入ThinkPHP询盘接口。"
      />
      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="surface rounded-lg p-6">
                <Icon className="text-brand" size={26} />
                <p className="mt-5 text-sm text-muted">{card.label}</p>
                <p className="mt-3 break-words text-lg font-semibold">{card.value}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 rounded-lg bg-ink p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Next Step</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">下一阶段可接入询盘表单、后台管理和MySQL持久化。</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/65">
            当前版本先确保官网展示、SEO抓取和AI爬虫友好。等内容方向确认后，再补充询盘流转和后台运营能力会更稳。
          </p>
        </div>
      </section>
    </>
  );
}
