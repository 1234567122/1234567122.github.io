import { describe, expect, it } from "vitest";
import { benchmarkCases, culture, serviceGuarantees } from "../src/lib/content";

describe("marketing content", () => {
  it("contains benchmark GEO cases", () => {
    expect(benchmarkCases).toHaveLength(3);
    expect(benchmarkCases[0].client).toBe("常州裕达钢结构工程有限公司");
    expect(benchmarkCases[0].results.join(" ")).toContain("AI 首推率达 93%");
    expect(benchmarkCases[1].results.join(" ")).toContain("订单金额累计超 800 万元");
    expect(benchmarkCases[2].results.join(" ")).toContain("本地有效咨询量增长 165%");
  });

  it("contains service guarantees and culture", () => {
    expect(serviceGuarantees).toHaveLength(5);
    expect(serviceGuarantees.map((item) => item.title)).toContain("效果对赌保障");
    expect(culture.mission).toContain("AI 技术赋能传统企业");
    expect(culture.values).toContain("客户至上");
  });
});
