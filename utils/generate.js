/**
 * nodejs生成RSA公钥、私钥
 * @auth caowengcheng
 * @date 2018/03/07
 */
var fs = require('fs');
var ursa = require('ursa');

var modulusBit = 512;
var key  = ursa.generatePrivateKey(modulusBit, 65537);

var privatePem = ursa.createPrivateKey(key.toPrivatePem()); //生成私钥
var privateKey = privatePem.toPrivatePem('utf8');
fs.writeFile('private.pem', privateKey, 'utf8', function(error){
    if(error){
        throw error;
    }
    console.log('\n私钥privateKey已经保存\n');
    console.log('\n私钥privateKey：\n' + privateKey);
});


var publicPem = ursa.createPublicKey(key.toPublicPem());   //生成公钥
var publicKey = publicPem.toPublicPem('utf8');
fs.writeFile('public.pub', publicKey, 'utf8', function(error){
    if(error){
        throw error;
    }
    console.log('\n私钥publicKey已经保存\n');
    console.log('\n私钥publicKey：\n' + publicKey);
});