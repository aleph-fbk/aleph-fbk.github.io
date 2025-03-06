---
# coming from "_includes/list-items.html"
id: e-voting
logo: /assets/svg/material-design-icons/icons.svg#how_to_vote
title: E-voting
internalUrl: /projects/e-voting
description: Electronic voting



# coming from "_collaborations/index.html"
isCurrent: false



# coming from "_layouts/project.html"
# role:                           # Role of the Unit in the project (optional)
startDate: 2021-07-01
endDate: 2023-06-30
# leader:                         # Activity leader (optional)
# referenceFBK:                   # Name of the reference in FBK (optional)
# duration:                       # Duration of the project (optional)
# funding:                        # Funding of the project (optional)
# website:                        # Website of the project (optional)
# cordisNo:                       # Number of the project within the CORDIS website (optional)
# partners:                       # Partners of the project (optional)
#     # Either free text, or structured text as follows:
#     # Repeat the following structure to add more partners
#     - name:                     # Name of the partner
#       detail:                   # Details about the partner
#       link:                     # Website of the partner
# goals: >
#     Write here the goals (only plaintext, also multiline, optional)



# coming from "_layouts/page.html"
# selectedPublications:           # Whether publications for the page are selected 
#                                 # (if "true", show "Selected Publications" instead  
#                                 # of "Related Publications" in the page)

# selectedProjects:               # Whether projects for the page are selected 
#                                 # (if "true", show "Main Projects" instead  
#                                 # of "Related Projects" in the page)

publications:                     # List of IDs of related publications
    - EVOTEID2022
    - EVOTEID2023

# theses:                         # List of IDs of related theses
#     - 

# events:                         # List of IDs of related events
#     - 

# tools:                          # List of IDs of related tools
#     - 

# projects:                       # List of IDs of related projects
#     - 

collaborations:                 # List of IDs of related collaborations
     - UniTNAppliedCryptographyBlockchain

disseminations:
    - VoteSeminars2024

people:                         # List of IDs of related people
    - AlessandroTomasi
    - RiccardoLongo
    - ChiaraSpadafora

# images:                         # Repeat the following structure to add more images
#     - title:                    # Title of the image
#       source:                   # Path to the image
---

The aim of this project was to design and implement a proof-of-concept end-to-end verifiable electronic voting solution.

Electronic voting (e-voting) includes processes in whole or in part executed by electronic means, such as by using voting machines to cast ballots, using scanners to digitize paper ballots, or casting votes remotely over the internet (i-voting).

e-voting needs to satisfy highly complex requirements ([Council of Europe](https://www.coe.int/en/web/electoral-assistance/e-voting), [US Election Assistance Commission](https://www.eac.gov/voting-equipment/voluntary-voting-system-guidelines)), and is potentially subject to more, and more scalable attacks than in-presence paper-based voting at poll stations, and is therefore rightly subject to intense scrutiny.

On the other hand, cryptographic protocols for end-to-end verifiable elections have the potential for enhanced trustworthiness. Some of the interesting components are:

- additively homomorphic encryption to tally enncrypted votes and only decrypt the final sum;
- threshold cryptgraphy and secure multiparty computation to ensure multiple parties must collaborate to perform a decryption and to issue valid voting credentials;
- zero-knowledge proofs to check voting credential correctness, but also fake proofs to fool coercers.

In the course of this project, working as a team with personnell from collaborating partners, we had the opportunity to realize a protocol specification, cryptographic library, back-end services, and front-end android native mobile application. Source code is not currently openly available while the funding agency assesses its options.

## Notte della Ricerca 2023
A demo version of the proof of concept will be shown during the dissemination event [Notte della Ricerca 2023](https://nottedellaricerca.tn.it/) held in occasion of the [European Researcher's Night](https://marie-sklodowska-curie-actions.ec.europa.eu/event/2023-european-researchers-night).

The demo will be accompanied by two posters (in Italian):
- a demo walkthrough: [Vote App: Il Tuo Voto Conta](https://www.canva.com/design/DAFs1nyMc0g/ip_nvaLek0140ip3WU6c9Q/view?utm_content=DAFs1nyMc0g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
- a more technical description: [Note Tecniche su VOTE APP: come votare via Internet in maniera sicura con il tuo smartphone](https://fbk-my.sharepoint.com/:b:/g/personal/rlongo_fbk_eu/ETszJHoSC45Mi5Bazla4eAkBcSmn8Ndccq7pVcPQQCw8PA?e=jPcCeM)