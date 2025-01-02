# React Hooks Deep Dive

## Understanding Hooks

Hooks are functions that allow you to "hook into" React state and lifecycle features from function components.

### useState

The most basic Hook for managing state in components.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### useEffect

Handles side effects in function components.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Only re-run when count changes
```

## Advanced Hooks

### Custom Hooks

Create reusable stateful logic:

```jsx
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

## Related Topics
- [Performance Optimization](performance)
- [Testing Hooks](testing)
- [Back to Fundamentals](react-fundamentals)