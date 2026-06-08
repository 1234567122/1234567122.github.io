# 灵枢科技官网 API

第一版后端保留 ThinkPHP 8 项目骨架，PHP 版本锁定为 `>=8.2 <8.3`，本机按 PHP 8.2.9 兼容。

## 已实现接口

- `GET /api/health`：健康检查。
- `GET /api/site`：返回公司名称、品牌简称、备案号、官网、核心业务和 SEO 关键词。

## 本地运行

```powershell
composer install
php -S 127.0.0.1:8000 -t public
```

如果 Composer 提示缺少 zip，请在 PHP 8.2.9 的 `php.ini` 中启用 `extension=zip`，或安装 `unzip/7z` 后重试。
