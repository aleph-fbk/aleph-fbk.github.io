---
# coming from "_layouts/default.html"
title: Topics in Applied Cryptography 2025          # Title of the event
show_hero: true                                     # Leave "true"


# coming from "_includes/list-events.html"
id: TAC2025                                         # ID of the event
acronym: TAC2025                                    # acronym of the event
name: Topics in Applied Cryptography 2025           # Name of the event
url: https://www.decifris.it/cifris25/workshops  # External url of the event
description: TAC2025 is the third edition of a workshop organized by the ALEPH research unit and co-located with the CIFRIS25 conference.            # Short description (few words)


# coming from "_events/index.html"
startDate: "2025-09-12" # Start date in "YYYY-MM-DD" format (keep also the double quotes, i.e., "2025-10-11")
endDate: "2025-09-12"   # End date in "YYYY-MM-DD" format (keep also the double quotes, i.e., "2025-10-12")


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

projects:                         # List of IDs of related projects
    - SERICS 

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
  Co-located with the <a href="https://www.decifris.it/cifris25">CIFRIS25</a> conference<br />
  Rome, Italy, September 11-12, 2025
</blockquote>

# Scope & Topics

Topics in Applied Cryptography 2025 (TAC2025) is a workshop dedicated to cryptography with a specific application, scenario and/or technology in mind, including performance evaluation, libraries and implementation issues, hardware and IoT, attacks and vulnerabilities, and requirements for unusual application scenarios; purely theoretical results are out of scope. Topics of interest include privacy enhancing cryptography, homomorphic encryption, secure multi-party computation, quantum key distribution, and quantum-safe cryptography.

# Registration

To participate it is necessary to [register on the conference page](https://www.decifris.it/cifris25/registration). The registration is **free of charge**.

# Program

The detailed program will be soon defined and made available. 

## Invited Speaker:
* [Peter Rønne](https://www.uni.lu/snt-en/people/peter-roenne/), *Université du Luxembourg*.   
   
  **Transparent Verification in E-Voting**   
   
   *The main challenge in secure e-voting is to allow voters to verify their cast vote while preserving strong privacy notions, especially preventing vote-buying and coercion.
  We will introduce the electronic voting schemes Selene and Hyperion which offer a very transparent form of verifiability allowing voters to find and check their plaintext vote directly in the tally result while preserving coercion-mitigation.
  We will introduce new, more general security definitions to capture the context of these schemes and prove their security.  Finally, we will see how we can achieve both everlasting privacy and everlasting coercion-mitigation for Hyperion, as well as speculating on the post-quantum migration of the scheme.*

## Contributed Talks:
* Francesco Stocco (*Telsy*), Edoardo Signorini (*Telsy*), and Claudia De Lazzari (*QTI*)   
  **QKD (Re)Initialization via PQC: An Industrial Security-Usability Trade-off**
* Lorenzo Rovida (*University of Milano-Bicocca, DISCo*)  
  **Exploring blind signatures under FHE by combining GBFV and HAWK**
* Laura Mattiuz (*Cybersecurity Center, FBK*)  
  **A Review of Post-Quantum e-Voting**
* Carlo Brunetta (*independent*), Stefano Galatolo (*Department of Applied Mathematics, University of Pisa*)  
  **Verifiable Computation Outsourcing via Contracts over Blockchain Transactions**
* Lorenzo Naturale, Alessandro Bugno, Cesare Caratozzolo, Massimo Caccia (*Random Power s.r.l. &
University of Insubria*)  
  **Quantum Root-of-Trust: Post-Quantum Security for Industrial IoT**




 <!-- after the notification to authors. The structure of the workshop is as follows:  -->

<!-- All times are in <a href="https://time.is/en/CEST" target="_blank">Central European Summer Time (CEST)</a>. The program is tentative and may be subject to changes. -->


<!-- <table class="bordered program" width="100%">
  <tr class="day">
    <td colspan="2">
      Friday 27th September 2025
    </td>
  </tr>

  <tr class="institutional">
    <td class="talk">
      <p class="title">Workshop Presentation</p>
      <p class="speakers"><b>Riccardo Longo</b> (TAC 2025 General Chair)</p>
    </td>
    <td>10:00-10:05</td>
  </tr>

  <tr class="session">
    <td colspan="2">
      <p class="title">Invited Speaker</p>
    </td>
  </tr>

  <tr class="institutional">
    <td class="talk">
      <p class="title">Transparency, Trust, and Accountability</p>
      <p class="speakers">Abstract: transparency logs (tlogs) are a powerful tool that makes it possible to bring accountability where it is unpractical to improve trust. In this talk, we'll discuss their mechanism, practical instantiation, and applications.</p>
      <p class="speakers"><b><a href="https://filippo.io">Filippo Valsorda</a></b> (full-time independent open source maintainer)</p>
    </td>
    <td>10:05-10:30</td>
  </tr>

  <tr class="session">
    <td colspan="2">
      <p class="title">Contributed Talks</p>
    </td>
  </tr>

  <tr>
    <td class="talk">
      <p class="title">Lova: A Novel Framework for Verifying Mathematical Proofs with Incrementally Verifiable Computation</p>
      <p class="speakers"><b>Noel Elias</b> (remote presentation)</p>
    </td>
    <td>10:30-10:45</td>
  </tr>

  <tr>
    <td class="talk">
      <p class="title">HASHTA: Share and compute securely your data</p>
      <p class="speakers"><b>Amit Chaudhary</b> (Work-in-Progress)</p>
    </td>
    <td>10:45-11:00</td>
  </tr>

  <tr>
    <td class="talk">
      <p class="title">Extensible Decentralized Verifiable Refreshable Secret Sharing Protocol with Extension to Threshold Access Trees for Wallet Key Recovery</p>
      <p class="speakers"><b>Sara Montanari</b> (Work-in-Progress)</p>
    </td>
    <td>11:00-11:15</td>
  </tr>

  <tr class="recreational">
    <td colspan="1">
      <p class="title">Coffee Break</p>
    </td>
    <td>11:15-11:40</td>
  </tr>

  <tr>
    <td class="talk">
      <p class="title">Improving Security and Performance of Cryptographic Access Control with Trusted Execution Environments</p>
      <p class="speakers"><b>Stefano Berlato</b> (Lightning Talk)</p>
    </td>
    <td>11:40-11:55</td>
  </tr>

  <tr>
    <td class="talk">
      <p class="title">On the combination of Searchable Encryption and Attribute-based encryption</p>
      <p class="speakers"><b>Enrico Sorbera</b> (Work-in-Progress)</p>
    </td>
    <td>11:55-12:10</td>
  </tr>

  <tr class="session">
    <td colspan="2">
      <p class="title">Round Table</p>
    </td>
  </tr>

  <tr class="institutional">
    <td class="talk">
      <p class="title">Discussion and community feedback on hot topics, involving as much as possible the whole audience</p>
    </td>
    <td>12:10-13:00</td>
  </tr>

</table> -->

# Call for Submissions

If you have a proposal for a talk or demo, please send an extended abstract of maximum 2 pages to `tac@fbk.eu`.
Submissions will be subject to a rolling review, i.e., abstracts will be evaluated as soon as the organizing committee will receive them.
Proposals that will be deemed suitable and interesting (by criteria of novelty, significance, and potential to spark engaging discussion that benefits the community) will be accepted within a short time-frame (a few working days).
The call will be closed once the time capacity of the workshop will be reached, or by the 22nd of August at the latest.
Note that the rolling review process favours earlier submissions.


# Organizers

* **Chair** Riccardo Longo, *Fondazione Bruno Kessler* (rlongo@fbk.eu).

* **Organizing Committee**:
  * Stefano Berlato, *Fondazione Bruno Kessler* (sberlato@fbk.eu);
  * Veronica Cristiano, *Telsy* (veronica.cristiano@telsy.it);
  * Marco Pedicini, *Roma Tre University - Department of Mathematics and Physics* (marco.pedicini@uniroma3.it);
  * Silvio Ranise, *University of Trento - Department of Mathematics and Fondazione Bruno Kessler* (ranise@fbk.eu);
  * Chiara Spadafora, *University of Trento - Department of Mathematics* (chiara.spadafora@unitn.it);
  * Alessandro Tomasi, *Fondazione Bruno Kessler* (altomasi@fbk.eu).

# Acknowledgements

The workshop is developed within the SEcurity and RIghts in the CyberSpace (SERICS) foundation framework (https://serics.eu/). The Foundation's main purpose is scientific and technological research and, in this perspective, it is established to be the implementing entity of the extended Partnership "SERICS - Security and Rights in CyberSpace" financed following the participation in the Public Notice "for the presentation of Proposals for the creation of "Partnerships extended to universities research centers, companies for the funding of basic research projects" - as part of the National Recovery and Resilience Plan, Mission 4 "Education and Research" - Component 2 "From Research to Enterprise" - Investment 1. 3, funded by the European Union - NextGenerationEU - Notice No. 341 of 15.3.2022.

