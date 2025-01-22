# Best JavaScript Interview Questions and Answers

### 1. What is JavaScript?
- JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language.
- It has a call stack, an event loop, a callback queue, and other APIs.
- V8 is the JavaScript runtime that includes a call stack and a heap.
- The heap is used for memory allocation, while the stack holds the execution context.
- DOM, `setTimeout`, and `XMLHttpRequest` are not part of the V8 source code.

### 2. Asynchronous Callbacks
- JavaScript code can sometimes take a long time to execute, potentially blocking page re-rendering.
- Asynchronous callbacks enable non-blocking behavior.
- The JavaScript runtime can only perform one task at a time.
- Browsers provide additional features like Web APIs to work alongside the runtime.
- In Node.js, these features are available as C++ APIs.
- The event loop checks the call stack and the callback queue.
- If the call stack is empty, the event loop pushes the first callback from the queue to the call stack.

### 3. Task Queue
- JavaScript can only execute one task at a time.
- Other tasks are queued in the task queue, waiting to be executed.
- When `setTimeout` is called, Web APIs run a timer and push the provided function to the task queue once the timer ends.
- These tasks are then pushed to the stack for execution.

### 4. The Event Loop
- JavaScript has a runtime model based on an event loop, responsible for executing code, collecting and processing events, and executing queued sub-tasks.
- The event loop pushes tasks from the task queue to the call stack.
- `setTimeout(func1, 0)` can defer a function until all pending tasks have been executed.
- You can observe these processes in action by visiting relevant online resources.

### 5. Call Stack, Task Queue, Web APIs, Callback Queue, and Event Loop
- The call stack is a data structure that records the function calls currently being executed.
- The call stack operates synchronously and follows a LIFO (Last In, First Out) structure.
- The call stack is single-threaded.
- `setTimeout` is a Web API provided by the browser to schedule tasks in the task queue.
- The task queue, also known as the callback queue, holds tasks waiting to be executed.

### 6. What is the difference between `setTimeout(0)` and `setInterval(0)`?
- **`setTimeout(0)`**: Schedules a single execution of a function after the current call stack is cleared and the event queue is processed.
- **`setInterval(0)`**: Schedules a function to execute repeatedly with a delay of approximately 0ms between each execution. In reality, the delay cannot be less than the browser’s minimum delay threshold (usually around 4ms).

```javascript
setTimeout(() => console.log("Executed after 0ms"), 0);
setInterval(() => console.log("Executed repeatedly with 0ms delay"), 0);
```

### 7. Explain Event Loops.
- The Event Loop in JavaScript handles asynchronous code execution.
- The process:
    1. Functions are pushed onto the **call stack** and executed.
    2. When asynchronous tasks (like `setTimeout`) complete, their callback is pushed into the **task queue**.
    3. The event loop checks if the call stack is empty. If so, it pushes the next callback from the task queue to the call stack for execution.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 0);

console.log("End");

// Output:
// Start
// End
// Callback
```

### 8. What is the difference between the call stack and the task queue?
- **Call Stack**: Holds the functions currently being executed.
- **Task Queue**: Stores callback functions waiting to be executed after the call stack is cleared.

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

// Output:
// A
// C
// B
```

### 9. What is the difference between a promise and a callback?
- **Callback**: A function passed as an argument to another function and executed later.
- **Promise**: An object representing a future value or completion of an async operation. Promises simplify error handling and chaining asynchronous tasks.

```javascript
// Callback Example
function fetchData(callback) {
    setTimeout(() => callback("Data fetched"), 1000);
}
fetchData(data => console.log(data));

// Promise Example
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});
fetchData.then(data => console.log(data));
```

### 10. What does `Promise.resolve()` do?
- It creates a promise that is resolved with a given value or another promise.

```javascript
Promise.resolve(42).then(value => console.log(value));
// Output: 42
```

### 11. What does `Promise.reject()` do?
- It creates a promise that is rejected with a specified reason.

```javascript
Promise.reject("Error").catch(reason => console.log(reason));
// Output: Error
```

### 12. Compare `Promise.resolve()` vs `Promise.reject()`.
- **`Promise.resolve()`**: Returns a resolved promise.
- **`Promise.reject()`**: Returns a rejected promise.

```javascript
Promise.resolve("Success").then(console.log);
Promise.reject("Failure").catch(console.log);

// Output:
// Success
// Failure
```

### 13. What is the critical rendering path?
- The sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen.

### 14. What is the difference between `let` and `var`?
- **`var`**: Function-scoped, hoisted with `undefined`, allows redeclaration.
- **`let`**: Block-scoped, hoisted without initialization, does not allow redeclaration in the same scope.

```javascript
var a = 10;
if (true) {
    var a = 20;
    console.log(a); // 20
}
console.log(a); // 20

let b = 10;
if (true) {
    let b = 20;
    console.log(b); // 20
}
console.log(b); // 10
```

### 15. Explain Block Scoping vs Function Scoping.
- **Block Scoping**: Variables defined with `let` or `const` are only accessible within the block.
- **Function Scoping**: Variables declared with `var` are accessible throughout the function.

```javascript
if (true) {
    let blockScoped = "I am block scoped";
    var functionScoped = "I am function scoped";
}
// console.log(blockScoped); // Error
console.log(functionScoped); // I am function scoped
```

### 16. What is a Closure?
- A closure is a function that "remembers" the variables from its lexical scope even when executed outside that scope.
- Lexical scoping allows a function to access variables from its parent function.

```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 17. What is the difference between a shallow copy and a deep copy?
- **Shallow Copy**: Copies only the first layer of properties.
- **Deep Copy**: Recursively copies all nested objects.

```javascript
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };
shallowCopy.b.c = 42;
console.log(obj.b.c); // 42 (shallow copy affected original)

const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 100;
console.log(obj.b.c); // 42 (deep copy unaffected original)
```

### 18. What is the difference between `==` and `===`?
- **`==`**: Performs type coercion.
- **`===`**: Strict equality, no type coercion.

```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

### 19. What is the difference between `null` and `undefined`?
- **`null`**: Explicitly set to represent "no value."
- **`undefined`**: A variable that has been declared but not initialized.

```javascript
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
```

### 20. What is functional programming?
- A paradigm where functions are treated as first-class citizens. Emphasizes immutability, pure functions, and higher-order functions.

```javascript
const double = x => x * 2;
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // [2, 4, 6]
```

### 21. What is a polyfill?
- A piece of code that adds functionality to older browsers that do not support it natively.

```javascript
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        return this.indexOf(search, start) !== -1;
    };
}
```

### 22. Explain the following concepts:

#### Compose
Combining functions to build a pipeline.

```javascript
const compose = (...functions) => input =>
    functions.reduceRight((acc, fn) => fn(acc), input);

const add5 = num => num + 5;
const multiplyBy2 = num => num * 2;
const addThenMultiply = compose(multiplyBy2, add5);
console.log(addThenMultiply(10)); // Output: 30
```

#### Memoization
Caching results to avoid recomputation.

```javascript
const memoize = fn => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // Retrieved from cache
```

#### Recursion
A function calling itself.

```javascript
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // 120
```

#### Map, Filter, Reduce
Functional array methods:

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x); // Map
const evens = numbers.filter(x => x % 2 === 0); // Filter
const sum = numbers.reduce((acc, x) => acc + x, 0); // Reduce
console.log(squared, evens, sum);
```

#### Pure Functions
Functions without side effects:

```javascript
const pureAdd = (a, b) => a + b;
console.log(pureAdd(3, 5));
```

### 23. Explain `call`, `bind`, and `apply`.
- **`call`**: Invokes a function with a specified `this` and arguments.
- **`apply`**: Similar to `call`, but takes arguments as an array.
- **`bind`**: Returns a new function with `this` bound.

```javascript
const person = { name: "Alice" };
function sayHello(greeting) {
function sayHello(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}
sayHello.call(person, "Hi"); // Hi, I am Alice
sayHello.apply(person, ["Hello"]); // Hello, I am Alice
const boundHello = sayHello.bind(person, "Hey");
boundHello(); // Hey, I am Alice
```
