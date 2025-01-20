import "./App.css";
import Card from "./components/Card";

// This array is about as big as I'd recommend keeping in your JSX file, any more and it's better to have the content imported from a separate js file

// Avoid storing data with generic components. Instead the data should be close to where it's used. ie: an about section page info should be with the page, not components used to render it
const cards = [
  {
    title: "Card One",
    description: "Now this is podracing!",
    image: {
      src: "./images/sea-turtle.jpg",
      alt: "blah",
    },
    link: {
      text: "Click Here",
      path: "/about",
    },
  },
  {
    title: "Card two",
    description: "It's over, I have the high ground",
    image: {
      src: "./images/sea-turtle.jpg",
      alt: "blah",
    },
    link: {
      text: "Click Here",
      path: "/order-66",
    },
  },
  {
    title: "Card Three",
    description: "Use the force",
    image: {
      src: "./images/sea-turtle.jpg",
      alt: "blah",
    },
    link: {
      text: "Click Here",
      path: "new-hope",
    },
  },
];

function App() {
  return (
    <main className="App">
      <header>
        <h1>Card Demonstration</h1>
        {/* Notice the image usage here: we can use just the path from public as is viewable in the cards array.*/}
        <img src="./images/puffin.jpg" alt="puffin  " />
      </header>
      <div>
        {cards.map((card, index) => {
          return <Card {...card} key={index} />;
        })}
      </div>
    </main>
  );
}

export default App;
