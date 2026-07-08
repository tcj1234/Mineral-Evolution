# 部署说明

本仓库已经包含 GitHub Pages 自动部署工作流。

## 启用 GitHub Pages

1. 打开仓库：`tcj1234/Mineral-Evolution`。
2. 进入 `Settings`。
3. 点击左侧 `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 回到 `Actions` 页面，等待 `Deploy static site to GitHub Pages` 运行完成。
6. 部署完成后访问：

```text
https://tcj1234.github.io/Mineral-Evolution/
```

## iPhone 安装

1. 用 Safari 打开上面的 HTTPS 地址。
2. 点击分享按钮。
3. 点击“添加到主屏幕”。
4. 打开桌面图标即可像 App 一样使用。

## 文件说明

- `index.html`：主网页。
- `manifest.json`：PWA 配置。
- `service-worker.js`：离线缓存。
- `icons/icon.svg`：网页和 PWA 图标。
- `.github/workflows/pages.yml`：GitHub Pages 自动部署工作流。
- `.nojekyll`：避免 GitHub Pages 用 Jekyll 处理静态文件。
