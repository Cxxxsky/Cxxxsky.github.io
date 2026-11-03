---
layout: single
permalink: /
title: ""
excerpt: "Yuxuan Yang — AI for Science, foundation models, world models, and multimodal learning."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<link rel="stylesheet" href="{{ '/assets/css/profile.css' | relative_url }}">
<div class="yx-profile">
<section id="about"><h2>About Me</h2>
<p>I am a Ph.D. student in Computer Science at <strong>Harbin Institute of Technology, Shenzhen</strong>, jointly trained at <strong>SLAI (深圳河套学院)</strong>. I am advised by <strong>Prof. Yongbing Zhang</strong>.</p>
<p>My research interests lie in <strong>AI for Science</strong>, particularly <strong>foundation models, world models, and multimodal learning</strong>. I am interested in models that learn transferable representations and predict how complex systems behave, including under changing conditions and interventions. I currently explore these questions in biology and biomedicine.</p>
<p>My current work includes whole-slide image encoding and spatial molecular modeling. Previously, I worked on multimodal medical image analysis and interned at <strong>United Imaging Healthcare</strong> on medical report generation.</p>
<p class="yx-profile-links"><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a><a href="{{ '/cv/' | relative_url }}">Web CV ↗</a><a href="mailto:{{ site.author.email }}">Email ↗</a></p>
<div class="yx-topics">
  <div><h3>Foundation Models</h3><p>Transferable representations · Generalization</p></div>
  <div><h3>World Models</h3><p>System dynamics · Perturbation responses</p></div>
  <div><h3>Multimodal Learning</h3><p>Images · Molecular measurements · Scientific data</p></div>
</div>
</section>
<section id="news"><h2>News</h2>
<ul class="yx-news">{% for item in site.data.profile.news %}<li><time>{{ item.date }}</time><span>{{ item.text }}</span></li>{% endfor %}</ul>
</section>
<section id="publications"><div class="yx-heading-row"><h2>Selected Publications</h2><a href="{{ site.author.googlescholar }}">Full list on Scholar ↗</a></div>
{% include profile-publications.html selected=true %}
</section>
<section id="research"><h2>Research &amp; Projects</h2>
<div class="yx-projects">
{% for project in site.data.profile.projects %}
  <article class="yx-project"><div class="yx-project-top"><h3>{{ project.title }}</h3><span class="yx-status">{{ project.status }}</span></div><p class="yx-kicker">{{ project.kind }}</p><p>{{ project.text }}</p></article>
{% endfor %}
</div>
</section>
<section id="experience"><h2>Experience</h2>
<div class="yx-timeline">
{% for item in site.data.profile.experience %}
  <div class="yx-timeline-item"><div class="yx-date">{{ item.date }}</div><div><h3>{{ item.title }}</h3><p class="yx-subtitle">{{ item.subtitle }}</p>{% if item.details.size > 0 %}<ul>{% for detail in item.details %}<li>{{ detail }}</li>{% endfor %}</ul>{% endif %}</div></div>
{% endfor %}
</div>
</section>
<section id="education"><h2>Education</h2>
<div class="yx-timeline">
{% for item in site.data.profile.education %}
  <div class="yx-timeline-item"><div class="yx-date">{{ item.date }}</div><div><h3>{{ item.title }}</h3><p class="yx-subtitle">{{ item.subtitle }}</p>{% if item.details.size > 0 %}<ul>{% for detail in item.details %}<li>{{ detail }}</li>{% endfor %}</ul>{% endif %}</div></div>
{% endfor %}
</div>
</section>
<section id="contact" class="yx-contact"><h2>Contact</h2><p>I welcome conversations about AI for Science, research collaborations, and visiting opportunities.</p><p><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a> · <a href="{{ '/cv/' | relative_url }}">Web CV</a> · <a href="https://github.com/{{ site.author.github }}">GitHub</a></p></section>
</div>
