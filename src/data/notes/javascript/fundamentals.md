# JavaScript Fundamentals

## 1. JavaScript Event Loop and Single-Threaded Nature

JavaScript is single-threaded, meaning it can only execute one operation at a time. However, it uses an asynchronous, non-blocking model with the help of the event loop. The event loop continuously checks the call stack and the callback queue. When the stack is empty, it pushes the first callback from the queue to the stack for execution, enabling JavaScript to handle tasks like I/O or timers efficiently without blocking the main thread.

## 2. Immediately Invoked Function Expressions (IIFE)

IIFEs (Immediately Invoked Function Expressions) are functions that run as soon as they are defined. 

**Syntax:**

```javascript
// Basic IIFE syntax
(function() {
    // code here
})();

// IIFE with parameters
(function(param1, param2) {
    // code here
})(value1, value2);

// Arrow function IIFE
(() => {
    // code here
})();
```

**Common Use Cases:**
- Creating private scope
- Avoiding global namespace pollution
- Module pattern implementation
- Asynchronous operations 