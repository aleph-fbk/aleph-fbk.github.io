---
title: Events
layout: page
permalink: /events/
---

<br />
<div class="columns is-multiline">

    <div class="column is-12">

        {% assign todayDate = 'now' | date: '%Y-%m-%d' %}
        {% assign currentEvents = site.events | where_exp: "event", "event.startDate <= todayDate" | where_exp: "event", "event.endDate >= todayDate" | where_exp: "event", "event.title != 'Events'" | sort: "startDate" | reverse %}
        {% assign incomingEvents = site.events | where_exp: "event", "event.startDate > todayDate" | where_exp: "event", "event.title != 'Events'" | sort: "startDate" | reverse %}
        {% assign pastEvents = site.events | where_exp: "event", "event.endDate < todayDate" | where_exp: "event", "event.title != 'Events'" | sort: "startDate" | reverse %}
        
        {% if currentEvents.size > 0 %}
            <h1>Ongoing Events</h1>
            {% include list-events.html source=currentEvents %}
        {% endif %}        

        {% if incomingEvents.size > 0 %}
            <h1>Incoming Events</h1>
            {% include list-events.html source=incomingEvents %}
        {% endif %}        

        {% if pastEvents.size > 0 %}
            <h1>Past Events</h1>
            {% include list-events.html source=pastEvents %}
        {% endif %}
    </div>
</div>

