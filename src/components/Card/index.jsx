import "./Card.css";
// With this file named index, it'll take on it's directory name
// This directory structure is creat when your components have dependency files like css or data.js files

// The props are declared as function parameters
// Use destructuring to make things streamlined: ({propOne, propTwo})
// set OPTIONAL defaults with propName = "default text"

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
