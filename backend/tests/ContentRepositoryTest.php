<?php

declare(strict_types=1);

use app\service\ContentRepository;
use PHPUnit\Framework\TestCase;

final class ContentRepositoryTest extends TestCase
{
    public function testCasesGuaranteesAndCultureAreAvailable(): void
    {
        $cases = ContentRepository::cases();
        $guarantees = ContentRepository::guarantees();
        $culture = ContentRepository::culture();

        $this->assertCount(3, $cases);
        $this->assertSame('常州裕达钢结构工程有限公司', $cases[0]['client']);
        $this->assertStringContainsString('AI 首推率达 93%', implode(' ', $cases[0]['results']));
        $this->assertCount(5, $guarantees);
        $this->assertSame('效果对赌保障', $guarantees[0]['title']);
        $this->assertStringContainsString('AI 技术赋能传统企业', $culture['mission']);
    }
}
