import "./style.css";
// With this file named index, it'll take on it's directory name
// This directory structure is creat when your components have dependency files like css or data.js files

// The props are declared as function parameters
// Use destructuring to make things streamlined: ({propOne, propTwo})
// set OPTIONAL defaults with propName = "default text"

/*
TODO: Finish this card button and use it in the card component

- This pattern of component sub components being created in the same file is create for small elements. Larger ones would get their own components, but it's usually easier to start with the code closer together

function CardBtn({ path, text }) {
  return <div>
  <a href={link.path}>{link.text}</a>
  </div>;
}
TODO: Is there a better way this button could be written?
*/

function Card({
  image,
  title = "Card Title Fallback",
  description = "Description text fallback",
  link = { path: "./some-url", text: "Default Text" },
}) {
  return (
    <article>
      {/* Notice the use of className instead of class? */}
      <img src={image.src} alt={image.alt} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Replace the a href with Link to when using react-router */}
      <a href={link.path}>{link.text}</a>
    </article>
  );
}

// This can be exported here or at the declaration. Pick an approach that you like and stick with it
export default Card;
