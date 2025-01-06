const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    let keyLength = key.length;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char >= 'A' && char <= 'Z') {
        const messageCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCode = key[keyIndex % keyLength].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(((messageCode + keyCode) % 26) + 'A'.charCodeAt(0));
        result += encryptedChar;
        keyIndex++;
      } else {
        result += char; // Non-alphabetic characters are added unchanged
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;
    let keyLength = key.length;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char >= 'A' && char <= 'Z') {
        const encryptedCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCode = key[keyIndex % keyLength].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(((encryptedCode - keyCode + 26) % 26) + 'A'.charCodeAt(0));
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char; // Non-alphabetic characters are added unchanged
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
