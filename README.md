# The ALEPH Website

### This document provides instructions about the [ALEPH website](https://aleph.fbk.eu/). Please start by reading (at least) the [How to update the website](#how-to-update-the-website) section.

Table of Contents:
- [Good to know](#good-to-know)
  - [How to update the website](#how-to-update-the-website)
  - [How to try the website locally](#how-to-try-the-website-locally)
  - [Use of attachments](#use-of-attachments)
  - [Language](#language)
- [Common operations](#common-operations)
  - [Add a person](#add-a-person)
  - [Add a thesis](#add-a-thesis)
  - [Add a tool](#add-a-tool)
  - [Add a publication](#add-a-publication)
  - [Add a tag](#add-a-tag)
  - [Add a destination](#add-a-destination)
  - [Add a project](#add-a-project)
  - [Add a collaboration](#add-a-collaboration)
  - [Add a complementary material](#add-a-complementary-material)
- [Special operations](#special-operations)
  - [Add an event](#add-an-event)
  - [Topics linked to the graph in the homepage](#topics-linked-to-the-graph-in-the-homepage)
- [Currently disabled operations](#currently-disabled-operations)
  - [News](#news)
  - [Dissemination](#dissemination)
  - [Teaching](#teaching)
  - [Internship and thesis offers](#internship-and-thesis-offers)
<!-- - [Structure of the website](#structure-of-the-website) -->


# Good to know

### How to update the website

1. Read the instructions you find in the [Common operations](#common-operations) section to understand how to implement your change (e.g., add a new publication, update a project). You may try out your change by following the instructions in the [How to try the website locally](#how-to-try-the-website-locally) section;
2. Create a dedicated issue and make a pull request to the repository. **It is a best practice to avoid pushing changes directly into the main branch**;
3. The Content Managers (`sberlato@fbk.eu` and `altomasi@fbk.eu`) will check your modification and merge it into the main branch;
4. The website will automatically update accordingly.

### How to try the website locally

1. clone the repository;
2. install rvm (https://rvm.io/rvm/install) (you may need to reboot your computer);
3. install ruby with `rvm install ruby 2.7.2`;
4. run `bundle install`;
5. run `bundle exec jekyll serve`;
  - if the above command does not work, delete the `gemfile.lock` file, run `rvm install ruby 3.2.2` and again `bundle exec jekyll serve`;
6. open the browser at `http://0.0.0.0:4000/`;

Sample installation script in Ubuntu 22.04:

```bash
sudo apt install software-properties-common ruby-dev ruby-bundler
sudo apt-add-repository -y ppa:rael-gc/rvm
sudo apt-get update
sudo usermod -a -G rvm $USER
source ~/.bashrc
sudo apt-get install rvm
rvm install ruby 3.2.2
bundle install
bundle exec jekyll serve
```

### Use of attachments

Common images can be found in and used from the folder [`assets/images`](./assets/images).

Custom images or attachments should be uploaded in the [`assets/areas`](./assets/areas) folder. Please keep material properly organized (e.g., using subfolders).

### Language

This website is composed of several markdown (`.md`) pages that are automatically compiled and converted to HTML whenever the repository is updated (e.g., with a new commit).

On top of many pages, a YAML preamble (that starts and ends with `---`) defines metadata (e.g., title, layout) as well as custom variables. Each layout requires specific variables, while others may be optionally assigned.

Only plaintext is allowed inside YAML preambles, while common markdown or HTML tags can be used outside.



# Common operations

> **Important**: anything you create a reference to in the website (i.e., collaborations, complementary material, events, people, projects, tools, tags) need to exist already. For instance, it is not possible to create a new project referring to a person that does not exist in [`_data/people.yml`](./_data/people.yml). Similarly, it is not possible to create a new publication whose venue (e.g., conference) does not exist in [`_data/destinations.yml`](./_data/destinations.yml).


### Add a person
You can add a person (e.g., new member or student) in the [`_data/people.yml`](./_data/people.yml) file:
1. check whether the person (and the correct affiliation) is already listed;
2. if the person is already listed but with a former affiliation, please do not update the existent entry, as this would cause every page referring to the entry to update accordingly. Instead, add a new entry with a different ID;
3. if the person is not listed, ask the person's consent to appear on the website (e.g., via email). If given the consent, add the person using the template you find at the top of the [`_data/people.yml`](./_data/people.yml) file;
4. if the person gave consent, you can add an image of the person in the [`assets/areas/people`](./assets/areas/people) folder (the name of the image should be the ID of the person in [`_data/people.yml`](./_data/people.yml)).

Members are asked to add a personal page [`_people`](./_people/) following the [**template**](./_people/_template.md) and naming it accordingly — the bio is optional. Currently, **the personal page is not available for interns, thesis students, and junior students.**

Finally, modify the [`_data/members.yml`](./_data/members.yml) file to add the new person to the `people` page of the website.

### Add a thesis
You can add a thesis in the [`_data/theses.yml`](./_data/theses.yml) file using the template you find at the top of the file.

### Add a tool
You can add a tool by creating a new file in [`_tools`](./_tools/) following the [**template**](./_tools/_template.md) and naming it accordingly.

### Add a publication
You can add a publication in the [`_data/publications.yml`](./_data/publications.yml) file using the template you find at the top of the file. Remember that each publication is linked to a destination (see below).

> **How to define tags for a publication?** You can (*i*) check the tags already existing in [`_data/tags.yml`](./_data/tags.yml) or (*ii*) use the keywords of the publication as tags or (*iii*) you can create new tags (but only if strictly necessary), either by defining them manually or by asking an AI (e.g., ChatGPT) to extract them from the abstract. A publication should have no less than 2 tags and no more than 5 tags.

### Add a tag
This website implements a filtering system for publications based on tags. You can add a tag in the [`_data/tags.yml`](./_data/tags.yml) file using the template you find at the top of the file.

### Add a destination
You can add a destination (e.g., conference, journal) in the [`_data/destinations.yml`](./_data/destinations.yml) file using the template you find at the top of the file. 

### Add a project
You can add a project by creating a new file in [`_projects`](./_projects/) following the [**template**](./_projects/_template.md) and naming it accordingly.

### Add a collaboration
You can add a collaboration by creating a new file in [`_collaborations`](./_collaborations/) following the [**template**](./_collaborations/_template.md) and naming it accordingly.

### Add a complementary material
You can add a complementary material (e.g., for a publication) by creating a new file in [`__complementary`](./__complementary/) following the [**template**](./__complementary/_template.md) and naming it accordingly. The page will **not** be listed on the website, but the link can be used in papers or other publications: `https://aleph.github.io/complementary/<name_of_the_complementary_file>`.



# Special operations

### Add an event
You can add an event by creating a new folder named `[EventAcronym]` in [`_events`](./_events/) and then creating, within the new folder `[EventAcronym]`, a new file following the [**template**](./_events/_template.md) and naming it `index.md`.

To display a menu on the right part of the page (e.g., to link other subpages) you need to create a new file called `[EventAcronym].yml` and place it in the [`_data/menus`](_data/menus) folder. The file should have this structure:
```yaml
- label:                # Label to be display on top of the menu
  items:
    # Repeat the following structure for each page
    - name:             # Name of the page
      link:             # Link to the page
```


### Topics linked to the graph in the homepage
The graph of topics in the homepage is created starting from the information in the [**d3Graph JSON file**](./assets/json/d3Graph.json). To create a new topic, subtopic or link between topics, replicate the data structures in the [**d3Graph JSON file**](./assets/json/d3Graph.json). 

The code to render the graph is in the [**d3Graph JavaScript file**](./assets/js/d3Graph.js); please do not modify this file.






# Currently disabled operations

### News
We have decided to permanently remove the news from the ALEPH's website (see [issue #2](https://github.com/aleph-fbk/aleph-fbk.github.io/issues/2)).

### Teaching
Until we have a teaching activity, we have decided to remove the teaching page from the ALEPH's website. We will refer to the instructions in [the ST website](https://github.com/stfbk/stfbk.github.io/blob/master/README.md) to add teaching activities.

### Internship and thesis offers
In September 2023, it was decided that all Internship and thesis offers of the center for cybersecurity would be published in the [**center for cybersecurity website**](https://cs.fbk.eu/).

Contact `mpernpruner@fbk.eu` for more details.
