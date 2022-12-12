//...............STRING....................//

//..................1.................//

   //method name length//
  
String.prototype.Stringlength=function(){
   let StringlengthCount=0;
   const StringArray=this.split("");
  
   for (let i=StringArray.length; i>0; i--){
    StringlengthCount++;
    StringArray.pop();
    
   }
   return StringlengthCount;
}
const inputValue="javaScriptProgramming";
console.log("Method : String Length");
console.log("input :"+inputValue);
console.log("output :"+inputValue.Stringlength());


//..................2.................//

 //method name removeVowel//

String.prototype.RemoveVowel=function(){
    const WordArray=this.split("");
    let vowelArray=[];
    for(let j=0; j<WordArray.length; j++){
        if(WordArray[j]=='a' || WordArray[j]=='e' || WordArray[j]=='i' || WordArray[j]=='o' || WordArray[j]=='u'){

        }
        else{
           vowelArray.push(WordArray[j]);
        }
    }
    return vowelArray.join("");

}

const inputWord="JavaScript";
console.log("Method : String vowel remove");
console.log("input :"+inputWord);
console.log("output :"+inputWord.RemoveVowel());


//................3.....................//

// method name substring//

String.prototype.subString=function(start,end){
    const input=this.split("");
    this.start=start;
    this.end=end;
    let output="";
    
    for(let i=this.start; i<=this.end; i++){
       output+=input[i];
    }
   return output;
}
const subStringWord="javaScript";
console.log("Method : String substring");
console.log("input :"+subStringWord);
console.log("output :"+subStringWord.subString(0,3));


//..............4..................//
//Method name tolowercase//

String.prototype.tolowercase=function(){
    let lowercaseword=this.split("");
    let alphabetLower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let alphabetUpper=['A','B','C','D',"e",'F',"G","H",'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     for(let l=0; l<lowercaseword.length; l++){
        for(let a=0; a<alphabetLower.length; a++){
            if(lowercaseword[l]==alphabetUpper[a]){
                lowercaseword[l]=alphabetLower[a];
            }
        }
     }

     return lowercaseword.join("");

}

const LowerCaseWord="JAVASCRIPT";
console.log("Method : String stringtolowercase");
console.log("input :"+LowerCaseWord);
console.log("output :"+LowerCaseWord.tolowercase());

//..............5..................//
//Method name toUPPERcase//

String.prototype.touppercase=function(){
    let uppercaseword=this.split("");
    let alphabetLower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let alphabetUpper=['A','B','C','D',"e",'F',"G","H",'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     for(let l=0; l<uppercaseword.length; l++){
        for(let a=0; a<alphabetLower.length; a++){
            if(uppercaseword[l]==alphabetLower[a]){
                uppercaseword[l]=alphabetUpper[a];
            }
        }
     }

     return uppercaseword.join("");

}

const UpperCaseWord="javascript";
console.log("Method : String stringtouppercase");
console.log("input :"+UpperCaseWord);
console.log("output :"+UpperCaseWord.touppercase());

//.......................................................................................................................................//
                 //....................ARRAY............................//

    //......................1........................//
         // Method name Array length //

    Array.prototype.ArrayLength=function(){
        let arrWord=[];
        arrWord=this;
        let lengthCount=0;
        for (let a of arrWord){
            lengthCount++;
        }
   
        return lengthCount;
    }
    
    console.log("Method name ArrayLength");
    const ArrWord=['j','a','v','a',' ','s','c','r','i','p','t'];
    console.log("input :"+ArrWord);
    console.log("output :"+ArrWord.ArrayLength());

    //.....................2.......................//

    //Method name reverse//

    Array.prototype.Reverse=function(){
        
        let arrayWords=this;
        let arrayReverseWords=[];
        
        for(let a=arrayWords.length-1; a>=0; a--){
            arrayReverseWords.push(arrayWords[a]);
        }
        return arrayReverseWords;
    }
    console.log("Method : Array Reverse");
    const arrReverseWord=['j','a','v','a'];
    console.log("input :"+arrReverseWord);
    console.log("output :"+arrReverseWord.Reverse());

    //..................3..................//
    //Method name toString//
    Array.prototype.tostring=function(){
        let arrValues=this;
        let convertString="";
        for(let b=0; b<arrValues.length; b++){
           convertString+=arrValues[b];
        }
        return convertString;

    }
    
    console.log("Method : Array toString");
    const arrvalue=['j','a','v','a',' ','s','c','r','i','p','t'];
    console.log("input :"+arrvalue);
    console.log("output :"+arrvalue.tostring());

      //..................4..................//
      //Method name shift//

      Array.prototype.arrayShift=function(){
         const shiftArrayValue=this;
         let shiftarrayvalue=[];
         for(let k=1; k<shiftArrayValue.length; k++){
            shiftarrayvalue.push(shiftArrayValue[k]);
         }
         return shiftarrayvalue;
      }
      
      console.log("Method : Array Shift");
      const shiftArray=["Mango","banana","Apple"];
      console.log("input :"+shiftArray);
      console.log("output :"+shiftArray.arrayShift());


            //..................5..................//
      //Method name pop//

      Array.prototype.arrayPop=function(){
        const popArrayValue=this;
        let poparrayvalue=[];
        for(let k=0; k<popArrayValue.length-1; k++){
           poparrayvalue.push(popArrayValue[k]);
        }
        return poparrayvalue;
     }
     
     console.log("Method : Array pop");
     const popArray=["Pineapple","jackfruit","Apple"];
     console.log("input :"+popArray);
     console.log("output :"+popArray.arrayPop());


     //....................................................................Math.....................................................................//

       //.................1....................//
       //Method name math power//

       Math.Power=function(a,b){
        let ans=a;
            for(let p=0; p<b-1; p++){
                 ans=ans*a;
            }
            return ans;
       }
      
       console.log("Method : Math Power");
       console.log("input : (2,4)");
       console.log("output :"+Math.Power(2,4));
       

    //.....................2....................//
   // Method name absolute//
    
    Math.absolute=function(a){
        if(a<0){
            return -a;
        }
        else{
            return a;
        }
       
    }
    console.log("Method : Math Abs");
    console.log("input :-109876");
    console.log("output :"+Math.absolute(-109876));

    //....................3......................//
    //Method name minimum//

    Math.minimum=function(minArr){
     const MinArr=minArr;
     let min=MinArr[0];
     for(let a=0; a<MinArr.length; a++){
        if(min>MinArr[a]){
            min=MinArr[a];
        }
     }
     return min;
    }

    console.log("Method : Math Minimum");
    const minimumArray=[3,4,20,9,3,2,1];
    console.log("input :"+minimumArray);
    console.log("output :"+Math.minimum(minimumArray));

        //....................4......................//
          //Method name maximum//

    Math.maximum=function(maxArr){
        const MaxArr=maxArr;
        let max=MaxArr[0];
        for(let a=0; a<MaxArr.length; a++){
           if(max<MaxArr[a]){
               max=MaxArr[a];
           }
        }
        return max;
       }
    
       console.log("Method : Math maximum");
       const maximumArray=[3,4,20,9,3,2,0];
       console.log("input :"+maximumArray);
       console.log("output :"+Math.maximum(maximumArray));

    //.......................5.................................//
      //Method name Pi//

      Math.pi=function(){
        return 3.14;
      }
      console.log("Method : Math pi");
      console.log("output :"+Math.pi());


     