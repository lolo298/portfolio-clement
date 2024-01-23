# Installation

## Prérequis

Avoir installer Node v20.\* [nodejs.org](https://nodejs.org/en/)

## Installation

Ouvrir un terminal dans le dossier du projet et lancer la commande suivante :

```bash
npm install
```

# Lancement

## Lancement en mode Debug

Ouvrir un terminal dans le dossier du projet et lancer la commande suivante :

```bash
npm run dev
```

Cette commande va créer un serveur de développement a l'adresse suivante : [localhost:3000](http://localhost:3000)

# Build

Pour récuperer les fichiers builds a envoyer sur le serveur en production, lancer la commande suivante :

```bash
npm run build
```

Les fichiers builds seront dans le dossier [build](./build)
Tous les fichiers sonts nécessaires pour le bon fonctionnement du site.

# Modifier les contenus

Touts les contenus a modifier sonts dans le dossier [app](./app)
Dans ce dossier chaque sous dossier correspond a une bout de l'url et dans ces dossiers les fichiers nommés page.tsx correspondent a une page avec leurs contenus.

Il y a également certains contenu dans le dossier [components](./components)

- [Le Header](./components/Header.tsx) : Le header est le menu en haut du site
- [Menu](./components/Menu.tsx) : Le menu en haut a droite du site
- [Contact](./components/Contact.tsx) : La popup de contact
- [Hamburger](./components/Hamburger.tsx) : La popup du menu hamburger
- [Footer](./components/Footer.tsx) : Le footer du site

Tous les compoosants ayant besoin des projets comme le footer, charge les projets depuis le dossier [projects](./app/projets)

# Ajouter un projet

Chaque projet est un dossier avec le nom du projet, ce dossier contient un fichier page.mdx

Chaque page doit avoir comme premier élément un bloc de code comme celui ci :

```mdx
---
title: Project template
tags: ["Design sprint", "UI/UX"]
date: "2021"
image: /images/tmp.svg
isOnMainPage: false
---
```

La page est écrite en mdx, pour plus d'information sur la syntaxe mdx : [mdxjs.com](https://mdxjs.com/)

Des templates sonts disponibles dans le dossier [Projets](./app/projets)

Tes tags doivents êtres utilisé pour obtenir une page au bon format,
les tags disponibles sonts :

- Header: contient le titre et les differents tags
  - Tags: contient les tags
    - Tag: contient un tag
- MainImg: contient l'image principale
- Content: Englobe tout le contenu de la page
- Wrapper: Contient un block Titre + Texte
