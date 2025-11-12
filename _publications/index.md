---
title: Publications
layout: page
permalink: /publications/
filter_tags: true
---

<p></p>

<div class="columns is-multiline">
    <div class="column is-12">
        {% if site.data.publications %}
            {% assign publicationsByYear = site.data.publications | where: "isALEPH", "true" | group_by: "year" | sort: "name" | reverse %}

            {% for year in publicationsByYear %}
                {% assign yearn = year.name | plus:0 %}
                {% if yearn >= 2018 %}
                    <h1>{{ year.name }} <small>({{ year.items.size }})</small></h1>

                    {% if year.items.size > 0 %}
                        {% include list-publications.html source=year.items sort_by="id_iris" sort_natural="false" sort_reverse="true" allowFiltering="true" %}
                    {% endif %}
                {% endif %}
            {% endfor %}
        {% endif %}

        <hr />
    </div>        

    <div class="column is-12">
        <h1>Past Publications</h1>
        <p>ALEPH was created in 2023; topic, project, and members' personal pages may include prior publications.</p>
    </div>
</div>
