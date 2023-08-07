---
id: Collaborations
title: Collaborations
layout: page
permalink: /collaborations/
---

<br />
<div class="columns is-multiline collaborations">
    <div class="column is-12">
        {% assign currentCollaborations = site.collaborations | where_exp: "collaboration", "collaboration.isCurrent == true" | where_exp: "collaboration", "collaboration.title != 'Collaborations'" | sort: "title" %}
        {% assign formerCollaborations  = site.collaborations | where_exp: "collaboration", "collaboration.isCurrent == false" | where_exp: "collaboration", "collaboration.title != 'Collaborations'" | sort: "title" %}
        
        {% if currentCollaborations.size == 0 %}
        {% else %}
            <h1>Active Collaborations</h1>
            {% include list-items.html source=currentCollaborations style="card" %}
        {% endif %}

        {% if formerCollaborations.size == 0 %}
        {% else %}
            <h1>Past Collaborations</h1>
            {% include list-items.html source=formerCollaborations style="card" %}
        {% endif %}
    </div>
    
</div>
