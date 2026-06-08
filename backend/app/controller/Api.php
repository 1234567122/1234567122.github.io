<?php

declare(strict_types=1);

namespace app\controller;

use app\service\ContentRepository;
use app\service\SiteProfile;

final class Api
{
    public function health(): array
    {
        return [
            'code' => 0,
            'message' => 'ok',
            'data' => [
                'status' => 'healthy',
                'php' => PHP_VERSION,
                'framework' => 'ThinkPHP 8 skeleton',
            ],
        ];
    }

    public function site(): array
    {
        return [
            'code' => 0,
            'message' => 'ok',
            'data' => SiteProfile::toArray(),
        ];
    }

    public function cases(): array
    {
        return [
            'code' => 0,
            'message' => 'ok',
            'data' => [
                'cases' => ContentRepository::cases(),
                'guarantees' => ContentRepository::guarantees(),
                'culture' => ContentRepository::culture(),
            ],
        ];
    }

    public function seoPages(): array
    {
        return [
            'code' => 0,
            'message' => 'ok',
            'data' => ContentRepository::seoPages(),
        ];
    }
}
