# Caesar Cipher CLI

Tool for text encoding and decoding using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Prerequisites

Node(tested on LTS version - v12.19.0)

## Install

`git clone https://github.com/kiral/caesar-cli && cd caesar-cli && npm i`

## Methods

- -s or --shift - to define shift value for the cipher
- -a or --action - to define action type for the cipher
  - encode or decode
- -i or --input - to define input file name

  - taken from command line if not specified

- -o or --output - to define output file name
  - output in command line if not specified

## Run

`node caesar -s 2 -a encode` - encode  
`node caesar -s 2 -a decode` - decode
