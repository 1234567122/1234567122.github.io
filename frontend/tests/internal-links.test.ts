import { describe, expect, it } from "vitest";
import { footerLinks, primaryNavLinks, serviceContextLinks } from "../src/lib/navigation";

describe("internal link architecture", () => {
  it("covers the core SEO pages in primary navigation", () => {
    const hrefs = primaryNavLinks.map((item) => item.href);

    expect(hrefs).toEqual(expect.arrayContaining(["/services", "/solutions", "/cases", "/about", "/contact"]));
  });

  it("keeps service page connected to high-intent supporting pages", () => {
    const hrefs = serviceContextLinks.map((item) => item.href);

    expect(hrefs).toEqual(expect.arrayContaining(["/cases", "/solutions", "/contact"]));
  });

  it("keeps footer links crawlable", () => {
    expect(footerLinks.length).toBeGreaterThanOrEqual(4);
    expect(footerLinks.map((item) => item.href)).toContain("/privacy");
  });
});
