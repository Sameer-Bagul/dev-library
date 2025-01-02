# JavaScript Fundamentals

## Modern JavaScript Features

### ES6+ Syntax

#### Arrow Functions
```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

#### Destructuring
```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age } = person;
console.log(name); // 'John'
```

### Async Programming

#### Promises
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      resolve({ id: 1, data: 'Success!' });
    }, 1000);
  });
};

// Using async/await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## DOM Manipulation

### Example Todo App
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.querySelector('#todo-form');
  const todoList = document.querySelector('#todo-list');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = todoForm.querySelector('input');
    addTodoItem(input.value);
    input.value = '';
  });

  function addTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    todoList.appendChild(li);
  }
});
```

## Best Practices

1. Use `const` and `let` instead of `var`
2. Implement error handling
3. Write clean, modular code
4. Use modern ES6+ features

>💡 **Tip**: Always consider browser compatibility when using modern JavaScript features.

[← Back to CSS](css-fundamentals) | [Next: Advanced JavaScript →](advanced)