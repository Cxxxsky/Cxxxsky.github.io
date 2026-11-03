

## 上传方法

解压后把 `_config.yml`、`_data`、`_includes`、`_pages`、`assets` 下的文件按相同目录上传到仓库根目录，覆盖同名文件。**不要直接把 ZIP 文件上传到仓库。**

GitHub 网页可使用 Add file → Upload files。若浏览器不支持保留拖入文件夹的路径，请进入对应目录逐个上传；各文件的相对位置须与包内一致。

## 结构

- 首页：About / News / Selected Publications / Research & Projects / Experience / Education / Contact。
- CV：独立网页，包含教育、兴趣、经历、代表论文、项目、技能、奖项。不要求或提供 PDF 简历。
- Publications：只展示已核实的两篇一作论文，不再读取模板的示例论文。
- 顶部保留 CV，并提供各首页分区入口。

## 以后主要改这两个数据文件

- `_data/profile.yml`：新闻、项目、实习、教育、技能、奖项；首页与 CV 共用，避免重复修改。
- `_data/profile_publications.yml`：论文标题、作者、年份、DOI、简述、配图。

两篇论文通过 Crossref DOI 元数据与出版商页面核对。DMFR 文章按正式卷期记作 2026 年，在线发表日期为 2025-10-25。没有填引用次数、影响因子或未经核实的论文。

## 论文配图

现在使用清晰的文字封面，不伪造论文框架图。以后上传你自己的论文框架图，在对应论文记录的 `image` 字段填写 `/images/文件名.png` 即可自动替换封面。

## 已保留与未写入

- 头像：images/头像.jpg；Scholar：h7xvYWIAAAAJ。
- ISBI 工作：仅记为已投稿，不代表录用；Spatial Evidence：在研，不公开目标会议。
- 元石实习尚未开始，未写入。CSC 交换未确定，未写入。
- 主导师目前写张永兵；张治国老师的公开身份表述尚待你确认，未替你决定。
- 教育与联影实习日期按你提供的简历填写；如正式入学月份不同，可在 profile.yml 一处修正。
- 旧模板示例文件没有从你的远程仓库删除，但新的 Publications 与 CV 不再读取这些示例；后续可单独清理。

## 验证边界

已检查 YAML、Liquid 语法、页面路径、共享数据、链接锚点和桌面/手机预览。静态预览用于布局检查，不等于 GitHub Pages 已构建或部署成功。上传后仍以仓库 Actions / Pages 构建结果为准。
