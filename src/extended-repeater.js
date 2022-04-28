const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) { 
  let repeatTimes=1;
  let separator='+';
  let addition='';
  let additionRepeatTimes=1;
  let additionSeparator='|';
  let result='';

  if(options.repeatTimes !== undefined){
    repeatTimes=options.repeatTimes;
  }
  if(options.separator !== undefined){
    separator=options.separator;
  }
  if(options.addition !== undefined){
    addition=options.addition;
  }
  if(options.additionRepeatTimes !== undefined){
    additionRepeatTimes=options.additionRepeatTimes;
  }
  if(options.additionSeparator !== undefined){
    additionSeparator=options.additionSeparator;
  }

  for(let i=0;i<repeatTimes;i++){
    result+=str;
    if(addition!==''){
      for(let j=0;j<additionRepeatTimes;j++){
        result+=addition;
        if(j+1!=additionRepeatTimes){
          result+=additionSeparator;
        }
      }      
    }
    if(i+1!=repeatTimes){
      result+=separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
