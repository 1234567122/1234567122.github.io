import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="隐私政策"
        description="灵枢科技重视访问者信息安全。第一版官网不收集询盘数据，仅保留基础访问与SEO展示能力。"
      />
      <section className="section-shell py-16 md:py-20">
        <div className="surface max-w-3xl rounded-lg p-7 leading-8 text-muted">
          <p>
            本官网第一版不提供在线询盘提交，不主动收集姓名、电话、邮箱等个人信息。后续如接入联系表单，
            将明确展示收集目的、使用范围与数据保护方式。
          </p>
          <p className="mt-5">
            网站可能使用服务器日志用于安全排查、访问质量分析和SEO优化，不会用于未经授权的第三方营销。
          </p>
        </div>
      </section>
    </>
  );
}
