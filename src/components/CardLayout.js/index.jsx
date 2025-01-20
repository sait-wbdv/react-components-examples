import Card from "../Card";

export default function CardLayout({ cards }) {
  return (
    <div>
      {/* naming conventions: the component is a singular Card because of how we want to use it */}
      {cards.map((card, index) => {
        return <Card {...card} key={index} />;
      })}
    </div>
  );
}
