import { describe, expect, it } from "vitest";
import { buildJsonLdGraph, getPageSeo, siteProfile } from "../src/lib/seo";

describe("SEO profile", () => {
  it("keeps the core company identity and ICP record visible", () => {
    expect(siteProfile.companyName).toBe("常州灵枢网络科技有限公司");
    expect(siteProfile.brandName).toBe("灵枢科技");
    expect(siteProfile.icp).toBe("苏ICP备2026022216号");
    expect(siteProfile.url).toBe("https://www.ls56789.com");
  });

  it("builds page metadata with canonical URLs and GEO keywords", () => {
    const seo = getPageSeo("services");

    expect(seo.title).toContain("GEO");
    expect(seo.description).toContain("AI");
    expect(seo.keywords).toContain("GEO 生成式引擎优化");
    expect(seo.alternates?.canonical).toBe("https://www.ls56789.com/services");
  });

  it("optimizes case metadata for benchmark case discovery", () => {
    const seo = getPageSeo("cases");

    expect(seo.title).toContain("标杆案例");
    expect(seo.description).toContain("AI首推率");
    expect(seo.keywords).toContain("常州裕达钢结构工程有限公司");
    expect(seo.alternates?.canonical).toBe("https://www.ls56789.com/cases");
  });

  it("exports homepage JSON-LD for search engines and AI crawlers", () => {
    const graph = buildJsonLdGraph();
    const types = graph["@graph"].map((item) => item["@type"]);

    expect(types).toEqual(
      expect.arrayContaining([
        "Organization",
        "WebSite",
        "ProfessionalService",
        "BreadcrumbList"
      ])
    );
  });
});
