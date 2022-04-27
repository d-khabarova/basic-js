const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) { 
  let arrResult = [];
  let noAction = false;
  if(Array.isArray(arr)){
    for(let i=0; i<arr.length; i++){
      switch (arr[i]) {
        case '--double-next':
          if(arr[i+1] !== undefined){
            arrResult.push(arr[i+1]);
          }           
          break;
        case '--double-prev':
          if(arr[i-1] !== undefined && !noAction){
            arrResult.push(arr[i-1]);
          }       
          break;          
        case '--discard-prev':
          if(i!=0 && !noAction){
            arrResult.pop();
          }          
          break;
        case '--discard-next':          
          if(arr[i+2]=='--double-prev' || arr[i+2]=='--discard-prev'){
            noAction=true;
          }
          i++;
          break;
        default:
            arrResult.push(arr[i]);               
          break;
      }
    }
  }
  else{
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  return arrResult;
}

module.exports = {
  transform
};
