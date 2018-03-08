const RSAEncrypt = require("./utils/crypto").encrypt;
const RSADecrypt = require("./utils/crypto").decrypt;
const AESEncrypt = require('./utils/aes').AESEncrypt;
const AESDecrypt = require('./utils/aes').AESDecrypt;

const str = "哈哈";

// AES随机秘钥生成算法16位字符拼接
const generateMixed = function() {
    var jschars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var key = "";
    for (var i = 0; i < 16; i++) {
        var id = Math.ceil(Math.random() * 35);
        key += jschars[id];
    }
    return key;
}

let AESencryptStr = AESEncrypt(str);
let AESdecryptStr = AESDecrypt(AESencryptStr);
let RSAEncryptStr = RSAEncrypt(str);
let RSADecryptStr = RSADecrypt(RSAEncryptStr);
console.log("AES加密后：" + AESencryptStr);
console.log("AES解密后：" + AESdecryptStr);
console.log("RSA加密后：" + RSAEncryptStr);
console.log("RSA解密后：" + RSADecryptStr);