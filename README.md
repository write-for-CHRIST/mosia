# Mosia (מוֹשִׁיעַ)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/write-for-CHRIST/mosia.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/write-for-CHRIST/mosia.svg)](https://travis-ci.org/write-for-CHRIST/mosia)
[![Coveralls](https://img.shields.io/coveralls/write-for-CHRIST/mosia.svg)](https://coveralls.io/github/write-for-CHRIST/mosia)
[![Dev Dependencies](https://david-dm.org/write-for-CHRIST/mosia/dev-status.svg)](https://david-dm.org/write-for-CHRIST/mosia?type=dev)

Mosia is a one-in-all solution for developer to build, test, and deploy JavaScript application.

### Usage

Local machine:
```
npm install --global mosia
```

Server machine:
```
docker run -d -v /your/mosia/data:/data
```

### Features

 - Monorepo.
 - Run your project in a container using Docker.
 - Deploy your code using docker image.
 - Ship your code to docker registry (public or private).
 - Auto config Eslint based on selected standard.
 - Auto config test framework for your project.
 - Single configuration file.
 
### NPM scripts

#### Global command
 - `mosia init`: init mosia config file for the current project.
 - `mosia registry add [registry]`: add a private docker registry.
 - `mosia npm add [npm]`: add a private npm registry.

#### Local command
 - `mosia add [package-name]`: add new package to the current project.
 - `mosia [package-name]:add`: install one or more dependencies for the provided package.
 - `mosia [package-name]:remove`: remove one or more dependencies for the provided package.
 - `mosia cmd [package-name]:[command]`: execute custom command for the provided package, it can be run inside the container when Dockerfile is available.
 - `mosia docker add [package-name]`: setup Dockerfile for the package name.
 - `mosia docker release [package-name]:[tag]`: build the package and push it to the registry.

#### Server command
 - `mosia server add [mosia-url]`: add remote Mosia url exposed by your server.
 - `mosia server ls`: list all the applications deployed on the server.
 - `mosia server run [app]`: run/restart application.
 - `mosia server create [app]:[tag]`: create application on running server.
 - `mosia server recreate [app]:[tag]`: recreate running/stopped app from server with new image tag.
## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/26531658?v=4" width="100px;"/><br /><sub><b>Phạm Dương Nhật Nam</b></sub>](http://writeforchrist.org)<br />[💻](https://github.com/write-for-CHRIST/mosia/commits?author=nampdn "Code") [📖](https://github.com/write-for-CHRIST/mosia/commits?author=nampdn "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!