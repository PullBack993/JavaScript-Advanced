function solution (num) {
    console.log(num)
    return function (n){
        return num + n
    }
}


// let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));


let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));


// const sayHello = function () {
//   return function () {
//      console.log("Hello!");
//   }
// }	

// const myFunc = sayHello();
// myFunc(); // Hello!
