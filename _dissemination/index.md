---
title: Dissemination
layout: page
permalink: /dissemination/
---

<br />
<div class="columns is-multiline">

    {% include toc.md %}

    <div class="column is-12">
        {% assign disseminationByCategory = site.dissemination | group_by: "category" | where_exp: "dissemination", "dissemination.title != 'Dissemination'" | sort: "name" %}

        {% for category in disseminationByCategory %}
            {% assign categoryID = category.name | replace: " ", "-" | downcase %}
            <h1 id="{{ categoryID }}">{{ category.name }}</h1>
            {% include list-dissemination.html source=category.items style="table" %}
        {% endfor %}
    </div>
</div>