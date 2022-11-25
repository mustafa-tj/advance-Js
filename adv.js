var obj = {num:2};
var obj2 = {num:5};
var addToThis = function(a,b,c){
    return this.num + a + b + c;
};

// Call
console.log(addToThis.call(obj,3,4,6));
console.log(addToThis.call(obj,38,4,1));

// Apply
var arr = [2,4,6]
console.log(addToThis.apply(obj,arr));
console.log(addToThis.apply(obj2,arr));

// Bind
var bound = addToThis.bind(obj);
console.log(bound(1,2,3));


// Task
var student ={age:20};

var x = function(){
    return this.age;
};

var readAge = x.bind(student);
console.log(readAge())


// Currying
// let multiply = function(x,y){
//     console.log(x * y);
// };


// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5);



// let multiplyByThree = multiply1(3);
// multiplyByThree(5);

// another way of function currying
let multiply = function(x){
    return function(y){
        console.log(x * y);
    };
};

let multiBy2 = multiply(2);
multiBy2(4);

let multiBy3 = multiply(3);
multiBy2(4);