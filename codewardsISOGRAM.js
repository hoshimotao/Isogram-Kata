function isIsogram(str){

  let str1 = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  console.log(str1);
  if(str1 === null){return true;}
  else{return false;} 
  }
  isIsogram("bewz");