const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  
  getLength() {
    return chain.length;
  },
  
  addLink(value) {
   this.chain.push(`(${value ? value : ' '})`);
   return this;
  },
  
  removeLink(position) {
  try {
      if (position > this.chain.length && position <= 0) throw `You can't remove incorrect link!'`
  }
  catch (err) {
      return err;
  }
  
  this.chain.splice(position-1, 1);
  return this;
  },
  
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  
  finishChain() {
   let strChain = '';
   for (let i=0; i<this.chain.length; i++) {
       strChain += (i>0 ? '~~' : '') + this.chain[i];
   }
   return strChain;
  }
};

module.exports = {
  chainMaker
};
