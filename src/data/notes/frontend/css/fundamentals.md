# CSS Fundamentals

## Selectors and Specificity

Understanding CSS selectors and their specificity is crucial for effective styling.

### Basic Selectors

```css
/* Element Selector */
p {
  color: #333;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#header {
  position: sticky;
  top: 0;
}
```

## Flexbox Layout

Modern CSS layout with flexbox:

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

### Example Card Layout

![Card Layout](https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1000)

```css
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## CSS Custom Properties

```css
:root {
  --primary-color: #3490dc;
  --secondary-color: #38a169;
}

.button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
```

> 🎨 Using CSS custom properties (variables) makes it easier to maintain consistent styling across your application.

## Media Queries

```css
/* Mobile First Approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and Above */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
  }
}
```

[← Back to HTML](html-fundamentals) | [Next: JavaScript Basics →](javascript-basics)