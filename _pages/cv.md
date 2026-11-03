---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<link rel="stylesheet" href="{{ '/assets/css/profile.css' | relative_url }}">
<div class="yx-profile yx-cv">
<p class="yx-lead"><strong>Yuxuan Yang · 杨宇轩</strong><br>Ph.D. student · AI for Science · HIT Shenzhen / SLAI</p>
<p class="yx-profile-links"><a href="mailto:{{ site.author.email }}">Email ↗</a><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a><a href="https://github.com/{{ site.author.github }}">GitHub ↗</a></p>
<nav class="yx-cv-nav" aria-label="CV sections"><a href="#cv-education">Education</a><a href="#cv-interests">Research interests</a><a href="#cv-experience">Experience</a><a href="#cv-publications">Publications</a><a href="#cv-manuscripts">Manuscripts</a><a href="#cv-projects">Projects</a><a href="#cv-skills">Skills</a><a href="#cv-honors">Honors</a></nav>
<section id="cv-education"><h2><span aria-hidden="true">🎓</span> Education</h2>
<div class="yx-timeline">
{% for item in site.data.profile.education %}
  <div class="yx-timeline-item"><div class="yx-date">{{ item.date }}</div><div>{% include profile-institution-title.html %}<p class="yx-subtitle">{{ item.subtitle }}</p>{% if item.details.size > 0 %}<ul>{% for detail in item.details %}<li>{{ detail }}</li>{% endfor %}</ul>{% endif %}</div></div>
{% endfor %}
</div>
</section>
<section id="cv-interests"><h2><span aria-hidden="true">🧠</span> Research Interests</h2><p>AI for Science; foundation models; world models; multimodal learning. Current research settings include biological and biomedical systems.</p></section>
<section id="cv-experience"><h2><span aria-hidden="true">💼</span> Research &amp; Industry Experience</h2>
<div class="yx-timeline">
{% for item in site.data.profile.experience %}
  <div class="yx-timeline-item"><div class="yx-date">{{ item.date }}</div><div>{% include profile-institution-title.html %}<p class="yx-subtitle">{{ item.subtitle }}</p>{% if item.details.size > 0 %}<ul>{% for detail in item.details %}<li>{{ detail }}</li>{% endfor %}</ul>{% endif %}</div></div>
{% endfor %}
</div>
</section>
<section id="cv-publications"><div class="yx-heading-row"><h2><span aria-hidden="true">📚</span> Selected Publications</h2><a href="{{ site.author.googlescholar }}">Full list on Scholar ↗</a></div>
{% include profile-publications.html compact=true %}
</section>
<section id="cv-manuscripts"><h2><span aria-hidden="true">📝</span> Manuscripts Under Review</h2>
{% include profile-manuscripts.html compact=true %}
</section>
<section id="cv-projects"><h2><span aria-hidden="true">🔬</span> Selected Projects</h2>
{% include profile-projects.html %}
</section>
<section id="cv-skills"><h2><span aria-hidden="true">🛠️</span> Technical Skills</h2>
<dl class="yx-skills">{% for skill in site.data.profile.skills %}<div><dt>{{ skill.label }}</dt><dd>{{ skill.text }}</dd></div>{% endfor %}</dl>
</section>
<section id="cv-honors"><h2><span aria-hidden="true">🏅</span> Honors &amp; Awards</h2>
<ul class="yx-news">{% for honor in site.data.profile.honors %}<li><time>{{ honor.year }}</time><span>{{ honor.text }}</span></li>{% endfor %}</ul>
</section>
</div>
