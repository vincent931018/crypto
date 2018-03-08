/** 
 * RSA公钥、私钥配置
 * AES秘钥配置
 * @auth caowengcheng
 * @date 2018/03/07 12:26:00
 */
const fs = require('fs');

// RSA公钥、私钥
const private = fs.readFileSync('./private.pem').toString();
const public = fs.readFileSync('./public.pub').toString();
// AES秘钥
const password = "ZFR6X2OQQK669S4F";


exports.private = private;
exports.public = public;
exports.password = password;