//polyfill for array methods

//polyfill for forEach
Array.prototype.kiranForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
let arr = [1, 2, 3, 4];
arr.kiranForEach((val) => console.log(val));

//polyfill for map
Array.prototype.kiranMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

console.log(
  arr.kiranMap((element) => element * 2),
  "map"
);

//polyfill for filter
Array.prototype.kiranFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

console.log(
  arr.kiranFilter((element) => element > 2),
  "filter"
);

//polyfill for find
Array.prototype.kiranFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

console.log(
  arr.kiranFilter((element) => element > 1),
  "find"
);

//polyfill for reduce
Array.prototype.kiranReduce = function (cb, intitalValue) {
  let accumulator = intitalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

console.log(
  arr.kiranReduce((acc, cur) => acc + cur, 0),
  "reduce"
);

//polyfill for objects

const test = {
  a: 123,
  b: 456,
};

function tester(a, b) {
  return `a:${this.a} and b:${this.b} other ${a} and ${b}`;
}

//polyfill bind
Function.prototype.kiranBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};

let test1 = tester.kiranBind(test, 20, 30);
console.log(test1(), "bind");

//polyfill call
Function.prototype.kiranCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};
console.log(tester.kiranCall(test, 20, 30), "call");

//polyfill apply
Function.prototype.kiranApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};

console.log(tester.kiranApply(test, [20, 30]), "apply");
