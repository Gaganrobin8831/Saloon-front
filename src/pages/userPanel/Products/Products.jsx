import { Link } from "react-router-dom";
import "./Products.css";

function Product() {

  const categories = [
    {
      id: 1,
      name: "Hair Products",
      img: "/hair.jpg",
      cat:"hair"
    },
    {
      id: 2,
      name: "Skin Products",
      img: "/skin.jpg",
      cat:"skin"
    },
    {
      id: 3,
      name: "Body Products",
      img: "/body.jpg",
      cat:"body"

    },
    {
      id: 4,
      name: "Face Products",
      img: "/face.jpg",
      cat:"face"

    }
  ];

  return (
    <div className="products">

      <h2 className="title">Products</h2>

      <div className="products-container">

        {categories.map((cat) => (
          <div className="products-card" key={cat.id}>

            <img src={cat.img} alt={cat.name} />

            <h3>{cat.name}</h3>

            {/* CLICK → Next Page */}
            <Link to={`/product-detail/${cat.cat}`}>
              <button>View Products</button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Product;

