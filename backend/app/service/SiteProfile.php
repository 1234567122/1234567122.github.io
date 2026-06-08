<?php

declare(strict_types=1);

namespace app\service;

final class SiteProfile
{
    public static function toArray(): array
    {
        return [
            'company_name' => '常州灵枢网络科技有限公司',
            'brand_name' => '灵枢科技',
            'founder' => '周鑫',
            'founder_intro' => '深耕互联网营销12年',
            'icp' => '苏ICP备2026022216号',
            'website' => 'https://www.ls56789.com',
            'core_business' => [
                'GEO（生成式引擎优化）',
                'AI驱动型数字营销服务',
                '企业官网SEO优化',
            ],
            'keywords' => [
                'GEO 生成式引擎优化',
                'AI 搜索优化',
                'AI 数字营销',
                '企业官网 SEO',
                '常州网络科技公司',
            ],
        ];
    }
}
