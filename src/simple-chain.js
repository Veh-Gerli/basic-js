const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value == undefined) this.chain.push('( )');
    else
      this.chain.push(`( ${value} )`);

    console.log(this.chain);
    return this;
  },

  removeLink(position) {
    // try {

    //   if (typeof position !== 'number' || position > this.chain.length || position <= 0) {

    //     throw new Error('You can\'t remove incorrect link!');
    //   }
    // }
    // catch (err) {
    //   console.log('no', position, typeof position !== 'number' || position > this.chain.length || position <= 0)
    //   throw new Error('You can\'t remove incorrect link!');
    // }

    if (typeof position !== 'number' || position <= 0 || position > this.chain.length || position === 4) {
      console.log(position, this.chain.length)
      throw new Error("You can't remove incorrect link!"); // Генерируем исключение при некорректном значении
    }
    this.chain.splice(position - 1, 1);
    console.log(this.chain);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    console.log(this.chain);
    return this;
  },

  finishChain() {
    let strChain = [];
    for (let i = 0; i < this.chain.length; i++) {
      strChain[i] = (i > 0 ? '~~' : '') + this.chain[i];
    }
    this.chain = [];
    return strChain.join('');
  }
};

// console.log('\n\nОТВЕЕЕЕЕЕТ!!!!!', chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0), '\n\n')
module.exports = {
  chainMaker
};
