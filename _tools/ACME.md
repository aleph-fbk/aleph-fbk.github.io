---
# coming from "_includes/list-items.html"
id: ACME
logo: /assets/areas/tools/ACME/ACME.png
title: ACME
internalUrl: /tools/ACME
description: Access Control Mechanisms Evaluator


# coming from "_layouts/page.html"
# selectedPublications:           # Whether publications for the page are selected 
#                                 # (if "true", show "Selected Publications" instead  
#                                 # of "Related Publications" in the page)

# selectedProjects:               # Whether projects for the page are selected 
#                                 # (if "true", show "Main Projects" instead  
#                                 # of "Related Projects" in the page)

# publications:                   # List of IDs of related publications
#     - 

# theses:                         # List of IDs of related theses
#     - 

# events:                         # List of IDs of related events
#     - 

tools:                            # List of IDs of related tools
    - ACE

# projects:                       # List of IDs of related projects
#     - 

collaborations:                   # List of IDs of related collaborations
    - ST 

people:
    - StefanoBerlato
    - RobertoCarbone
    - SilvioRanise

# images:                         # Repeat the following structure to add more images
#     - title:                    # Title of the image
#       source:                   # Path to the image
---

### Description

ACME (*Access Control Mechanisms Evaluator*) allows evaluating the performance of access control enforcement mechanisms (e.g., [OPA](https://www.openpolicyagent.org/), [XACML](http://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html) and [CryptoAC](https://github.com/stfbk/CryptoAC)) through the **simulated execution of realistic workflows**. ACME is usually used in combination with [ACE](https://github.com/stfbk/ACE).

The design of ACME was firstly described in the (yet to be published) article "*A Simulation Framework for the Experimental Evaluation of Access Control Enforcement Mechanisms based on Business Processes*". 

Please refer to the [GitHub repository](https://github.com/stfbk/ACME) for more details.

> **Important** - ACME is still experimental and under active development; we welcome your interest and really encourage you to reach out to the developers at `sberlato@fbk.eu` for more information on how to use ACME.