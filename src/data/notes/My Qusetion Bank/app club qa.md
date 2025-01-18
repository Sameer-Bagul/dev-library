### **Web Development**
1. **HTML vs XHTML:** XHTML is a stricter version of HTML, requiring all tags to be closed and nested properly.
2. **Web performance optimization:** Minify CSS/JS, image optimization, lazy loading, and efficient caching.
3. **Semantic HTML tags:** Tags like `<article>`, `<section>`, and `<header>` improve accessibility and SEO.
4. **CSS Flexbox vs Grid:** Flexbox is for one-dimensional layouts, while Grid is for two-dimensional layouts.
5. **Responsive web design:** Ensures the website adjusts to different screen sizes using media queries and flexible layouts.
6. **Box model:** Defines the structure of elements, including margins, borders, padding, and content.
7. **Web accessibility:** Use ARIA roles, color contrast, and proper HTML semantics for inclusive design.
8. **Custom web font:** Implement by adding font-face rules in CSS or using services like Google Fonts.
9. **GET vs POST:** GET retrieves data, while POST sends data to be processed by the server.
10. **Cross-browser compatibility:** Use CSS resets, feature detection, and testing tools like BrowserStack.

### **React**
1. **Key features of React:** Component-based, virtual DOM, unidirectional data flow, and JSX.
2. **JSX vs HTML:** JSX is a syntax extension of JavaScript, while HTML is a markup language.
3. **React hooks:** `useState` manages state, `useEffect` handles side effects like data fetching.
4. **React Router:** Provides navigation between different views in a React app.
5. **Virtual DOM:** A lightweight copy of the real DOM, used by React to optimize rendering.
6. **Context API:** A way to share state between components without passing props manually.
7. **Controlled vs uncontrolled components:** Controlled components use React state for form elements, uncontrolled rely on the DOM.
8. **Higher-order components (HOCs):** Functions that take a component and return a new component with additional functionality.
9. **State management in large React apps:** Use tools like Redux, Context API, or third-party state management libraries.
10. **React lifecycle:** Methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` manage component behavior.

### **Next.js**
1. **SSR vs SSG:** SSR renders content on the server for each request, while SSG generates static pages at build time.
2. **getStaticProps vs getServerSideProps:** `getStaticProps` fetches data at build time, `getServerSideProps` at request time.
3. **Dynamic routes:** Use file-based routing with dynamic segments, like `[id].js`.
4. **ISR (Incremental Static Regeneration):** Rebuild static pages after the first request and serve cached versions.
5. **Authentication:** Implement session management using cookies or JWT tokens.
6. **Link vs a tag:** `Link` is optimized for Next.js navigation, while `a` is used for regular HTML links.
7. **API requests in Next.js:** Create API routes inside the `pages/api` directory to handle requests.
8. **Pages vs components:** Pages represent routes, components are reusable UI elements.
9. **State management:** Use React's `useState`, `useContext`, or third-party libraries like Redux.
10. **Lazy loading:** Use React's `React.lazy()` or dynamic imports to load components on demand.

### **Node.js**
1. **Node.js:** A JavaScript runtime built on Chrome’s V8 engine for building fast, scalable network applications.
2. **Asynchronous operations:** Use callbacks, promises, or async/await to handle non-blocking code.
3. **Event loop:** Handles asynchronous operations by executing callback functions when tasks are completed.
4. **require() vs import:** `require()` is for CommonJS, while `import` is for ES6 modules.
5. **Package management:** Use `npm` or `yarn` to install and manage dependencies.
6. **Middleware:** Functions that process requests before they reach the route handler, e.g., for authentication.
7. **Callback function:** A function passed as an argument to be executed later when a task completes.
8. **File operations:** Use the `fs` module for reading/writing files asynchronously or synchronously.
9. **npm:** A package manager that helps install and manage dependencies for Node.js projects.
10. **Error handling:** Use `try/catch` for synchronous code and `.catch()` for promises.

### **MongoDB**
1. **MongoDB:** A NoSQL database that stores data as JSON-like documents rather than tables.
2. **Document:** A record in MongoDB, similar to a row in a relational database.
3. **Collection:** A group of MongoDB documents, similar to a table in SQL.
4. **Indexes:** Improve query performance by allowing faster lookups on specific fields.
5. **Aggregation:** Performs operations like filtering, grouping, and sorting on collections of data.
6. **Replica sets:** Provide high availability and data redundancy by replicating data across multiple servers.
7. **Advantages of MongoDB:** Flexible schema, horizontal scalability, and fast writes.
8. **Transactions:** Use multi-document transactions to ensure atomicity and consistency.
9. **Data consistency:** Use replica sets and write concerns to ensure data reliability.
10. **Pagination:** Use the `skip()` and `limit()` methods or aggregation framework to paginate results.

### **Express.js**
1. **Express.js:** A web application framework for Node.js that simplifies routing, middleware, and handling HTTP requests.
2. **Routes:** Defined using HTTP methods like `app.get()`, `app.post()`, etc., to handle different endpoints.
3. **Middleware:** Functions that execute during the request-response cycle, such as for logging or authentication.
4. **Error handling:** Use `next(err)` to pass errors to custom error-handling middleware.
5. **Routing parameters:** URL segments (e.g., `/user/:id`) that can be dynamically accessed.
6. **File uploads:** Use `multer` middleware to handle file uploads.
7. **Securing Express:** Use HTTPS, sanitize input, and implement authentication strategies like JWT.
8. **Authentication/authorization:** Use middleware to verify tokens or session data.
9. **HTTP status codes:** Common codes: 200 (OK), 404 (Not Found), 500 (Internal Server Error).
10. **Logging:** Use `morgan` or custom middleware to log request data.

---
## Machine Learning 

### **Basic Questions (1-10)**
1. **What is Machine Learning?**  
   ML is a subset of AI that focuses on creating algorithms that allow systems to learn patterns from data and make decisions without being explicitly programmed.

2. **What are the types of Machine Learning?**  
   - **Supervised Learning:** Training with labeled data.  
   - **Unsupervised Learning:** Training with unlabeled data.  
   - **Reinforcement Learning:** Learning by interacting with the environment and receiving feedback.

3. **What is the difference between AI, ML, and DL?**  
   - **AI:** Encompasses all techniques for intelligent systems.  
   - **ML:** Subset of AI focusing on learning from data.  
   - **DL:** Subset of ML using deep neural networks.

4. **What is overfitting, and how can you prevent it?**  
   Overfitting occurs when a model performs well on training data but poorly on new data. Prevention methods:  
   - Use regularization (L1/L2).  
   - Use cross-validation.  
   - Reduce model complexity.  
   - Increase training data.  

5. **What is a confusion matrix?**  
   A matrix showing the performance of a classification model by comparing predicted vs. actual outcomes.

6. **What are precision and recall?**  
   - **Precision:** TP / (TP + FP) - Measures accuracy of positive predictions.  
   - **Recall:** TP / (TP + FN) - Measures the ability to find all positive instances.

7. **What is a supervised learning algorithm?**  
   An algorithm trained on labeled data where the output is known. Example: Linear regression, logistic regression.

8. **What is gradient descent?**  
   An optimization algorithm used to minimize a loss function by updating model parameters iteratively in the direction of the negative gradient.

9. **What is a bias-variance tradeoff?**  
   - **Bias:** Error from overly simplistic models.  
   - **Variance:** Error from overly complex models.  
   The tradeoff involves finding a balance to achieve optimal model performance.

10. **What are some common ML libraries?**  
    - **Python:** scikit-learn, TensorFlow, PyTorch.  
    - **R:** caret, mlr.  

---

### **Intermediate Questions (11-15)**

11. **What is the difference between classification and regression?**  
    - **Classification:** Predicts discrete labels (e.g., spam or not).  
    - **Regression:** Predicts continuous values (e.g., price).

12. **What is the difference between bagging and boosting?**  
    - **Bagging:** Combines models trained on different subsets of data to reduce variance (e.g., Random Forest).  
    - **Boosting:** Combines models sequentially, focusing on reducing errors of previous models (e.g., AdaBoost, Gradient Boosting).

13. **What is PCA (Principal Component Analysis)?**  
    PCA is a dimensionality reduction technique that transforms data into a lower-dimensional space while retaining the most variance.

14. **Explain k-means clustering.**  
    K-means is an unsupervised learning algorithm that groups data into **k clusters** by minimizing the distance between data points and their cluster centroids.

15. **What is a hyperparameter? How is it different from a parameter?**  
    - **Hyperparameter:** Set by the user (e.g., learning rate, number of trees in a forest).  
    - **Parameter:** Learned during training (e.g., weights in neural networks).

---

### **Advanced Questions (16-20)**

16. **What are activation functions, and why are they used in neural networks?**  
    Activation functions introduce non-linearity, allowing the network to learn complex patterns. Common ones: ReLU, Sigmoid, Tanh.

17. **What is the purpose of regularization in ML models?**  
    Regularization reduces overfitting by penalizing large model coefficients. Techniques: L1 (Lasso) and L2 (Ridge).

18. **Explain the concept of a convolutional neural network (CNN).**  
    CNNs are designed for image data and use convolution layers to extract spatial features like edges, textures, and patterns.

19. **What is the difference between RNN and LSTM?**  
    - **RNN (Recurrent Neural Network):** Handles sequential data but suffers from vanishing gradients.  
    - **LSTM (Long Short-Term Memory):** An advanced RNN variant designed to handle long-term dependencies.

20. **What are attention mechanisms in ML?**  
    Attention mechanisms focus on specific parts of input data (e.g., words in a sentence) when making predictions, crucial in NLP tasks like translation (e.g., Transformers).

