const pkgBldr = require('./procedure-builder-procedure/index');
const fs = require('fs');
const yargs = require('yargs');
const { createCipheriv } = require('crypto');
require('dotenv').config();

/*
{ input :{
  procedureCode: "code of the procedure",
  encryptKey: "publicKey used to encrypt the secrets - will identify decrypt key on Trustack network ",
  doPublish: 'true/false - assume true, really only checks for false, to skip publishing to IPFS for CLI'
}  }
 */

module.exports = async function (argv) {

  let input = {
    encryptKey: "",//"publicKey used to encrypt the secrets - will identify decrypt key on Trustack network ",
    doPublish: false //'true/false - assume true, really only checks for false, to skip publishing to IPFS for CLI'
  };

  let secret = {
    pinataApiKey: '',
    pinataSecretApiKey: '',
  }

  if (argv.c) {
    let code = fs.readFileSync(argv.c);
    input['procedureCode'] = {};
    input.procedureCode[argv.c] = code.toString();
  } 
  else if ( argv._[0]){
    input['procPath'] = argv._[0];
  }

  if(argv.o){
    input['output'] = argv.o;
  }
  
  if (argv.k) {
    let key = fs.readFileSync(argv.k);
    input.encryptKey = key.toString();
  } 
  
  input.doPublish = argv.i == null ? false : true;

  /*
  PIN_API_KEY and PIN_SECRET_KEY.
  */
 try{

  if(argv.s){
    input['secretsJsonPath'] = argv.s;
    let secretsObj = fs.readFileSync(argv.s);
    input['secrets'] = JSON.parse(secretsObj);
  }
  if (argv.p) {
    let isApiKeyMissing = false;
    let isSecretKeyMissing = false;

    if(process.env.PIN_API_KEY){
      secret.pinataApiKey = process.env.PIN_API_KEY;
    }
    else if(argv.a != null){
      secret.pinataApiKey = argv.a;
    }
    else {
      isApiKeyMissing = true;
    }

    if(process.env.PIN_SECRET_KEY){
      secret.pinataSecretApiKey = process.env.PIN_SECRET_KEY;
    }
    else if(argv.e != null)
    {
      secret.pinataSecretApiKey = argv.e;
    }
    else{
      isSecretKeyMissing = true;
  
    }


    if(isApiKeyMissing || isSecretKeyMissing){
      isApiKeyMissing == true ? 
        console.warn('Missing Pinata API key via `PIN_API_KEY` environment variable or -a/--apikey on the commandline.') : 0;
      isSecretKeyMissing == true ? 
        console.warn('Missing Pinata secret key via `PIN_SECRET_KEY` environment variable or -s/--secretkey on the commandline.') : 0 ;
      return;
    }

    // input.doPublish = true;
    await pkgBldr(input, secret);
  }
  else {
    await pkgBldr(input);
  }
} catch(err){
  console.error(err);
}
}