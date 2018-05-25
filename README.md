mosia
=====

The deliverer build for developers!

[![Version](https://img.shields.io/npm/v/mosia.svg)](https://npmjs.org/package/mosia)
[![CircleCI](https://circleci.com/gh/write-for-CHRIST/mosia/tree/master.svg?style=shield)](https://circleci.com/gh/write-for-CHRIST/mosia/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/write-for-CHRIST/mosia?branch=master&svg=true)](https://ci.appveyor.com/project/write-for-CHRIST/mosia/branch/master)
[![Codecov](https://codecov.io/gh/write-for-CHRIST/mosia/branch/master/graph/badge.svg)](https://codecov.io/gh/write-for-CHRIST/mosia)
[![Downloads/week](https://img.shields.io/npm/dw/mosia.svg)](https://npmjs.org/package/mosia)
[![License](https://img.shields.io/npm/l/mosia.svg)](https://github.com/write-for-CHRIST/mosia/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mosia
$ mosia COMMAND
running command...
$ mosia (-v|--version|version)
mosia/0.0.0 darwin-x64 node-v8.9.1
$ mosia --help [COMMAND]
USAGE
  $ mosia COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mosia hello [FILE]`](#mosia-hello-file)
* [`mosia help [COMMAND]`](#mosia-help-command)

## `mosia hello [FILE]`

describe the command here

```
USAGE
  $ mosia hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mosia hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/write-for-CHRIST/mosia/blob/v0.0.0/src/commands/hello.ts)_

## `mosia help [COMMAND]`

display help for mosia

```
USAGE
  $ mosia help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.11/src/commands/help.ts)_
<!-- commandsstop -->
