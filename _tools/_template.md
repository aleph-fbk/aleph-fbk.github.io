---
# coming from "_includes/list-items.html"
id:                             # ID of the tool
logo:                           # "/assets/areas/tools/<image name>"
title:                          # Title of the tool
internalUrl:                    # "/tools/<ID of the tool>"
description:                    # Short description (few words)



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

Write here the content of the page. You can use both markdown and HTML syntax.

To add a Table of Contents, just add the following code where you want it to appear:
{% include toc.md %}