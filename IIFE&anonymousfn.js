// 1)Print odd numbers in an array
// IIFE
(function(input){
  for(let i=0;i<input.length;i++ ){
    if(input[i]%2!=0){
        console.log(input[i]);
    }
  }
})([1,2,3,4,5,6,7,8,9,10]);
// Anonymous
let fun1=function(fun1){
    for(let i=0;i<fun1.length;i++ ){
        if(fun1[i]%2!=0){
            console.log(fun1[i]);
        }
}
}
fun1([1,2,3,4,5,6,7,8,9,10]);


// 2.Convert all the strings to title caps in a string array
// IIFE function:
(function(word){
    word=word.toLowerCase().split(' ');
    for(i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
    }return console.log(word.join(' '));

})("SUNIL IS MY NAME");

// anonymous function:
let words=function(str){
    str= str.toLowerCase().split(' ');
     for(i=0;i<str.length;i++){
         str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
       }return console.log(str.join(' '));
}
words("I AM LEARNING THE MERN FuLL STACK DEVLOPMENT");

// 3.Sum of all numbers in an array
//  IIFE function:
(function(sum){
    let sum1=0;
     for(i=0;i<sum.length;i++){
        sum1=sum[i]+sum1;
     }return console.log(sum1)
})([1,2,3,4,5,6,7,8,9]);
// Anonymous 
let sum2=function(sum2){
    let sum3=0;
    for(i=0;i<sum2.length;i++){
       sum3=sum2[i]+sum3;
    }return console.log(sum3)
}
sum2([11,12,13,14,15,16,17,18])

// 4.Return all the prime numbers in an array

// IIFE function:
let n=34;
(function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(n);

// anonymous function 
let n1=function(n1){
    for(let i=2;i<=n1;i++){
        let Num=0;
        for(j=2;j<i;j++){
       if(i%j==0){
        Num=1;
        break;
       }
        } if(Num==0){
            console.log(i)
        }
    }
};
n1(50);

// 5.Return all the palindromes in an array
 // IIFE FUNCTION :
(function(b){
    let c=b.split("").reverse().join("");
    if(b===c){
        console.log("palindrome")
    }else if(b!==c){
        console.log("not a palindrome")
    }
})("madam")

// Anonymous function :
let pal=function(b){
    let c=b.split("").reverse().join("");
    if(b===c){
        console.log("palindrome")
    }else if(b!==c){
        console.log("not a palindrome")
    }
}
pal("hello");

// 6.Return median of two sorted arrays of the same size.





// 7.Remove duplicates from an array

// IIFE function:


 // Anonymous Function 
  let duplicate= function(array){
        let dup = [...new Set(array)];
        console.log(dup);
      }
duplicate([1,1,2,3,4]);
// IIFE  function :                
(function(array){
        let dup = [...new Set(array)];
        console.log(dup);
       })([1,1,2,3,4]);

// 8.Rotate an array by k times

// IIFE FUNCTION:
let Arry=[1,2,3,4,5];
let N=Arry.length;
let k=2;
(function(){
    k=k%N;
    for(let i=0;i<N;i++){
        if(i<k){
            console.log(Arry[N+i-k]+" ");
        }else{
            console.log((Arry[i-k])+" ")
        }
    }
    
})(Arry,N,k)

// ANONYMOUS FUNCTION:
let rotate=function(){
    k=k%N;
    for(let i=0;i<N;i++){
        if(i<k){
            console.log(Arry[N+i-k]+" ");
        }else{
            console.log((Arry[i-k])+" ")
        }
    }
};

rotate(Arry,N,k);
