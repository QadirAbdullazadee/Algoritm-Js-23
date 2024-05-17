//1. Bir funksiya yazın həmən funksiya parametr olaraq bir cümlə qəbul etsin və cümlədəki hər sözün ilk hərfini böyük hərfə çevirsin.

// function herSozunIlkHerfiniBuyukYap(cumle) {
//   let sozler = cumle.split(" ");
//   console.log(sozler);
//   for (let i = 0; i < sozler.length; i++) {
//     sozler[i] = sozler[i].charAt(0).toUpperCase() + sozler[i].slice(1);
//   }
//   return sozler.join("  ");
// }

// let cumle = "başlangıcı böyük həriflə başlayan bir cümlə yazdım";
// let yeniCumle = herSozunIlkHerfiniBuyukYap(cumle);
// console.log(yeniCumle);

//2. Daxil olan stringin palindrom olub olmadigini yoxlayan funksiya yazın və boolean dəyər qaytarsın.

// function palindromFunction() {
//   let val = prompt("enter word");
//   let text = val.split("").reverse().join("");

//   if (val.toLowerCase() === text.toLowerCase()) {
//     console.log(`${text} is a palindrome`, true);
//   } else {
//     console.log(`${text} is not a palindrome`, false);
//   }
//   console.log(text);
// }
// palindromFunction();



// function palindromFunction() {
//   let val = prompt("enter word");
//   let text = val.toLowerCase().split("");
//   let isPalindrome = true;

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== text[text.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//   }

//   if (isPalindrome) {
//     console.log(`${val} is a palindrome`);
//   } else {
//     console.log(`${val} is not a palindrome`);
//   }
// }

// palindromFunction();


/*EXTRA 20 point3. Bir funksiya yazın həmən funksiya 3 parametr qəbul etsin 1-ci hər hansı bir string ex: "Jhon Doe",  2-ci bir herfden ibaret strnig ex: "a" və ya "T", 3-cü  isə true və ya false  dəyəri qəbul etsin. daha sonra funksiya gələn birinci stringin içində gəzərək ikinci stringin olduğu hissələri tapıb onları gələn 3-cü parametrə (true və ya false) görə böyük yada kiçik hərfə çevirsin sonda isə dəyişdirilmiş stringi qaytarsın.
 
ex 1: modifyString("Jhon Doe", "e", true) // output: "Jhon DoE"

ex 2: modifyString("Jhon Doe", "j", false) // output: "jhon Doe"

ex 3: modifyString("Jhon Doe", "o", true) // output: "jhOn DOe"

*/

// function name(name, word, boolean) {


  
// }
