---
# coming from "_includes/list-items.html"
id:                             # ID of the collaboration
logo:                           # "/assets/areas/projects/<image name>" or 
                                # "/assets/svg/material-design-icons/icons.svg#<icon id>" or 
                                # "/assets/svg/fontawesome-6.4.0/icons.svg#<icon id>"
title:                          # Title of the collaboration
internalUrl:                    # "/projects/<ID of the collaboration>"
description:                    # Short description (few words)



# coming from "_projects_/index.html"
isCurrent:                      # Either 'true' for ongoing projects or 'false' for terminated projects



# coming from "_layouts/project.html"
role:                           # Role of the Unit in the project (optional)
startDate:                      # Start date in YYYY-MM-DD format (optional)
endDate:                        # End date in YYYY-MM-DD format (optional)
leader:                         # Activity leader (optional)
referenceFBK:                   # Name of the reference in FBK (optional)
duration:                       # Duration of the project (optional)
funding:                        # Funding of the project (optional)
website:                        # Website of the project (optional)
cordisNo:                       # Number of the project within the CORDIS website (optional)
partners:                       # Partners of the project (optional)
    # Either free text, or structured text as follows:
    # Repeat the following structure to add more partners
    - name:                     # Name of the partner
      detail:                   # Details about the partner
      link:                     # Website of the partner
goals: >
    Write here the goals (only plaintext, also multiline, optional)



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
