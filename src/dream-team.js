const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {  
  let teamName = '';  
  let sortTeamName = '';  
  if(Array.isArray(members)){
    members.forEach(name => {
      if (typeof(name)=='string'){
        let nameNoSpases=name.trim()
        teamName+=nameNoSpases[0].toUpperCase();
      }
    });
  sortTeamName = teamName.split('').sort().join('');
  return sortTeamName;
  }
  else{
    return false;
  }
  
}

module.exports = {
  createDreamTeam
};
