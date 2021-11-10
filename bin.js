const argv = require('yargs').demand(3)
  .alias('p', 'proc')
  .alias('k', 'key')
  .alias('i', 'ipfs')
  .usage('Usage: $0 [options]')
  .example('$0 -p ./index.js -k ./cert.pem -i false', 'Package Procedure code in index.js into a correct output file')
  .describe('p', 'Procedure code file path, should be index.js')
  .describe('k', 'Encrypt key file (public key)')
  .describe('i', 'Publish on IPFS - requires a local IPFS daemon to be running. Expect true/false')
  .help('h')
  .alias('h', 'help')
  .demand(3)
  .argv;

const procBldr = require('.'); /* the current working directory so that means main.js because of package.json */

console.log(
    procBldr(argv)
)