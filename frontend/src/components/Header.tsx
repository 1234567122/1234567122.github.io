import Link from "next/link";
import { BarChart3, BrainCircuit, Compass, Mail, Menu, SearchCheck } from "lucide-react";
import { primaryNavLinks } from "@/lib/navigation";
import { siteProfile } from "@/lib/seo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="灵枢科技首页">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ink text-white shadow-soft">
            <BrainCircuit size={22} />
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-base leading-tight tracking-tight">{siteProfile.brandName}</strong>
            <span className="block truncate text-xs text-muted">GEO · AI Search · SEO</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {primaryNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="button-motion hidden items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-ink md:inline-flex"
        >
          <Mail size={16} />
          获取SEO建议
        </Link>
        <button className="grid size-10 place-items-center rounded-lg border border-line text-ink md:hidden" aria-label="菜单">
          <Menu size={20} />
        </button>
      </div>
      <nav className="border-t border-line/70 bg-field/90 md:hidden" aria-label="移动端主导航">
        <div className="section-shell flex gap-2 overflow-x-auto py-2 text-sm text-muted">
          {primaryNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg border border-line bg-white px-3 py-2 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="border-t border-line/70 bg-white/80 md:hidden">
        <div className="section-shell flex items-center justify-between gap-2 py-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <SearchCheck size={14} />
            SEO抓取友好
          </span>
          <span className="inline-flex items-center gap-1">
            <Compass size={14} />
            AI搜索可见
          </span>
          <span className="inline-flex items-center gap-1">
            <BarChart3 size={14} />
            增长导向
          </span>
        </div>
      </div>
    </header>
  );
}
