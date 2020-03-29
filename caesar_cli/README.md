# Caesar CLI

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running CLI

```
node caesar
```

### Options

1. -s, --shift: a shift (required)
2. -a, --action: an action encode/decode (required)
3. -o, --output: an output file
4. -i, --input: an input file

## Usage example:

```
node caesar -s 5 -a encode -i input.txt -o output.txt
```

### Exit

```
ctr + c
```