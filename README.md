# 常州灵枢网络科技有限公司官网

第一版为 SEO 优先的中文企业官网，技术栈遵循 `AGENTS.md`：

- 前端：Next.js SSR + React + Tailwind CSS
- 后端：ThinkPHP 8 API 骨架 + PHP 8.2 系列
- 部署：Nginx + Docker Compose
- SEO：页面元信息、JSON-LD、`robots.txt`、`sitemap.xml`、`llms.txt`

## 项目结构

```text
frontend/    Next.js 官网
backend/     ThinkPHP API 骨架
nginx/       Nginx 转发配置
```

## 前端运行

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

访问 `http://localhost:3000`。

## 后端运行

```powershell
cd backend
composer install
php -S 127.0.0.1:8000 -t public
```

接口：

- `GET http://127.0.0.1:8000/api/health`
- `GET http://127.0.0.1:8000/api/site`

本机 PHP 为 8.2.9 时可直接按 8.2 兼容开发。如果 Composer 提示缺少 zip，请启用 `php.ini` 中的 `extension=zip`，或安装 `unzip/7z`。

## Docker 运行

```powershell
docker compose up --build
```

Nginx 默认监听 `http://localhost`，`/api/*` 转发到后端，其余路径转发到 Next.js。

## 第一版范围

- 已做：首页、服务、解决方案、方法论、关于、联系、隐私政策。
- 已做：`robots.txt`、`sitemap.xml`、`llms.txt`、JSON-LD。
- 暂不做：询盘提交、后台管理、MySQL 持久化、多语言切换。
