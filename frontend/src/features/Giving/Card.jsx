// {
//     id: 1,
//     title: "Annual Giving",
//     image: "https://example.com/images/annual_giving.jpg",
//     text: "Your contributions have been critical in the growth and eminence of your Alma mater. Every time you give back, you contribute towards the brighter future of MNNIT.",
//   },
import "./Card.css";
function Card({ item }) {
  console.log(item);
  return (
    <div className="card">
      <div className="card-inner cursor-pointer">
        <div
          className="card-front "
          style={{ backgroundImage: `url(${item?.image})` || "bg-red-500" }}
        >
          {console.log(item.image)}
          <p>{item.title}</p>
        </div>
        <div className="card-back text-lg">
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
