# GitHub 发布说明

这个文件夹是灵枢科技官网项目的 GitHub 发布源码包。

## 已排除的本地产物

- `frontend/node_modules/`
- `frontend/.next/`
- `backend/vendor/`
- `*.log`
- `.phpunit.result.cache`
- `.git/`

## 上传 GitHub 前检查

```powershell
cd frontend
npm.cmd install
npm.cmd test
npm.cmd run build

cd ..\backend
composer install
vendor\bin\phpunit
```

## 本地运行

前端：

```powershell
cd frontend
npm.cmd run dev
```

后端：

```powershell
cd backend
php -S 127.0.0.1:8000 -t public
```

## GitHub 初始化示例

```powershell
git init
git add .
git commit -m "feat: initial lingshu website"
git branch -M main
git remote add origin <你的GitHub仓库地址>
git push -u origin main
```
