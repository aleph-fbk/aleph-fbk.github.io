---
# coming from "_layouts/default.html"
title: 4th Workshop on Topics in Applied Cryptography 2026 (TAC 2026)          # Title of the event
hide_hero: false
permalink: /events/TAC2026

# coming from "_includes/menubar.html"
menubar:                        # Menubar to show



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

# tools:                          # List of IDs of related tools
#     - 

#projects:                         # List of IDs of related projects
#     -

# collaborations:                 # List of IDs of related collaborations
#     - 

# people:                           # List of IDs of related people
#     - RiccardoLongo
#     - AlessandroTomasi
#     - StefanoBerlato
#     - ChiaraSpadafora

# images:                         # Repeat the following structure to add more images
#     - title:                    # Title of the image
#       source:                   # Path to the image
---

<blockquote>
  Co-located with the <a href="https://www.decifris.it/cifris26">CIFRIS26</a> conference<br />
  Rome, Italy, October 5, 2026
</blockquote>

# Scope & Topics

Topics in Applied Cryptography 2026 (TAC2026) is a workshop dedicated to cryptography with a specific application, scenario and/or technology in mind, including performance evaluation, libraries and implementation issues, hardware and IoT, attacks and vulnerabilities, and requirements for unusual application scenarios; purely theoretical results are out of scope. Topics of interest include privacy enhancing cryptography, homomorphic encryption, secure multi-party computation, quantum key distribution, and quantum-safe cryptography.

# Registration

To participate it is necessary to [register on the conference page](https://www.decifris.it/cifris26/registration).

# Program

All times are in <a href="https://time.is/en/CEST" target="_blank">Central European Summer Time (CEST)</a>.


<table class="bordered program" width="100%">
  <tr class="day">
    <td colspan="2">
      Friday 12th September 2026
    </td>
  </tr>

  <tr class="session">
    <td colspan="2">
      <p class="title">Invited Speaker</p>
    </td>
  </tr>

  <tr class="talk">
    <td class="talk">
      <p class="title">On Delegation of Verifiable Presentations from mdoc and BBS Credentials</p>
      <p class="speakers">Abstract: The interest in verifiable credential systems has gained traction as eIDAS 2.0 Regulation has been published. This regulation instructs EU member states to provide their citizens with digital identity wallets (EUDI Wallet) that must store the credentials and enable privacy-preserving presentation of identity information to relying parties. This new digital identity system requires defining new protocols and procedures to perform tasks involving the disclosure of identity information. One of such procedures is the delegation of attestation, as is reported in the EUDI Wallet Reference Implementation Roadmap. In this talk, we address the problem of constructing secure processes for the delegation of verifiable presentations derived from both verifiable and anonymous credentials. Our goal is to enable a credential holder (the delegator) to securely delegate another party (the delegatee) to present a credential on their behalf. We introduce the notion of a verifiable presentation delegation scheme, formalizing the core algorithms, namely delegation issuance, delegated presentation, and presentation verification, and defining the relevant security properties that such a scheme should satisfy: the correctness, the unforgeability, and, when the scheme is built on top of anonymous credentials, even the unlinkability. We present two concrete instantiations of delegation schemes: the first is built on top of mdoc verifiable credentials, while the second is built on top of BBS anonymous credentials. Finally, we discuss and analyze the security of our constructions in terms of the security properties we have introduced.</p>
      <p class="speakers"><b><a href="https://sites.google.com/view/andreagangemi/?pli=1&authuser=0">Andrea Gangemi</a></b> (ShunyaXifra)</p>
    </td>
    <td>15:45-16:15</td>
  </tr>

  <tr class="talk">
    <td class="talk">
      <p class="title">Tough cookies in the PQC migration: where current standards will have a hard time chewing</p>
      <p class="speakers">Abstract: The ongoing transition to Post-Quantum Cryptography (PQC) requires to replace current factoring- and discrete logarithm based primitives with alternatives which rely on different computationally hard problems. The said problems often provide either less flexibility in the primitive design, or require a significantly higher (one- to two-orders of magnitude) more memory to encode their instances or their solutions, leading to an inflation in the cryptographic objects (keypairs, signatures, ciphertexts). While some relevant application scenarios can tolerate this increase in the requirements, there are concrete examples where we will need alternative ways to achieve the same confidentiality, integrity and origin authentication guarantees. Scenarios such as authentication in very low-bandwidth radio communication channels and encryption and authentication on severely memory limited devices (e.g., RFIDs) will require concrete engineering effort to complete the PQC transition. This talk will provide a survey of these scenarios, and highlight the open challenges.</p>
      <p class="speakers"><b><a href="https://barenghi.faculty.polimi.it/doku.php">Alessandro Barenghi</a></b> (PoliMI)</p>
    </td>
    <td>16:15-16:45</td>
  </tr>

  <tr class="talk">
    <td class="talk">
      <p class="title">The cost of quantum resistance: comparing classical and post-quantum cryptography</p>
      <p class="speakers">Abstract: The transition to post-quantum cryptography implies long-term security against quantum adversaries, but this security comes with significant design and implementation trade-offs. This talk presents an in-depth technical examination of the challenges associated with replacing classical public-key cryptography with quantum-resistant alternatives. A thorough comparison between established schemes such as RSA and ECC and emerging post-quantum algorithms, including those standardized or currently being standardized by NIST, ISO, and the IETF, is essential to understand the scope and complexity of this transition. This discussion analyzes key encapsulation mechanisms and digital signature schemes, examining parameter selection, implementation complexity, memory requirements, computational efficiency, and communication overhead.</p>
      <p class="speakers"><b><a href="https://scholar.google.com/citations?user=18FqKogAAAAJ&hl=en">Simone Dutto</a></b> (ACN)</p>
    </td>
    <td>16:45-17:15</td>
  </tr>

  <tr class="recreational">
    <td colspan="1">
      <p class="title">Coffee Break</p>
    </td>
    <td>17:15-17:30</td>
  </tr>

  <tr class="talk">
    <td class="talk">
      <p class="title">Beyond the Algorithm: Hardware/Software Design for Post-Quantum Cryptography</p>
      <p class="speakers">Abstract: Post-quantum cryptography is moving from standardization to deployment, but efficient implementation requires more than selecting secure algorithms. PQC schemes introduce new challenges in computation, memory footprint, data movement, and energy, particularly on embedded and IoT platforms. This talk provides a practical overview of how PQC workloads can be mapped to hardware, from custom instructions to tightly and loosely coupled accelerators, with a particular focus on RISC-V architectures. Through representative implementation examples, it discusses how algorithmic bottlenecks, communication overheads, and accelerator integration choices shape the final system performance, highlighting the need for a hardware/software co-design approach to practical PQC deployment..</p>
      <p class="speakers"><b><a href="https://www.polito.it/personale?p=061642">Alessandra Dolmeta</a></b> (PoliTO)</p>
    </td>
    <td>17:30-18:00</td>
  </tr>


</table>


<!--
# Call for Submissions

The call for submissions is now closed.
-->
<!-- If you have a proposal for a talk or demo, please send an extended abstract of maximum 2 pages to `tac@fbk.eu`.
Submissions will be subject to a rolling review, i.e., abstracts will be evaluated as soon as the organizing committee will receive them.
Proposals that will be deemed suitable and interesting (by criteria of novelty, significance, and potential to spark engaging discussion that benefits the community) will be accepted within a short time-frame (a few working days).
The call will be closed once the time capacity of the workshop will be reached, or by the 22nd of August at the latest.
Note that the rolling review process favours earlier submissions. -->


# Organizers

* **Chair** Riccardo Longo, *Fondazione Bruno Kessler* (rlongo@fbk.eu).

* **Organizing Committee**:
  * Stefano Berlato, *Fondazione Bruno Kessler* (sberlato@fbk.eu);
  * Veronica Cristiano, *Telsy* (veronica.cristiano@telsy.it);
  * Marco Pedicini, *Roma Tre University - Department of Mathematics and Physics* (marco.pedicini@uniroma3.it);
  * Silvio Ranise, *University of Trento - Department of Mathematics and Fondazione Bruno Kessler* (ranise@fbk.eu);
  * Chiara Spadafora, *University of Trento - Department of Mathematics* (chiara.spadafora@unitn.it);
  * Alessandro Tomasi, *Fondazione Bruno Kessler* (altomasi@fbk.eu).

<!--
# Acknowledgements

The workshop is developed within the SEcurity and RIghts in the CyberSpace (SERICS) foundation framework (https://serics.eu/). The Foundation's main purpose is scientific and technological research and, in this perspective, it is established to be the implementing entity of the extended Partnership "SERICS - Security and Rights in CyberSpace" financed following the participation in the Public Notice "for the presentation of Proposals for the creation of "Partnerships extended to universities research centers, companies for the funding of basic research projects" - as part of the National Recovery and Resilience Plan, Mission 4 "Education and Research" - Component 2 "From Research to Enterprise" - Investment 1. 3, funded by the European Union - NextGenerationEU - Notice No. 341 of 15.3.2022.
-->
