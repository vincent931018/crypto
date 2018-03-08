/**
 * RSA加密
 * @auth caowengcheng
 * @date 2018/03/07
 */

const Rsa = require('node-rsa');
/**
 * 引入RSA公钥、私钥
 */
const private = require('../config').private;
const public = require('../config').public;

const public_key = new Rsa(public);

const private_key = new Rsa(private);

public_key.setOptions({encryptionScheme: 'pkcs1'});

private_key.setOptions({encryptionScheme: 'pkcs1'});

var encrypt = function(text) {
    if(!text) {
        throw new Error("请输入明文");
        return;
    }
    return public_key.encrypt(text, 'base64');
}


var decrypt = function(text) {
    if(!text) {
        throw new Error("请输入密文");
        return;
    }
    return private_key.decrypt(text, 'utf8');
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;