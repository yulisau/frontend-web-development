//throwing an error:
// throw new Error('This is an error!');

/*handling errors: try...catch*/

// errors not handled
/*const input = document.getElementById('input');
input.addEventListener('change', function(){
    if (input.value > 10){
        throw new Error('Woah that is too big!'); 
    }
console.log('Thanks, that is a good number'); 
});
*/

// errors are handled
// const input = document.getElementById('input');
/* this function handles the input value processing
 * has the potential to throw and error
 */

// function handleInput(){
//     if (input.value > 10){
//         throw new Error('Woah that is too big!');
//     }
// console.log('Thanks, that is a good number');
// }
// input.addEventListener('change', function() {
//     try {
//         // try the code
//     handleInput();
//     // handle the error
// } catch(error) {  //error variable can be whatever you want: e, err, error, etc.
//     console.log(error);
// } finally {
//     //this code will run after handling the error
// }

// // maybe there's more code :]
// });

// synchronous code
// function takesAReallyLongTime (){
//     let sum = 0;
//     for(let i = 0; i < 1000000000; i++){
//         sum += i;
//     }
//     console.log("the really big sum is ${sum}");
//     return sum;
// }
// const result = takesAReallyLongTime();
// console.log(result);
// console.log('this log takes place after a takesAReallyLongime');

// async code using setTimout
// function takesAReallyLongTime() {

// }
// setTimeout(function() {
//   const result = takesAReallyLongTime();
//   console.log(result);
// });
// console.log("this log takes place after a takesAReallyLongTime");

// async with promises
// function takesAReallyLongTimeWithPromises() {
//   return new Promise(function (resolve, reject) {
//     let sum = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       sum += i;
//     }
//     console.log("the really big sum is ${sum}");
//     resolve(sum);
//   }); // first parameter is a function
// }

// takesAReallyLongTimeWithPromises()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// console.log("this log takes place after a takesAReallyLongTime");

// async code with async funciton
// async function takesAReallyLongTimeAsync(){
//       let sum = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     sum += i;
//   }
//   console.log("the really big sum is ${sum}");
//   return sum;
// }

// // force it to be synchronous with await
// const result= await takesAReallyLongTimeAsync();
// console.log(result);
// console.log("this log takes place after a takesAReallyLongTime");

// do it best with requestAnimationFarame
// locks into a monitor frame rate to animate in a browser easier/better 
// let counter = 0;
// function loop() {
//   console.log("loop!");
//   console.log(counter);
//   counter++;

//   requestAnimationFrame(loop);
// }

// requestAnimationFrame(loop);
