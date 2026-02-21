---
# coming from "_includes/list-items.html"
#id: CP4PETs                     # ID of the tool
#logo: "/assets/svg/material-design-icons/icons.svg#pets"                          # "/assets/areas/tools/<image name>" or 
                                # "/assets/svg/material-design-icons/icons.svg#<icon id>" or 
                                # "/assets/svg/fontawesome-6.4.0/icons.svg#<icon id>"

#title:                          # Title of the tool
#internalUrl:                    # "/tools/<ID of the tool>"
#description:                    # Short description (few words)

tool: Cryptographic Primitives for Privacy-Enhancing Technologies
subtitle: Cryptographic PETs 🐕—reliable, well-behaved, and safe to keep around.

# coming from "_layouts/page.html"
#selectedPublications:           # Whether publications for the page are selected 
                                # (if "true", show "Selected Publications" instead  
                                # of "Related Publications" in the page)

#selectedProjects:               # Whether projects for the page are selected 
                                # (if "true", show "Main Projects" instead  
                                # of "Related Projects" in the page)

#publications:                   # List of IDs of related publications
#    - 

#theses:                         # List of IDs of related theses
#    - 

#events:                         # List of IDs of related events
#    - 

#tools:                          # List of IDs of related tools
#    - 

projects:                       # List of IDs of related projects
    - iVoting_eID

#collaborations:                 # List of IDs of related collaborations
#    - 

people:                         # List of IDs of related people
    - MarioScuro
    - RiccardoLongo

#images:                         # Repeat the following structure to add more images
#    - title:                    # Title of the image
#      source:                   # Path to the image
---

## Cryptographic Primitives for Privacy-Enhancing Technologies

Modular, composable, and group-agnostic building blocks for cryptographic applications such as secure voting and anonymous credentials.

A [Rust workspace](https://github.com/aleph-fbk/pet-crypto-primitives-rs) with multiple crates:

- [`dlog-group`](https://crates.io/crates/dlog-group/): abstraction layer over prime-order groups.
- [`dlog-sigma-primitives`](https://crates.io/crates/dlog-sigma-primitives/): implementations of encryption schemes, commitments, and zero-knowledge proofs.

Documentation available at [https://aleph.fbk.eu/pet-crypto-primitives-rs/](https://aleph.fbk.eu/pet-crypto-primitives-rs/).