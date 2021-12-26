import Navbar from "../Components/navbar/Navbar";
import Search from "../Components/search/Search";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import "./cart.scss";
import Product from "../Components/products/Product";
import Footer from "../Components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decres, totalAmmount } from "../Redux/cartRedux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch()
  const total = useSelector(state=>state.cart.totalPrice)


  const incres = (item) =>{
    dispatch(addToCart(item))
  }

  const handleRemove = (item)=>{
    dispatch(decres(item))
  }

  useEffect(()=>{
    dispatch(totalAmmount())
  },[products,dispatch])

  console.log(total);

  return (
    <div>
      <Navbar />
      <Search />

      <div className="cart-container">
        <div className="title">
          <span>Səbət</span>
        </div>

        <div className="cart">
          {
            <div className="products">
              {products.map((product) => (
                <div className="product" key={product.id}>
                  <div className="image">
                    <img src={product.img} alt="img" />
                  </div>
                  <div className="text">
                    <span>{product.title}</span>
                    <h4>{product.desc}</h4>
                  </div>

                  <div className="count">
                    <AiOutlineMinus 
                    className="icon" 
                    onClick={()=>handleRemove(product)}
                    />
                    <span>{product.quantity}</span>
                    <AiOutlinePlus 
                    className="icon" 
                    onClick={()=>incres(product)}
                    />
                  </div>

                  <div className="total">
                    <span>₼{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          }

          <div className="total-ammount">
            <div className="inp">
              <input type="text" placeholder="promokod" />
              <div className="btn">
                <BiChevronRight className="right" />
              </div>
            </div>

            <div className="coin">
              <div className="endirim box">
                <p>Endirim</p>
                <span>0 AZN</span>
              </div>

              <div className="catdırılma box">
                <p>Çatdırılma</p>
                <span>60 AZN</span>
              </div>

              <div className="toplam box">
                <p>Toplam</p>
                <span>{total + 60} AZN</span>
              </div>
            </div>

            <div className="button">
             <Link to={'/odenis'}> <button>Sifarişi rəsmiləşdir</button></Link>
            </div>
          </div>
        </div>
      </div>

      <Product />
      <Footer />
    </div>
  );
};

export default Cart;
