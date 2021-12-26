import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Search from "../Components/search/Search";
import Footer from '../Components/footer/Footer'
import black from "../img/black.png";
import './Home.scss'
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartRedux";

const Home = () => {
  const products = [
    {
      id: 1,
      img: black,
      title: "Qulaqlıqlar",
      desc: "Apple Airpods Max",
      price: 550.0,
    },
    {
      id: 2,
      img: black,
      title: "Qulaqlıqlar",
      desc: "Apple Airpods Max",
      price: 550.0,
    },
    {
      id: 3,
      img: black,
      title: "Qulaqlıqlar",
      desc: "Apple Airpods Max",
      price: 550.0,
    },
    {
      id: 4,
      img: black,
      title: "Qulaqlıqlar",
      desc: "Apple Airpods Max",
      price: 550.0,
    },
  ];

  const dispatch = useDispatch()

  const handleClick = (item)=>{
    dispatch(addToCart({...item}))
  }

  return (
    <div className="home-container">
      <Navbar />
      <Search />

      <div className="products-container">
        <div className="products-box">
          {products.map((product) => (
            <div className="body" key={product.id}>
              <div className="img">
                <img src={product.img} alt="" />
              </div>
              <div className="title">
                <p>{product.title}</p>
                <span>{product.desc}</span>
              </div>

              <div className="price">
                <span>₼{product.price}</span>
                <button onClick={()=>handleClick(product)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
