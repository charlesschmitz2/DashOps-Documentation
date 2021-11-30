# Getting the Project Running with Docker #
This project uses Docusaurus to create the documentation guide for the DashOps Spring 2021 Capstone project.

Alternatively, the run.sh script can be run with the git bash terminal command...

```
bash run.sh
```
This will run all of the following docker build and run commands.

**Docker**
1. Install docker for your platform
2. run the following commands from the *backend* folder

```

docker build -t dashops:1 .

```

```
docker run -p 5000:3000 dashops:1

```

***If signed into docker***
```

 docker build -t *username*/dashops:1 .

```

```
 
 docker run -p 5000:3000 *username*/dashops:1

```

------------------------------------------------------------------

# Docaurus Documentation
This website was created with [Docusaurus](https://docusaurus.io/).

You can use this guide if you want to make changes to the documentation


**What's In This Document**

- [Get Started in 5 Minutes](#get-started-in-5-minutes)
- [Directory Structure](#directory-structure)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)
- [Full Documentation](#full-documentation)


**Get Started in 5 Minutes**

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ yarn
```

2. Run your dev server:

```sh
# Start the site
$ yarn start
```

----------------------------------------------------------------------------

**Directory Structure**

Your project file structure should look something like this

```
my-docusaurus/
  docs/
    doc-1.md 
    doc-2.md
    doc-3.md
    doc-4.md
    doc-5.md
  website/
    core/
    node_modules/
    pages/
    static/
      css/
      img/
    package.json
    sidebars.json
    siteConfig.js
```
--------------------------------------------------------------------------------------------

**Editing Content**

***Editing an existing docs page***

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

----------------------------------------------------------------------------------------------

**Adding Content**

***Adding a new docs page to an existing sidebar***

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

***Adding items to your site's top navigation bar***

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/siteConfig.js`:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```

For more information about the navigation bar, click [here](https://docusaurus.io/docs/en/navigation)

***Adding custom pages***

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`

```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://docusaurus.io/docs/en/custom-pages).

----------------------------------------------------------------------------------------------------

**Full Documentation for Docusaurus**

Full documentation can be found on the [website](https://docusaurus.io/).
