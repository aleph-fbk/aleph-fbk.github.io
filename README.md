# The ALEPH Website

### This document provides instructions about the [ALEPH website](https://aleph.github.io). Please start by reading (at least) the [How to update the website](#how-to-update-the-website) section.

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
  - [Internships and thesis offers](#internships-and-thesis-offers)
  - [Topics](#topics)
- [Currently disabled operations](#currently-disabled-operations)
  - [News](#news)
  - [Events](#events)
  - [Dissemination](#dissemination)
  - [Teaching](#teaching)
- [Structure of the website](#structure-of-the-website)


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

> **Important**: anything you create a reference to in the website (e.g., collaborations, complementary material, events, people, projects, tools, tags) need to exist already. For instance, it is not possible to create a new project referring to a person that does not exist in [`_data/people.yml`](./_data/people.yml). Similarly, it is not possible to create a new publication whose venue (e.g., conference) does not exist in [`_data/destinations.yml`](./_data/destinations.yml).


### Add a person
You can add a person (e.g., new member or student) in the [`_data/people.yml`](./_data/people.yml) file:
1. check whether the person (and the correct affiliation) is already listed;
2. if the person is already listed but with a former affiliation, please do not update the existent entry, as this would cause every page referring to the entry to update accordingly. Instead, add a new entry with a different ID;
3. if the person is not listed, add it using the template you find at the top of the file.

Optionally, you can add a personal page for the new person in [`_people`](./_people/) following the [**template**](./_people/_template.md) and naming it accordingly.

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

### Internships and thesis offers
For now, just contact `sberlato@fbk.eu`.

### Topics
For now, just contact `sberlato@fbk.eu`.





# Currently disabled operations

### News
We have decided to permanently remove the news from the ALEPH's website (see [issue #3](https://gitlab.fbk.eu/st/people/StefanoBerlato/aleph_website/-/issues/3)).

### Events
Until we have an event, we have decided to remove the events page from the ALEPH's website. We will refer to the instructions in [the ST website](https://github.com/stfbk/stfbk.github.io/blob/master/README.md) to add events.

### Dissemination
Until we have a dissemination activity, we have decided to remove the dissemination page from the ALEPH's website. We will refer to the instructions in [the ST website](https://github.com/stfbk/stfbk.github.io/blob/master/README.md) to add dissemination activities.

### Teaching
Until we have a teaching activity, we have decided to remove the teaching page from the ALEPH's website. We will refer to the instructions in [the ST website](https://github.com/stfbk/stfbk.github.io/blob/master/README.md) to add teaching activities.



# Structure of the website
The website is structured as follows:
```
|-- .
|-- _collaborations/        => Collaborations
|-- _complementary/         => Complementary materials of papers
|-- _data/                  => Data to populate lists
|   └── menus/              => Entries for side menus
|-- _dissemination/         => Dissemination activities
|-- _events/                => Events
|-- _includes/              => Files commonly included in pages (do not touch)
|-- _layouts/               => Custom layouts for pages (do not touch)
|-- _news/                  => News
|-- _offers                 => Internships and theses offers (both past and open)
|   └── past/                  => Internships and theses past offers
|-- _people/                => Persons' profiles
|-- _projects/              => Projects
|-- _publications/          => Publications
|-- _teaching/              => Teaching activities
|-- _tools/                 => Tools
|-- _topics/                => Topics (linked to the graph in the homepage)
|-- assets/                 => Assets for the website
|   └── areas/                 => Assets for pages
|       └── collaborations/       => Assets for collaborations
|       └── complementary/        => Assets for complementary
|       └── events/               => Assets for events
|       └── people/               => Assets for people
|       └── projects/             => Assets for projects
|       └── tools/                => Assets for tools
|   └── css/                   => Stylesheets (do not touch)
|   └── images/                => Common images for easy inclusion (do not touch)
|       └── logos/                => Logos that are commonly used (do not touch)
|   └── js/                    => Javascript files (do not touch)
|   └── json/                  => JSON files (do not touch)
|   └── svg/                   => SVG files (do not touch)
|       └── fontawesome-6.4.0/    => SVG logos commonly used (do not touch)
|
|-- _config.yml             => Configuration file of the website (do not touch)
|-- 404.md                  => 404 page (do not touch)
|-- CNAME                   => CNAME (do not touch)
|-- index.md                => Homepage (do not touch)
└── README.md               => This file (do not touch)
```
