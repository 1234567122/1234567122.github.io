<?php

declare(strict_types=1);

use app\service\ContentRepository;
use app\service\SiteProfile;

$autoload = __DIR__ . '/../vendor/autoload.php';
if (is_file($autoload)) {
    require $autoload;
} else {
    require __DIR__ . '/../app/service/SiteProfile.php';
    require __DIR__ . '/../app/service/ContentRepository.php';
}

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

header('X-Powered-By: ThinkPHP API Skeleton');

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

if ($path === '/admin') {
    $site = SiteProfile::toArray();
    $cases = ContentRepository::cases();
    $guarantees = ContentRepository::guarantees();
    $culture = ContentRepository::culture();
    $seoPages = ContentRepository::seoPages();
    header('Content-Type: text/html; charset=utf-8');
    ?>
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>灵枢科技 SEO 管理概览</title>
    <style>
        :root {
            color: #15202b;
            background: #f6fafc;
            font-family: Arial, "Microsoft YaHei", "PingFang SC", sans-serif;
        }
        * { box-sizing: border-box; }
        body {
            margin: 0;
            min-height: 100vh;
            background:
                radial-gradient(circle at 16% 12%, rgba(15, 138, 157, .16), transparent 28rem),
                radial-gradient(circle at 86% 10%, rgba(228, 182, 74, .16), transparent 24rem),
                linear-gradient(180deg, #f7fbfd 0%, #ffffff 48%, #f6fafc 100%);
        }
        .shell { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        header { padding: 44px 0 28px; }
        .eyebrow {
            display: inline-flex;
            border: 1px solid #dbe7ee;
            background: #fff;
            color: #0f8a9d;
            border-radius: 8px;
            padding: 8px 12px;
            font-size: 13px;
            font-weight: 700;
        }
        h1 {
            margin: 18px 0 12px;
            font-size: clamp(32px, 5vw, 54px);
            line-height: 1.08;
            letter-spacing: 0;
        }
        h2 { margin: 0 0 16px; font-size: 24px; }
        h3 { margin: 0; font-size: 18px; }
        .subtitle {
            max-width: 760px;
            color: #5b6b7a;
            font-size: 17px;
            line-height: 1.8;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            padding-bottom: 34px;
        }
        .card {
            border: 1px solid #dbe7ee;
            background: rgba(255, 255, 255, .92);
            border-radius: 10px;
            padding: 22px;
            box-shadow: 0 18px 55px rgba(20, 42, 58, .09);
        }
        .wide { grid-column: span 2; }
        .full { grid-column: 1 / -1; }
        .label {
            color: #5b6b7a;
            font-size: 13px;
            margin-bottom: 10px;
        }
        .value { font-size: 22px; font-weight: 800; }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #0f8a9d;
            font-weight: 800;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: #0f8a9d;
            box-shadow: 0 0 0 6px rgba(15, 138, 157, .12);
        }
        .list {
            margin: 0;
            padding: 0;
            list-style: none;
            display: grid;
            gap: 10px;
        }
        .list li {
            border: 1px solid #dbe7ee;
            background: #f6fafc;
            border-radius: 8px;
            padding: 12px 14px;
            line-height: 1.65;
        }
        .case-grid, .guarantee-grid, .seo-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
        }
        .mini {
            border: 1px solid #dbe7ee;
            background: #f6fafc;
            border-radius: 8px;
            padding: 16px;
        }
        .tag {
            display: inline-flex;
            margin-bottom: 10px;
            border-radius: 8px;
            background: rgba(15, 138, 157, .1);
            color: #0f8a9d;
            padding: 6px 9px;
            font-size: 12px;
            font-weight: 800;
        }
        code { color: #0f8a9d; font-weight: 800; }
        footer {
            border-top: 1px solid #dbe7ee;
            padding: 18px 0 30px;
            color: #5b6b7a;
            font-size: 13px;
        }
        @media (max-width: 900px) {
            .grid, .case-grid, .guarantee-grid, .seo-grid { grid-template-columns: 1fr; }
            .wide { grid-column: auto; }
        }
    </style>
</head>
<body>
    <header class="shell">
        <span class="eyebrow">ThinkPHP SEO Console</span>
        <h1>灵枢科技 SEO 页面配置与案例管理</h1>
        <p class="subtitle">
            当前页面用于第一阶段后端管理概览：展示 SEO 页面配置、标杆案例、服务保障、企业文化和可用 API。
        </p>
    </header>

    <main class="shell grid">
        <section class="card">
            <div class="label">运行状态</div>
            <div class="status"><span class="dot"></span> Healthy</div>
        </section>
        <section class="card">
            <div class="label">PHP 版本</div>
            <div class="value"><?= e(PHP_VERSION) ?></div>
        </section>
        <section class="card">
            <div class="label">内容资产</div>
            <div class="value"><?= count($cases) ?> 个案例</div>
        </section>

        <section class="card full">
            <h2>SEO 页面配置</h2>
            <div class="seo-grid">
                <?php foreach ($seoPages as $page): ?>
                    <article class="mini">
                        <span class="tag"><?= e($page['status']) ?></span>
                        <h3><?= e($page['page']) ?> · <code><?= e($page['path']) ?></code></h3>
                        <p><?= e($page['focus']) ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="card full">
            <h2>标杆案例管理</h2>
            <div class="case-grid">
                <?php foreach ($cases as $case): ?>
                    <article class="mini">
                        <span class="tag"><?= e($case['industry']) ?></span>
                        <h3><?= e($case['client']) ?></h3>
                        <p><strong>客户痛点：</strong><?= e($case['pain']) ?></p>
                        <p><strong>服务内容：</strong><?= e($case['service']) ?></p>
                        <ul class="list">
                            <?php foreach ($case['metrics'] as $metric): ?>
                                <li><?= e($metric) ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="card full">
            <h2>服务保障</h2>
            <div class="guarantee-grid">
                <?php foreach ($guarantees as $item): ?>
                    <article class="mini">
                        <h3><?= e($item['title']) ?></h3>
                        <p><?= e($item['text']) ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="card wide">
            <h2>企业文化</h2>
            <ul class="list">
                <li><strong>使命：</strong><?= e($culture['mission']) ?></li>
                <li><strong>愿景：</strong><?= e($culture['vision']) ?></li>
                <li><strong>价值观：</strong><?= e(implode('、', $culture['values'])) ?></li>
            </ul>
        </section>

        <section class="card">
            <h2>可用 API</h2>
            <ul class="list">
                <li><code>GET /api/health</code></li>
                <li><code>GET /api/site</code></li>
                <li><code>GET /api/cases</code></li>
                <li><code>GET /api/seo-pages</code></li>
            </ul>
        </section>
    </main>

    <footer class="shell">
        © 2026 <?= e($site['brand_name']) ?> · <?= e($site['icp']) ?>
    </footer>
</body>
</html>
    <?php
    return;
}

header('Content-Type: application/json; charset=utf-8');

if ($path === '/api/health') {
    echo json_encode([
        'code' => 0,
        'message' => 'ok',
        'data' => [
            'status' => 'healthy',
            'php' => PHP_VERSION,
            'framework' => 'ThinkPHP 8 skeleton',
        ],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return;
}

if ($path === '/api/site') {
    echo json_encode([
        'code' => 0,
        'message' => 'ok',
        'data' => SiteProfile::toArray(),
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return;
}

if ($path === '/api/cases') {
    echo json_encode([
        'code' => 0,
        'message' => 'ok',
        'data' => [
            'cases' => ContentRepository::cases(),
            'guarantees' => ContentRepository::guarantees(),
            'culture' => ContentRepository::culture(),
        ],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return;
}

if ($path === '/api/seo-pages') {
    echo json_encode([
        'code' => 0,
        'message' => 'ok',
        'data' => ContentRepository::seoPages(),
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return;
}

http_response_code(404);
echo json_encode([
    'code' => 404,
    'message' => '接口不存在',
    'data' => null,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
