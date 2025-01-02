# React Fundamentals

## Introduction to React

React is a JavaScript library for building user interfaces. Let's explore its core concepts.

### Key Concepts

1. **Components**
   - Building blocks of React applications
   - Can be functional or class-based
   - Promote code reuse and separation of concerns

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

2. **Props**
   - Read-only data passed to components
   - Enable component reusability
   - Flow down the component tree

3. **State**
   - Mutable data managed by components
   - Updated using setState or useState
   - Triggers re-renders when changed

### Best Practices

- Keep components small and focused
- Use functional components with hooks
- Maintain unidirectional data flow
- Follow the single responsibility principle

## Next Steps
- [Hooks in Detail](hooks)
- [Component Lifecycle](lifecycle)
- [State Management](state-management)