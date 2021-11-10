
<img width="7%" src="https://www-trustack-io.ipns.dweb.link/favicon.ico" />
<img width="40%" src="https://www-trustack-io.ipns.dweb.link/img/trustack.png" />

# Trustack Procedure Builder CLI - https://trustack.io

This repo contains the a command line wrapper for the [Procedure Builder](https://github.com/trustack/procedure-builder-procedure) Trustack Procedure that can be used to package your custom Procedures for execution on the Trustack network. The tool will build the package locally for you, but can also be used to publish to IPFS.

 <a href="https://github.com/lbryio/lbry-desktop/blob/master/LICENSE" title="MIT licensed">
   <img alt="npm" src="https://img.shields.io/dub/l/vibe-d.svg?style=flat">
 </a>

 <!-- <a href="https://chat.lbry.com">
   <img alt="Discord Chat" src="https://img.shields.io/discord/362322208485277697.svg?logo=discord" alt="chat on Discord">
 </a> -->

## Table of Contents

- [Trustack Procedure Builder CLI - https://trustack.io](#trustack-procedure-builder-cli---httpstrustackio)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Procedure Development](#procedure-development)
  - [Build](#build)
  - [Contributing](#contributing)
  - [License](#license)
  - [Security](#security)
  - [Contact](#contact)
  - [Additional information and links](#additional-information-and-links)

## Installation

_TBD_

## Usage
Usage can be seen using the `--help` option, which is posted here below:
```
Usage: package-builder-cli-win.exe [options]

Options:
      --version  Show version number                                   [boolean]
  -p, --proc     Procedure code file path, should be index.js
  -k, --key      Encrypt key file (public key)
  -i, --ipfs     Publish on IPFS - requires a local IPFS daemon to be running.
                 Expect true/false
  -h, --help     Show help                                             [boolean]

Examples:
  package-builder-cli-win.exe -p            Package Procedure code in index.js
  ./index.js -k ./cert.pem -i false         into a correct output file
  ```

### Procedure Development

See [Procedure Examples](https://github.com/trustack/trustack-sdk/blob/master/Procedure_Examples/README.md) in the trustack-sdk repo for how to write Procedures.

## Build
The NPM `pkg` package is a prerequisite. This can be installed via: `npm install --global pkg`.
To build, run: `npm build`.

## Contributing

We'll work out contributions later, but feel free to file issues as needed.

## License

This project is MIT licensed. For the full license, see [LICENSE](LICENSE).

## Security

_TBD_

## Contact

The primary contact for this project is [@fcbrandon].

## Additional information and links

- [Trustack SDK](https://github.com/trustack/trustack-sdk)
- [Procedure Builder Procedure](https://github.com/trustack/procedure-builder-procedure)