import type { Metadata } from "next";

export const siteProfile = {
  companyName: "常州灵枢网络科技有限公司",
  brandName: "灵枢科技",
  founder: "周鑫",
  founderIntro: "深耕互联网营销12年",
  icp: "苏ICP备2026022216号",
  url: "https://www.ls56789.com",
  domain: "www.ls56789.com",
  city: "常州",
  province: "江苏",
  slogan: "让企业内容被搜索引擎与生成式 AI 更准确地理解、推荐和转化。",
  keywords: [
    "GEO 生成式引擎优化",
    "AI 搜索优化",
    "AI 数字营销",
    "企业官网 SEO",
    "常州网络科技公司",
    "生成式引擎优化服务"
  ]
};

const pages = {
  home: {
    path: "/",
    title: "灵枢科技 | GEO生成式引擎优化与AI数字营销服务",
    description:
      "常州灵枢网络科技有限公司专注GEO生成式引擎优化、AI搜索优化、企业官网SEO和AI驱动型数字营销服务。",
    keywords: siteProfile.keywords
  },
  services: {
    path: "/services",
    title: "GEO与AI数字营销服务 | 灵枢科技",
    description:
      "灵枢科技提供GEO生成式引擎优化、AI内容策略、企业官网SEO、搜索可见性提升与数字营销增长服务。",
    keywords: ["GEO 生成式引擎优化", "AI 搜索优化", "AI 内容策略", "企业官网 SEO"]
  },
  solutions: {
    path: "/solutions",
    title: "AI搜索优化解决方案 | 企业官网SEO与B2B获客",
    description:
      "面向B2B企业、品牌官网和服务型企业，构建可被搜索引擎与AI问答系统识别的内容资产。",
    keywords: ["AI 搜索优化", "B2B 获客", "品牌搜索占位", "内容资产建设"]
  },
  cases: {
    path: "/cases",
    title: "标杆案例 | GEO优化成果与AI精准获客案例",
    description:
      "查看灵枢科技服务常州企业的GEO优化标杆案例，涵盖AI首推率、精准询盘增长、获客成本降低和AI渠道订单成果。",
    keywords: [
      "GEO 标杆案例",
      "AI 精准获客案例",
      "常州裕达钢结构工程有限公司",
      "常州集装箱房厂家",
      "AI 搜索优化成果",
      "SEO 案例"
    ]
  },
  about: {
    path: "/about",
    title: "关于灵枢科技 | 常州AI数字营销公司",
    description:
      "灵枢科技由深耕互联网营销12年的周鑫创立，服务企业在AI搜索时代提升官网内容可见性。",
    keywords: ["常州网络科技公司", "灵枢科技", "AI 数字营销", "周鑫"]
  },
  contact: {
    path: "/contact",
    title: "联系灵枢科技 | GEO优化与AI营销咨询",
    description:
      "联系灵枢科技，获取企业官网SEO、GEO生成式引擎优化与AI数字营销服务建议。",
    keywords: ["联系灵枢科技", "GEO 咨询", "AI 营销咨询", "企业官网 SEO"]
  },
  privacy: {
    path: "/privacy",
    title: "隐私政策 | 灵枢科技",
    description: "灵枢科技官网隐私政策，说明访问官网时的信息处理与数据保护原则。",
    keywords: ["隐私政策", "灵枢科技"]
  }
} as const;

export type PageKey = keyof typeof pages;

export function absoluteUrl(path: string) {
  return `${siteProfile.url}${path === "/" ? "" : path}`;
}

export function getPageSeo(page: PageKey): Metadata {
  const item = pages[page];

  return {
    title: item.title,
    description: item.description,
    keywords: [...item.keywords],
    alternates: {
      canonical: absoluteUrl(item.path),
      languages: {
        "zh-CN": absoluteUrl(item.path),
        "x-default": absoluteUrl(item.path)
      }
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: absoluteUrl(item.path),
      siteName: siteProfile.brandName,
      locale: "zh_CN",
      type: "website"
    }
  };
}

export function getAllPages() {
  return Object.values(pages);
}

export function buildJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteProfile.url}/#organization`,
        name: siteProfile.companyName,
        alternateName: siteProfile.brandName,
        url: siteProfile.url,
        founder: {
          "@type": "Person",
          name: siteProfile.founder,
          description: siteProfile.founderIntro
        },
        areaServed: ["中国", "江苏", "常州"],
        description: siteProfile.slogan,
        keywords: siteProfile.keywords.join(",")
      },
      {
        "@type": "WebSite",
        "@id": `${siteProfile.url}/#website`,
        url: siteProfile.url,
        name: siteProfile.brandName,
        publisher: {
          "@id": `${siteProfile.url}/#organization`
        },
        inLanguage: "zh-CN"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteProfile.url}/#service`,
        name: "GEO生成式引擎优化与AI数字营销服务",
        provider: {
          "@id": `${siteProfile.url}/#organization`
        },
        serviceType: ["GEO生成式引擎优化", "AI搜索优化", "企业官网SEO", "AI数字营销"],
        areaServed: {
          "@type": "Country",
          name: "中国"
        },
        url: siteProfile.url
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首页",
            item: siteProfile.url
          }
        ]
      }
    ]
  };
}
