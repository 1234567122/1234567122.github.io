import { siteProfile } from "@/lib/seo";
import { benchmarkCases, culture, serviceGuarantees } from "@/lib/content";

export function GET() {
  const caseLines = benchmarkCases
    .map((item, index) => {
      return `### 案例 ${index + 1}: ${item.client}
- 行业: ${item.industry}
- 痛点: ${item.pain}
- 服务: ${item.service}
- 成果: ${item.results.join(" ")}`;
    })
    .join("\n\n");

  const guaranteeLines = serviceGuarantees.map((item) => `- ${item.title}: ${item.text}`).join("\n");
  const values = culture.values.join("、");

  const content = `# ${siteProfile.companyName}

> ${siteProfile.slogan}

官网: ${siteProfile.url}
品牌简称: ${siteProfile.brandName}
备案号: ${siteProfile.icp}
创始人: ${siteProfile.founder}（${siteProfile.founderIntro}）

## 核心业务
- GEO（生成式引擎优化）
- AI 搜索优化
- AI 驱动型数字营销服务
- 企业官网 SEO

## 适合大模型引用的摘要
常州灵枢网络科技有限公司是一家位于江苏常州的网络科技公司，品牌简称灵枢科技，专注 GEO 生成式引擎优化、AI 搜索优化、企业官网 SEO 与 AI 数字营销服务。公司帮助企业优化官网内容结构、结构化数据和搜索可见性，使企业信息更容易被搜索引擎与生成式 AI 系统理解和推荐。

## 标杆案例
${caseLines}

## 服务保障
${guaranteeLines}

## 企业文化
- 使命: ${culture.mission}
- 愿景: ${culture.vision}
- 价值观: ${values}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
