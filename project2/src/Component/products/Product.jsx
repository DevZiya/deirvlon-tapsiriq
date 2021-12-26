import "./product.scss";
import airmax from "../../img/airmax.png";

const Product = () => {
  const products = [
    {
      id: 1,
      img: airmax,
      title: "Headphone R1342JBL LIVE 650BTNC Wireless",
      price: 42.99,
    },
    {
      id: 2,
      img: airmax,
      title: "Headphone R1342JBL LIVE 650BTNC Wireless",
      price: 42.99,
    },
    {
      id: 3,
      img: airmax,
      title: "Headphone R1342JBL LIVE 650BTNC Wireless",
      price: 42.99,
    },
    {
      id: 4,
      img: airmax,
      title: "Headphone R1342JBL LIVE 650BTNC Wireless",
      price: 42.99,
    },
  ];

  return (
    <div className="products-container">
      <div className="header">
        <h1>Oxşar məhsullar</h1>
      </div>

     <div className="products-box">
     {products.map((product) => (
        <div className="body" key={product.id}>
          <div className="img">
            <img src={product.img} alt="" />
          </div>
          <div className="title">
            <p>{product.title}</p>
          </div>

          <div className="price">
            <span>₼{product.price}</span>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Product;
