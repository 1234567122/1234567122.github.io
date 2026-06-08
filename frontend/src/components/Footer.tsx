import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";
import { footerLinks, serviceContextLinks } from "@/lib/navigation";
import { siteProfile } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.7fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-white text-ink">
              <BrainCircuit size={22} />
            </span>
            <div>
              <p className="font-semibold">{siteProfile.brandName}</p>
              <p className="text-xs text-white/50">{siteProfile.companyName}</p>
            </div>
          </div>
          <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight">
            让企业内容更容易被搜索引擎、AI问答和目标客户同时理解。
          </h2>
          <Link href="/contact" className="button-motion mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            咨询官网SEO优化
            <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white/80">快速访问</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white/80">推荐路径</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            {serviceContextLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/65">
            <span>{siteProfile.domain}</span>
            <span>{siteProfile.icp}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="section-shell text-xs text-white/45">
          © 2026 {siteProfile.brandName}. GEO生成式引擎优化与AI数字营销服务。
        </div>
      </div>
    </footer>
  );
}
