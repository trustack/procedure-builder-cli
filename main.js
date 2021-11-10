const pkgBldr = require('./procedure-builder-procedure/index');
const fs = require('fs');
/*
{ input :{
  procedureCode: "code of the procedure",
  encryptKey: "publicKey used to encrypt the secrets - will identify decrypt key on Trustack network ",
  doPublish: 'true/false - assume true, really only checks for false, to skip publishing to IPFS for CLI'
}  }
 */

module.exports = function (argv) {

  let input = {
    procedureCode: "code of the procedure",
    encryptKey: "publicKey used to encrypt the secrets - will identify decrypt key on Trustack network ",
    doPublish: 'true/false - assume true, really only checks for false, to skip publishing to IPFS for CLI'
  };

  if (argv.p) {
    let code = fs.readFileSync(argv.p);
    input.procedureCode = code;
  } else if (argv.k) {
    let key = fs.readFileSync(arg.k);
    input.encryptKey = key;
  } else if (argv.i) {
    input.doPublish = argv.i == 'true' ? true : false;
  }

  pkgBldr(input);
}