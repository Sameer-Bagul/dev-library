# Advanced JavaScript Concepts

## Design Patterns

### Singleton Pattern
```javascript
class Database {
  static instance;
  
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
  }

  connect() {
    console.log('Connected to database');
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true
```

### Observer Pattern
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}
```

## Memory Management

### Closures and Memory
```javascript
function createCounter() {
  let count = 0; // This value is enclosed in the closure
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
```

## Advanced Async Patterns

### Promise Composition
```javascript
const fetchUser = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};

const fetchPosts = async (userId) => {
  const response = await fetch(`/api/posts?userId=${userId}`);
  return response.json();
};

// Combining multiple async operations
async function getUserWithPosts(userId) {
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId)
  ]);
  
  return {
    ...user,
    posts
  };
}
```

## Performance Optimization

### Debouncing
```javascript
function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const handleSearch = debounce((event) => {
  console.log('Searching:', event.target.value);
}, 300);
```

> ⚡ **Performance Tip**: Use debouncing for expensive operations triggered by frequent events like scrolling or typing.

[← Back to JavaScript Basics](basics) | [Next: Testing →](testing)