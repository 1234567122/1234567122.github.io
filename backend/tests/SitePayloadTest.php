<?php

declare(strict_types=1);

use app\service\SiteProfile;
use PHPUnit\Framework\TestCase;

final class SitePayloadTest extends TestCase
{
    public function testSitePayloadContainsSeoIdentity(): void
    {
        $payload = SiteProfile::toArray();

        $this->assertSame('常州灵枢网络科技有限公司', $payload['company_name']);
        $this->assertSame('灵枢科技', $payload['brand_name']);
        $this->assertSame('苏ICP备2026022216号', $payload['icp']);
        $this->assertSame('https://www.ls56789.com', $payload['website']);
        $this->assertContains('GEO 生成式引擎优化', $payload['keywords']);
    }
}
