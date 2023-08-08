---
id: Projects
title: Projects
layout: page
permalink: /projects/
---

<br />
<div class="columns is-multiline">
    <div class="column is-12">
        {% assign currentProjects = site.projects | where_exp: "project", "project.isCurrent == true" | where_exp: "project", "project.title != 'Projects'" %}
        {% assign formerProjects = site.projects  | where_exp: "project", "project.isCurrent == false" | where_exp: "project", "project.title != 'Projects'" %}

        {% if currentProjects.size == 0 %}
        {% else %}
            <h1>Current Projects</h1>
            {% include list-items.html source=currentProjects style="card" %}
        {% endif %}

        {% if formerProjects.size == 0 %}
        {% else %}
            <h1>Former Projects</h1>
            {% include list-items.html source=formerProjects style="card" %}
        {% endif %}
    </div>
</div>
