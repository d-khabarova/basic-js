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
  constructor(type=true){
    this.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.type=type;
    this.table=[];
  }

    generateTable() {
        for (let i=0;i<this.alphabet.length;i++) {
            let row=this.alphabet.slice(i);
            row+=this.alphabet.slice(0, i);
            this.table.push(row);
        }
    }

    getTable() {
        return this.table;
    }

    repeatString(key, message){
      let j=-1;
      let newKey="";
      for(let i=0;i<message.length;i++){        
        if(j<key.length-1){          
          j++;
        }else{
          j=0;
        } 
        newKey+=key[j];       
      }
      return newKey;
    }

    encrypt(message, key) {      
        if(message=='' || key=='' || message===undefined || key===undefined){
          throw new Error('Incorrect arguments!');
        }
        else{
          message=message.toUpperCase();
          key=key.toUpperCase();          
          let encryptMessage="";
          let newKey=this.repeatString(key, message);          
          this.generateTable();    
          let jt=0;      
          for (let it=0;it<message.length;it++) {            
            if(this.alphabet.includes(message[it])){
              let i=this.alphabet.indexOf(message[it]);
              let j=this.alphabet.indexOf(newKey[jt]);
              jt++;              
              encryptMessage+=this.table[i][j];
            }
            else{
              encryptMessage+=message[it];
            }
              
          }
          let result='';
          let revArr=[];
          if(!this.type){            
            let arr=encryptMessage.split(' ');
            arr.reverse();
            arr.forEach(element => {
              revArr.push(element.split('').reverse().join(''));                            
            });
            result=revArr.join(' ');           
            
          }
          else{
            result=encryptMessage;
          }
          
          return result;
        }        
    }

    decrypt(message, key) {
      if(message=='' || key=='' || message===undefined || key===undefined){
        throw new Error('Incorrect arguments!');
      }
      else{
        message=message.toUpperCase();
        key=key.toUpperCase();        
        let decryptMessage="";
        let newKey=this.repeatString(key, message);
        this.generateTable();
        let jt=0;
        for (let it=0;it<message.length;it++) {
          if(this.alphabet.includes(message[it])){               
            let i=this.alphabet.indexOf(newKey[jt]);
            let j=this.table[i].indexOf(message[it]);
            jt++;             
            decryptMessage+=this.alphabet[j];
          }
          else{
            decryptMessage+=message[it];
          }
        }
        let result='';
        let revArr=[];
          if(!this.type){            
            let arr=decryptMessage.split(' ');
            arr.reverse();
            arr.forEach(element => {
              revArr.push(element.split('').reverse().join(''));                            
            });
            result=revArr.join(' ');            
          }
          else{
            result=decryptMessage;
          }          
          return result;
      }        
    }
}

module.exports = {
  VigenereCipheringMachine
};
