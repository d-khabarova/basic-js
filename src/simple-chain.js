const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],

  getLength() {
    
    return this.arr.length;
  },
  addLink( value ) {
    if(arguments.length){    
      value=String(value);      
    } else{      
      value='';
    }         
    this.arr.push(value);  
    return this;
  },
  removeLink( position ) {    
    if(typeof(position)!='number' || position<=0 || this.getLength()<position){      
      this.arr=[];
      throw new Error("You can't remove incorrect link!"); 
      
    }
    else{
      this.arr.splice(position-1,1);
    }   
    return this; 
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain="";
    for(let i=0;i<this.getLength();i++){
      chain+=`( ${this.arr[i]} )`;
      if((i+1)!=this.getLength()){
        chain+='~~';
      }
    }
    for(let i=0;i<this.getLength();i++){
      this.arr.shift();
    }
    this.arr=[];    
    return chain;
  }
};


module.exports = {
  chainMaker
};
