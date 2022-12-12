Array.prototype.SuffleArray=function(){
    let array=this;
    
    for(let i=array.length-1; i>=0; i--){
      let randomPosition=Math.floor(Math.random()*i);
      let currentPostion=array[i];
         array[i]=array[randomPosition];
         array[randomPosition]=currentPostion;
    }
    
    console.log(array);
    return array;
  }
  
  let arr=[1,2,3,4,5,5];
  arr.SuffleArray();


console.log("hi");