This is the repository for *Cultural Heritage and Mass Atrocities*, edited by James Cuno and Thomas G. Weiss. This digital book was first published September 20, 2022, by the Getty Publications. It is available online at [https://www.getty.edu/publications/cultural-heritage-mass-atrocities/](https://www.getty.edu/publications/cultural-heritage-mass-atrocities/) and may be downloaded free of charge in multiple formats.

## About the Book

Intentional destruction of cultural heritage has a long history. Contemporary examples include the Bamiyan Buddhas in Afghanistan, mosques in Xinjiang, China, mausoleums in Timbuktu, Mali, and Greco-Roman remains in Syria. Cultural heritage destruction invariably accompanies assaults on civilians, making heritage attacks impossible to disentangle from the mass atrocities of genocide, war crimes, crimes against humanity, and ethnic cleansing. Both seek to eliminate people and the heritage with which they identify.

*Cultural Heritage and Mass Atrocities* assembles thirty-eight experts from the heritage, social science, humanitarian, legal, and military communities. Focusing on immovable cultural heritage vulnerable to attack, the volume’s guiding framework is the Responsibility to Protect (R2P), a United Nations resolution adopted unanimously in 2005 to permit international intervention against crimes of war or genocide. Based on the three pillars of prevent, react, and rebuild, R2P offers today’s policymakers a set of existing laws and international norms that can and—as this book argues—must be extended to the protection of cultural heritage. Essays consider the global value of cultural heritage and document recent attacks on people and sites in China, Guatemala, Iraq, Mali, Sri Lanka and Afghanistan, Syria, and Yemen. Comprehensive sections on vulnerable populations as well as the role of international law and the military offer readers critical insights and point toward research, policy, and action agendas to protect both people and cultural heritage. The table of contents along with a concise abstract of each chapter is offered online in Arabic, Chinese, French, Russian, and Spanish to facilitate robust, global dissemination of the strategies and tactics offered in this pathbreaking call to action.

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s new publishing framework. Quire is currently in beta, with the goal of it being released as free and open source software in the future. In the meantime, users are encouraged to request access at http://bit.ly/quire-signup. This repository can also be run locally to build the online site (but not the PDF or ebook formats) with [Hugo](https://gohugo.io/), the [static site generator](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/) at the core of Quire.

We are dedicated to maintaining this publication for years to come at the permanent URL, [https://www.getty.edu/publications/cultural-heritage-mass-atrocities/](https://www.getty.edu/publications/cultural-heritage-mass-atrocities/), and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `data` and `content` directories. The master branch represents the current, published edition at all times, and the revisions branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Quire 0.20.4
- Node 14.18.1 / npm 6.14.15
- Hugo 0.82.1
- PrinceXML 14.2
- Pandoc 2.17.1.1

While version 0.20.4 of the core Quire Default Theme was used, a number of customizations were made:

- Custom cover design and font
- Copyright statements added to the end of each essay
- Suggested readings for many of the essays
- Translations of the main information, keyonte, and abstract for each essay into the six [UN Languages](https://www.un.org/en/our-work/official-languages)
- PDF downloads of the TOC and essay information in each language
- Individual PDF downloads of each essay

Within the theme itself, changes were made to the `source/css/variables.scss` and `source/css/print.scss` files. Outside of the theme, customizations can be found in the project’s `layouts` directory, and in `static/css/custom.css`.

### Images Submodule

Many of figure images for *Cultural Heritage and Mass Atrocities* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/cultural-heritage-mass-atrocities/, which is linked to this main publication repository as a submodule in `static/img/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/cultural-heritage-mass-atrocities.git
```

## License

© 2022 J. Paul Getty Trust

The text of this work, unless otherwise indicated, is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>. All images are reproduced with the permission of the rights holders acknowledged in captions and expressly excluded from the CC BY-NC license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights.

"Who Are We? Identity and Cultural Heritage" is reproduced from *The Lies That Bind: Rethinking Identity* by Kwame Anthony Appiah. Copyright © 2018 by Kwame Anthony Appiah. Used by permission of Liveright Publishing Company and Profile Books Ltd.