const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result={};
  
  for(let i=0;i<domains.length;i++){
    let arr=domains[i].split('.');
    arr.reverse();
    let setting="";
    let sumSet=new Array(arr.length).fill(1);
    
    for(let j=0;j<arr.length;j++){    
      sum=1;
      for(let k=i+1;k<domains.length;k++){
        if(domains[k].includes(arr[j])){
          sum++;         
        }   
        sumSet[j]=sum;
      }
      
      setting+="."+arr[j];
      if(!result.hasOwnProperty(setting)){
        result[setting]=sumSet[j];
      }      
    }
  }
  
return result;
}

module.exports = {
  getDNSStats
};
