---
title: Publications
layout: page
permalink: /publications/
---

<br />
<div class="columns is-multiline">

    {% assign publicationsByYear = site.data.publications | where_exp: "publication", "publication.id_iris != nil" | where: "isALEPH", "true" | group_by: "year" | sort: "name" | reverse %}

    <div class="column is-12">
        {% include list-publications.html source=publicationsByYear sort="title" allowFiltering=true %}
        <hr />
    </div>

    <div class="column is-12">
        <h1>Past Publications</h1>
        <p>ALEPH was created in 2023; members' personal pages may include prior publications.</p>
    </div>

</div>
