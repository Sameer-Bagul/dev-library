# HTML Fundamentals

## Semantic HTML

Semantic HTML provides meaning to the structure of your content.

### Key Elements

```html
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Welcome to My Site</h1>
    <p>This is the main content.</p>
  </article>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>
```

## Best Practices

1. Use semantic elements appropriately
2. Ensure proper heading hierarchy
3. Include alt text for images
4. Make forms accessible

### Example Form Structure

```html
<form role="search">
  <label for="search">Search:</label>
  <input type="search" id="search" name="search" 
         aria-label="Search through site content">
  <button type="submit">Search</button>
</form>
```

## Related Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [W3C HTML Specification](https://www.w3.org/TR/html52/)

[← Back to Introduction](introduction) | [Next: CSS Fundamentals →](css-fundamentals)