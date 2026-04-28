import { Link } from "react-router-dom";
import "./Services.css";

function Service() {

  const categories = [
    {
      id: 1,
      name: "Hair Services",
      img: "/hair.jpg",
      cat:"hair"
    },
    {
      id: 2,
      name: "Face Services",
      img: "/face.jpg",
      cat:"face"
    },
    {
      id: 3,
      name: "Body Services",
      img: "/body.jpg",
      cat:"body"

    },
    {
      id: 4,
      name: "Makeup Services",
      img: "/makeup.jpg",
      cat:"makeup"

    },
    {
      id: 5,
      name: "Hand & Foot Services",
      img: "/hand.jpg",
      cat:"hand"

    }
  ];

  return (
    <div className="services-data">

      <h2 className="title">Services </h2>

      <div className="services-container">

        {categories.map((cat) => (
          <div className="services-card" key={cat.id}>

            <img src={cat.img} alt={cat.name} />

            <h3>{cat.name}</h3>

            {/* CLICK → Next Page */}
            <Link to={`/service-detail/${cat.cat}`}>
              <button>View Services</button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Service;