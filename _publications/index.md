---
title: Publications
layout: page
permalink: /publications/
---

<br />
<div class="columns is-multiline">

    {% assign publicationsByYear = site.data.publications | where_exp: "publication", "publication.id_iris != nil" | where: "isALEPH", "true" | group_by: "year" | sort: "name" | reverse %}

    <div class="column is-12">
        {% for year in publicationsByYear %}
        {% assign yearn = year.name | plus:0 %}
            {% if yearn >= 2023 %}
                <h1>{{ year.name }} <small>({{ year.items.size }})</small></h1>
                {% include list-publications.html source=year.items sort="title" %}
            {% endif %}
        {% endfor %}
        <hr />
    </div>

    <div class="column is-12">
        <h1>Past Publications</h1>
        <p>ALEPH was created in 2023; members' personal pages may include prior publications.</p>
        <!-- {% for year in publicationsByYear %}
            {% assign yearn = year.name | plus:0 %}
            {% if yearn < 2023 %}
                <h2>{{ year.name }} <small>({{ year.items.size }})</small></h2>
                {% include list-publications.html source=year.items sort="title" %}
            {% endif %}
        {% endfor %} -->
    </div>

</div>
