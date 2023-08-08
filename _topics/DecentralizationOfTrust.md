---
# coming from "_layouts/default.html"
title: Decentralization of Trust
show_hero: true                 # Leave "true"



# coming from "_layouts/page.html"
publications:                   # List of IDs of related publications
#     - EVOTEID2023
    - EVOTEID2022

# theses:                         # List of IDs of related theses
#     - 

# events:                         # List of IDs of related events
#     - 

# tools:                          # List of IDs of related tools
#     - 

projects:                       # List of IDs of related projects
    - e-voting

# collaborations:                 # List of IDs of related collaborations
#     - 

# people:                         # List of IDs of related people
#     - 

# images:                         # Repeat the following structure to add more images
#     - title:                    # Title of the image
#       source:                   # Path to the image
---

[Multi-party threshold cryptography](https://csrc.nist.gov/Projects/threshold-cryptography) enables distributed computation of cryptographic algorithms without combining the entire private/secret key in any one place. Assuming the number of dishonest participants does not exceed a certain threshold, this enables decentralization of trust in the creation, storage, and use of private/secret keys.

An intuitive example is threshold digital signature, requiring a threshold of honest participants to contribute to their creation by using their secret key shares.

An application of interest for ALEPH has been electronic voting. By way of example, if ballots are cast with additively homomorphic encryption, and several tabulation authorities each have a share of the election secret key, no single authority can decrypt individual votes or their sum, and a threshold of honest authorities is required to decrypt the final tally.

Additional technologies of interest include tamper-evident and -resistant distributed ledgers.
