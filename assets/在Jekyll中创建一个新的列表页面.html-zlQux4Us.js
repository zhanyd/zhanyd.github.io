import{_ as n,o as s,c as a,b as t}from"./app-aQkPSHhh.js";const e={},l=t(`<p>在Jekyll中创建一个新的列表页面和&quot;post&quot;类似的列表需要你创建一个新的集合（或者复用现有的分类或标签），然后建立一个模板页面来展示这个集合的内容。以下是一个逐步指导，展示如果在Jekyll的Minima主题中新增一个自定义的列表页面。</p><ol><li><strong>配置集合</strong></li></ol><p>打开你的Jekyll网站的<code>_config.yml</code>文件，并添加一个新的集合。举个例子，如果你想创建一个名叫&quot;projects&quot;的集合，那么你的配置应该如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">collections</span><span class="token punctuation">:</span>
  <span class="token key atrule">posts</span><span class="token punctuation">:</span>
    <span class="token key atrule">output</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">projects</span><span class="token punctuation">:</span>
    <span class="token key atrule">output</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将配置一个新的集合并允许它的文档被转换和发布到你的网站上。</p><ol start="2"><li><strong>添加集合文档</strong></li></ol><p>在你的Jekyll项目的根目录，创建一个新的文件夹来存放你的集合文档。根据上面的例子，文件夹应该命名为<code>_projects</code>。</p><p>在这个文件夹里，创建Markdown文件来表示你的集合条目。每个文件的头部应该包含YAML Front Matter，比如：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> post
<span class="token key atrule">title</span><span class="token punctuation">:</span>  <span class="token string">&quot;Example Project&quot;</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span>   2023<span class="token punctuation">-</span>04<span class="token punctuation">-</span>01 10<span class="token punctuation">:</span>00<span class="token punctuation">:</span>00 +0200
<span class="token key atrule">categories</span><span class="token punctuation">:</span> projects</span>
<span class="token punctuation">---</span></span>

这里是项目的详细信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>创建列表模板页面</strong></li></ol><p>接下来，你需要一个HTML页面来展示你的集合列表。你可以创建一个名为<code>projects.html</code>的文件放在你的根目录或者<code>_pages</code>文件夹（如果你有一个）。</p><p>在<code>projects.html</code>中，设置Front Matter并添加必要的逻辑来循环你的集合项目并显示它们。例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>---
layout: page
title: Projects
permalink: /projects/
---

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ page.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  {% for project in site.projects %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ project.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ project.excerpt }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  {% endfor %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>更新导航</strong></li></ol><p>如果你想在你的导航栏添加链接到新页面，编辑你的<code>_config.yml</code>或主题的导航文件来包含这个新链接。例如，如果你使用的是Minima主题，你可以在<code>_config.yml</code>中添加：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">header_pages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> about.md
  <span class="token punctuation">-</span> projects.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确保此处的文件名与你创建的模板文件名一致。</p><ol start="5"><li><strong>构建和预览</strong></li></ol><p>构建你的网站并在本地预览以确保一切按预期工作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bundle <span class="token builtin class-name">exec</span> jekyll serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开你的浏览器并导航到<code>http://localhost:4000/projects/</code>（或者相应的URL）来查看你的新的集合列表页面。</p><p>完成以上步骤后，你就会在Jekyll网站中拥有一个像&quot;post&quot;那样的新的列表页面。记得在添加新的项目到你的集合时，要遵循相同的格式并保持文件的前言一致。</p>`,22),p=[l];function o(c,i){return s(),a("div",null,p)}const d=n(e,[["render",o],["__file","在Jekyll中创建一个新的列表页面.html.vue"]]);export{d as default};
