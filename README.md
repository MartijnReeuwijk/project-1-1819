## Web App From Scratch @cmda-minor-web 18-19

[Demo-link](https://martijnreeuwijk.github.io/project-1-1819/)
This repo will solve some navigation problems in the OBA.
![Demo](https://github.com/MartijnReeuwijk/project-1-1819/blob/master/src/demo.png)

### Table of contents

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git@github.com:MartijnReeuwijk/project-1-1819.git`
- `cd OpenIntel`
- `npm install`

### Description

This repo will try and make the OBA navigation better with the use of Svg maps and the location of books based on number. A map will be made with the corresponding studie and books.
This will improve the flow of students in the OBA.

Goal of the app: The goal is to help student find their perfect working space, close to their field of studie. This will impove flow of the students and give the OBA insight in the studies that visit the libary the most.

### Requirements from Oba

This application cannot work with the current data in the API, since it doesn't have info about the the floors and arrangement of books.

#### Data objects

This is how the shelfs are ordered, this needs to be made.
`{ name: "economie", etage: "5", subjects: [ { name: "deonderneming", color: "green", value: "351.1" }, { name: "economische_order", color: "blue", value: "351" }, { name: "belasting", color: "yellow", value: "346.2" },`

#### Svg of the floor plans

The OBA needs to make floor plans where the shelves are named and ID's so you can change it with code.

### TODO:

[x] fix SVG.
[x] fix studies uit de UVA.
[] Data uit kasten lijst toevoegen.
[] Kast data uit de api.
[x] Zoek request based on This_id aka naam van de opleinding
[x] Maak dataset over kast inhoud

## Authors

- **Martijn Reeuwijk** - [MartijnReeuwijk](https://github.com/MartijnReeuwijk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
