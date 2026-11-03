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
<section id="about"><h2><span aria-hidden="true">👨‍🎓</span> About Me</h2>
<p>I am a Ph.D. student in Computer Science at <span class="yx-inline-institution"><span class="yx-institution-mark"><img src="/images/logos/hit-emblem.svg" alt=""></span><strong>Harbin Institute of Technology, Shenzhen</strong></span>, jointly trained at <span class="yx-inline-institution"><span class="yx-institution-mark"><img src="/images/logos/slai-symbol.png" alt=""></span><strong>SLAI (深圳河套学院)</strong></span>. My advisors are <strong>Prof. Yongbing Zhang (张永兵)</strong> at HIT Shenzhen and <a href="https://www.slai.edu.cn/en/teacher/151"><strong>Prof. Zhiguo Zhang (张治国)</strong></a> at SLAI.</p>
<p>My research interests lie in <strong class="yx-red">AI for Science</strong>, particularly <strong>foundation models, world models, and multimodal learning</strong>. I am interested in models that learn transferable representations and predict how complex systems behave, including under changing conditions and interventions. I currently explore these questions in biology and biomedicine.</p>
<p>My current work includes whole-slide image encoding and spatial molecular modeling. Previously, I worked on multimodal medical image analysis and interned at <span class="yx-inline-institution"><span class="yx-institution-mark"><img src="/images/logos/united-imaging-symbol.png" alt=""></span><strong>United Imaging Healthcare</strong></span> on medical report generation.</p>
<p class="yx-focus"><span aria-hidden="true">📌</span> <strong class="yx-red">Current focus:</strong> <strong>AI for Science · Foundation Models · World Models</strong></p>
<p class="yx-profile-links"><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a><a href="{{ '/cv/' | relative_url }}">Web CV ↗</a><a href="mailto:{{ site.author.email }}">Email ↗</a></p>
<div class="yx-topics">
  <div><h3>🧠 Foundation Models</h3><p>Transferable representations · Generalization</p></div>
  <div><h3>🌐 World Models</h3><p>System dynamics · Perturbation responses</p></div>
  <div><h3>🔗 Multimodal Learning</h3><p>Images · Molecular measurements · Scientific data</p></div>
</div>
</section>
<section id="news"><h2><span aria-hidden="true">🔥</span> News</h2>
<ul class="yx-news">{% for item in site.data.profile.news %}<li><time>{{ item.date }}</time><span{% if item.highlight %} class="yx-news-highlight"{% endif %}><span aria-hidden="true">{{ item.icon }}</span> {{ item.text }}</span></li>{% endfor %}</ul>
</section>
<section id="publications"><div class="yx-heading-row"><h2><span aria-hidden="true">📚</span> Selected Publications</h2><a href="{{ site.author.googlescholar }}">Full list on Scholar ↗</a></div>
{% include profile-publications.html selected=true %}
</section>
<section id="research"><h2><span aria-hidden="true">🔬</span> Research &amp; Projects</h2>
{% include profile-projects.html %}
</section>
<section id="experience"><h2><span aria-hidden="true">💼</span> Experience</h2>
<div class="yx-timeline">
{% for item in site.data.profile.experience %}
  <div class="yx-timeline-item"><div class="yx-date">{{ item.date }}</div><div>{% include profile-institution-title.html %}<p class="yx-subtitle">{{ item.subtitle }}</p>{% if item.details.size > 0 %}<ul>{% for detail in item.details %}<li>{{ detail }}</li>{% endfor %}</ul>{% endif %}</div></div>
{% endfor %}
</div>
</section>
<section id="education"><h2><span aria-hidden="true">🎓</span> Education</h2>
<div class="yx-timeline">
{% for item in site.data.profile.education %}
  <div class="yx-timeline-item"><div class="yx-date">{{ item.date }}</div><div>{% include profile-institution-title.html %}<p class="yx-subtitle">{{ item.subtitle }}</p>{% if item.details.size > 0 %}<ul>{% for detail in item.details %}<li>{{ detail }}</li>{% endfor %}</ul>{% endif %}</div></div>
{% endfor %}
</div>
</section>
{% include profile-visitors.html %}
<section id="contact" class="yx-contact"><h2><span aria-hidden="true">✉️</span> Contact</h2><p>I welcome conversations about AI for Science, research collaborations, and visiting opportunities.</p><p><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a> · <a href="{{ '/cv/' | relative_url }}">Web CV</a> · <a href="https://github.com/{{ site.author.github }}">GitHub</a></p></section>
</div>
