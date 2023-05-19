// Do the below programs in arrow functions.

// 1.Print odd numbers in an array
 
// Arrow Function :

let odd=(input)=>{
    for(let i=0;i<input.length;i++ ){
        if(input[i]%2!=0){
            console.log(input[i]);
        }
  }
}
odd([1,2,3,4,5,6,7,8,9])

// 2.Convert all the strings to title caps in a string array

// Arrow Function :
let word=(str)=>{
    str= str.toLowerCase().split(' ');
    for(i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
      }return console.log(str.join(' '));
}
word("DAY FOUR TASK");

// 3.Sum of all numbers in an array

// Arrow Function :

let sumAdd=(sum2)=>{
    let sum3=0;
    for(i=0;i<sum2.length;i++){
       sum3=sum2[i]+sum3;
    }return console.log(sum3);
};
sumAdd([1,2,3,4,5,6,7,8,9]);

// 4.Return all the prime numbers in an array
// Arrow Function :
let Prime=(n1)=>{
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
Prime(50);

// 5.Return all the palindromes in an array

// Arrow Function :

let Palindrome=(b)=>{
    let c=b.split("").reverse().join("");
    if(b===c){
        console.log("palindrome")
    }else if(b!==c){
        console.log("not a palindrome")
    }
}
Palindrome("tenet");
