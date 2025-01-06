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
    if (!message || !key) throw new Error('Incorrect arguments!');
    key = key.toUpperCase();
    let indKey = 0;

    message = message.split('').map((item, ind, arr) => {

      item = item.toUpperCase();
      if (item >= 'A' && item <= 'Z') {
        // console.log(item, '=', '           ', key[indKey % key.length]);
        let increment = key[indKey % key.length].charCodeAt() - 'A'.charCodeAt();
        let codeItem = item.charCodeAt();
        let newItemCode = codeItem + increment;
        // console.log(item, '=', codeItem, '           ', key[indKey % key.length], '=', increment, '            ',);
        // console.log(item, '==', newItemCode > 90 ? 'A'.charCodeAt() - 1 + newItemCode % 90 : newItemCode, '\n');

        indKey++;
        return item = String.fromCodePoint(newItemCode > 90 ? 'A'.charCodeAt() - 1 + newItemCode % 90 : newItemCode);
      }
      return item;
    }).join('')

    return this.direct ? message : message.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!')
    key = key.toUpperCase();
    let indKey = 0;

    encryptedMessage = encryptedMessage.split('').map((item) => {

      item = item.toUpperCase();
      if (item >= 'A' && item <= 'Z') {
        let increment = key[indKey % key.length].charCodeAt() - 'A'.charCodeAt();
        let codeItem = item.charCodeAt();
        let newItemCode = codeItem - increment;
        // console.log(item, '=', codeItem, '           ', key[indKey % key.length], '=', key[indKey % key.length].charCodeAt(), '         ', 65 - newItemCode);
        // console.log(item, '==', newItemCode < 65 ? 90 - ('A'.charCodeAt() - newItemCode) + 1 : newItemCode, '\n');

        indKey++;
        return item = String.fromCodePoint(newItemCode < 65 ? 90 - ('A'.charCodeAt() - newItemCode) + 1 : newItemCode);
      }
      return item;
    }).join('')


    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
