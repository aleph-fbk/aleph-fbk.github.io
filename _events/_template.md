---
# coming from "_layouts/default.html"
title:                          # Title of the event
show_hero: true                 # Leave "true"


# coming from "_includes/list-events.html"
id:                             # ID of the event
acronym:                        # acronym of the event
name:                           # Name of the event
url:                            # External url of the event
description:                    # Short description (few words)


# coming from "_events/index.html"
startDate:                      # Start date in YYYY-MM-DD format
endDate:                        # End date in YYYY-MM-DD format


# coming from "_includes/menubar.html"
menubar:                        # Menubar to show



# coming from "_layouts/page.html"
selectedPublications:           # Whether publications for the page are selected 
                                # (if "true", show "Selected Publications" instead  
                                # of "Related Publications" in the page)

selectedProjects:               # Whether projects for the page are selected 
                                # (if "true", show "Main Projects" instead  
                                # of "Related Projects" in the page)
                                  
publications:                   # List of IDs of related publications
    - 

theses:                         # List of IDs of related theses
    - 

events:                         # List of IDs of related events
    - 

tools:                          # List of IDs of related tools
    - 

projects:                       # List of IDs of related projects
    - 

collaborations:                 # List of IDs of related collaborations
    - 

people:                         # List of IDs of related people
    - 

images:                         # Repeat the following structure to add more images
    - title:                    # Title of the image
      source:                   # Path to the image
---

To add a Table of Contents, just add the following code where you want it to appear:
{% include toc.md %}

Write here the content of the page. You can use both markdown and HTML syntax.
