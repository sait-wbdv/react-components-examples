# Working with Components

## Important Conventions

- Use PascalCase for component and page names (both when declaring functions and naming files)
- A react function component needs a return statement, which wraps the jsx in `()`
- Pass props into the function parameter, use destructuring for cleaner code
- A react component should have 1 root element
- Data should be kept more closely to where it's relevant (ie: don't put page data that is passed into a component with the actual component code)
- **using folders instead of files for components is purely optional**

## Component Function Syntax

### Declaration: ./components/Card.js

```jsx
export default function Card({ title = "default text", description }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
```

### Card Layout Component: ./components/CardLayout.js

```jsx
import Card from "./components/Card";

export default function CardLayout({ cards }) {
  <div>
    {cards.map((card, index) => {
      return <Card {...card} key={index} />;
    })}
  </div>;
}
```

### Implementation: Actual Page App.js

```jsx
import CardLayout from "./components/CardLayout";
const data = [
  { title: "A card title", description: "Some very important text" },
  { title: "Another title", description: "More very important text" },
  { title: "Yet one more title", description: "Possibly the best text ever" },
];

export default function App() {
  return (
    <div>
      <CardLayout cards={data} />
    </div>
  );
}
```

## Summary Notes

- Notice how we are extracting the **scope** of each function so that they server very specific purposes?
- Syntax matters, you need to use project javascript syntax in your function declarations etc
- Review javascript syntax regarding:
  - destructuring
  - map
  - function arguments and parameters
  - import/export syntax,
