# Angular Store

## Angular Web App with TailwindCSS

This repository contains a store app for an Angular web application with TailwindCSS.

<details>
<summary>Table of Contents</summary>

- [Angular Store](#angular-store)
  - [Angular Web App with TailwindCSS](#angular-web-app-with-tailwindcss)
  - [Features](#features)
    - [Dependencies](#dependencies)
    - [Dev Dependencies](#dev-dependencies)
    - [Icons and Patterns](#icons-and-patterns)
  - [Installation \& Usage](#installation--usage)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Commands](#commands)
  - [Disclaimer](#disclaimer)
  - [License](#license)

</details>

## Features

- [x] Landing layout
- [x] Dark mode toggle ☀️🌙
- [x] SSR
- [ ] sign up form
- [ ] sign in form
- [ ] dashboard
- [ ] add to cart

### Dependencies

| Package                  | Description                                                                                      |
| ------------------------ | :----------------------------------------------------------------------------------------------- |
| [Angular][Angular-url]   | A platform and framework for building single-page client applications using HTML and TypeScript. |
| [ng-icons][ng-icons-url] | The all-in-one icon library for Angular                                                          |

### Dev Dependencies

| Package                                                        | Description                                                                                    |
| -------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| [Typescript][TS-url]                                           | TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.                |
| [Husky][Husky-url]                                             | Git hook management                                                                            |
| [Conventional Commit][Conventional-Commit-url]                 | A specification for adding human and machine readable meaning to commit messages.              |
| [Commitlint][Commitlint-url]                                   | Lint commit messages                                                                           |
| [ESLint][ESLint-url]                                           | A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.          |
| [Prettier][Prettier-url]                                       | An opinionated code formatter                                                                  |
| [prettier-plugin-tailwindcss][Prettier-Plugin-TailwindCSS-url] | A Prettier plugin for Tailwind CSS that automatically sorts classes based on recommended order |
| [TailwindCSS][Tailwind-url]                                    | A utility-first CSS framework for rapidly building custom user interfaces.                     |
| [tailwind-scrollbar][Tailwind-Scrollbar-url]                   | Tailwind plugin for styling scrollbars.                                                        |

### Icons and Patterns

This project uses [Hero Icons][Hero-url] and [Hero Patterns](https://heropatterns.com/)

## Installation & Usage

### Prerequisites

- node >=18.0.0

### Install

Create the project.

```bash
git clone https://github.com/enesdir/angular-store.git
```

Access the project directory.

```bash
cd angular-store
```

Install dependencies.

```bash
npm install
```

Serve with hot reload at <http://localhost:4200>.

```bash
npm run start # start development server
```

### Commands

| command                   | Description                                   |
| ------------------------- | :-------------------------------------------- |
| `npm start`               | Starts the server in dev mode                 |
| `npm run lint`            | Runs ESLint on the project                    |
| `npm run prettier`        | Runs Prettier on entire src folder            |
| `npm run prettier:verify` | Runs Prettier-check and throws error if fails |
| `npm run prettier:staged` | Runs Prettier on only staged (changed) files  |

## Disclaimer

The Tailwind name and logos are trademarks of Tailwind Labs Inc.
The Angular name and logos are trademarks of Google.

## License

This project uses the MIT license. [License](https://github.com/enesdir/angular-store/blob/master/LICENSE.md)

<!-- MARKDOWN LINKS & IMAGES -->

[Angular-url]: https://angular.dev/
[ng-icons-url]: https://ng-icons.github.io/ng-icons/
[TS-url]: https://www.typescriptlang.org/
[Husky-url]: https://typicode.github.io/husky/
[Conventional-Commit-url]: https://www.conventionalcommits.org/
[Commitlint-url]: https://commitlint.js.org/#/
[ESLint-url]: https://eslint.org/
[Prettier-url]: https://prettier.io/
[Prettier-Plugin-TailwindCSS-url]: https://www.npmjs.com/package/prettier-plugin-tailwindcss
[Tailwind-Scrollbar-url]: https://www.npmjs.com/package/tailwind-scrollbar
[Tailwind-url]: https://tailwindcss.com/
[Hero-url]: https://heroicons.com/
