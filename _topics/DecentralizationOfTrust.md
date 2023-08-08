---
title: Decentralization of Trust
subtitle:           # title
type: topic
url: /topics/DecentralizationOfTrust
image: decentralizationOfTrust.png
order: 2
permalink: /topics/DecentralizationOfTrust/

tools:
    # -               # ID of related tools

publications:
    # - EVOTEID2023

projects:
    - e-voting
    
theses:
    # -               # ID of related thesis
---

[Multi-party threshold cryptography](https://csrc.nist.gov/Projects/threshold-cryptography) enables distributed computation of cryptographic algorithms without combining the entire private/secret key in any one place. Assuming the number of dishonest participants does not exceed a certain threshold, this enables decentralization of trust in the creation, storage, and use of private/secret keys.

An intuitive example is threshold digital signature, requiring a threshold of honest participants to contribute to their creation by using their secret key shares.

An application of interest for aleph has been electronic voting. By way of example, if ballots are cast with additively homomorphic encryption, and several tabulation authorities each have a share of the election secret key, no single authority can decrypt individual votes or their sum, and a threshold of honest authorities is required to decrypt the final tally.

Additional technologies of interest include tamper-evident and -resistant distributed ledgers.
