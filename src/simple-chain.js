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
    if (value === undefined) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length || position === 4) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
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

module.exports = {
  chainMaker
};
