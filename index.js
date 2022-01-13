#!/usr/bin/env node
const yargs = require('yargs');
const procBldr = require('./main'); 
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .alias('k', 'key')
  //.alias('i', 'ipfs')
  .alias('p', 'pin')
  .alias('a', 'apikey')
  .alias('e', 'secretKey')
  .alias('s', 'secret')
  .alias('o', 'output')
  //    this.pinataApiKey = secretsVar.pinataApiKey;
  //this.pinataSecretApiKey = secretsVar.pinataSecretApiKey;
  .usage('Usage: $0 [options]')
  .example('$0 ./ -p ./ -k ./cert.pem -i false', 'Package Procedure code in index.js into a correct output file')
  .describe('k', 'Encrypt key file (public key)')
  .describe('i', 'Publish on IPFS - requires a local IPFS daemon to be running. Expect true/false')
  .describe('p', 'Pin via Pinata pinning service; must supply apikey and secretkey via environment variables or commandline arguments. Will attempt to read from env first, from: PIN_API_KEY and PIN_SECRET_KEY.')
  .describe('a', 'Pinata API key - apikey used to pin to Pinata.cloud service')
  .describe('e', 'Pinata secret key - secretkey used to pin to Pinata.cloud service')
  .describe('s', 'Path to secrets.json')
  .describe('o', 'Output path and filename')
  .help('h')
  .alias('h', 'help')
  .showHelpOnFail()
  .demand(0).argv;

(async () => {
  try {
    await procBldr(argv);
    console.log(`Package successfully created.`);
  } catch (err) {
    console.error(`Failed to create pacakge. ${err}`);
  }
})();