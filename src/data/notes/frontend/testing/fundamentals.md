# Testing in Frontend Development

## Unit Testing with Jest

### Basic Test Structure
```javascript
describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
```

## React Testing Library

### Component Testing
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('increments count when button is clicked', () => {
    render(<Counter />);
    
    const button = screen.getByRole('button', { name: /increment/i });
    const count = screen.getByText(/count:/i);
    
    fireEvent.click(button);
    
    expect(count).toHaveTextContent('Count: 1');
  });
});
```

## Integration Testing

### API Testing Example
```javascript
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches users successfully', async () => {
  const users = await fetchUsers();
  expect(users).toHaveLength(2);
});
```

## Best Practices

1. Follow the AAA pattern:
   - Arrange
   - Act
   - Assert

2. Test behavior, not implementation
3. Keep tests simple and focused
4. Use meaningful test descriptions

> 🧪 **Testing Tip**: Write tests that make your code more maintainable and reliable.

[← Back to Advanced JavaScript](advanced) | [Next: Performance →](performance)