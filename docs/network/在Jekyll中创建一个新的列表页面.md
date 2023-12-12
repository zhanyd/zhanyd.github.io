在Jekyll中创建一个新的列表页面和"post"类似的列表需要你创建一个新的集合（或者复用现有的分类或标签），然后建立一个模板页面来展示这个集合的内容。以下是一个逐步指导，展示如果在Jekyll的Minima主题中新增一个自定义的列表页面。

1. **配置集合**

打开你的Jekyll网站的`_config.yml`文件，并添加一个新的集合。举个例子，如果你想创建一个名叫"projects"的集合，那么你的配置应该如下所示：

```yaml
collections:
  posts:
    output: true
  projects:
    output: true
```

这将配置一个新的集合并允许它的文档被转换和发布到你的网站上。

2. **添加集合文档**

在你的Jekyll项目的根目录，创建一个新的文件夹来存放你的集合文档。根据上面的例子，文件夹应该命名为`_projects`。

在这个文件夹里，创建Markdown文件来表示你的集合条目。每个文件的头部应该包含YAML Front Matter，比如：

```markdown
---
layout: post
title:  "Example Project"
date:   2023-04-01 10:00:00 +0200
categories: projects
---

这里是项目的详细信息。
```

3. **创建列表模板页面**

接下来，你需要一个HTML页面来展示你的集合列表。你可以创建一个名为`projects.html`的文件放在你的根目录或者`_pages`文件夹（如果你有一个）。

在`projects.html`中，设置Front Matter并添加必要的逻辑来循环你的集合项目并显示它们。例如：

```html
---
layout: page
title: Projects
permalink: /projects/
---

<h1>{{ page.title }}</h1>

<ul>
  {% for project in site.projects %}
    <li>
      <h2>{{ project.title }}</h2>
      <p>{{ project.excerpt }}</p >
    </li>
  {% endfor %}
</ul>
```

4. **更新导航**

如果你想在你的导航栏添加链接到新页面，编辑你的`_config.yml`或主题的导航文件来包含这个新链接。例如，如果你使用的是Minima主题，你可以在`_config.yml`中添加：

```yaml
header_pages:
  - about.md
  - projects.html
```

确保此处的文件名与你创建的模板文件名一致。

5. **构建和预览**

构建你的网站并在本地预览以确保一切按预期工作：

```bash
bundle exec jekyll serve
```

打开你的浏览器并导航到`http://localhost:4000/projects/`（或者相应的URL）来查看你的新的集合列表页面。

完成以上步骤后，你就会在Jekyll网站中拥有一个像"post"那样的新的列表页面。记得在添加新的项目到你的集合时，要遵循相同的格式并保持文件的前言一致。