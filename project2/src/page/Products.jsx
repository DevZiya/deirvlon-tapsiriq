import Footer from "../Component/footer/Footer";
import Navbar from "../Component/navbar/Navbar";
import Product from "../Component/products/Product";
import Search from "../Component/search/Search";
import "./product.scss";
import { products, mounths } from "../data";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Products = () => {
  const [color, setColor] = useState();
  const [storage, setStorage] = useState();
  const [img, setImg] = useState();
  const [kredit, setKredit] = useState(false);
  const [count, setCount] = useState(1);
  const [ay, setAy] = useState();
  const [mounth,setMounth] = useState()
  const [price, setPrice] = useState();
  const [odenis,setOdenis] = useState(0)

  const handleClick = () => {
    setKredit(!kredit);
  };

  const handleMounth = (m)=>{
    setAy(m.id)
    setMounth(m.mounth)
  } 

  useEffect(() => {
    const price = parseFloat((products[3].price * count).toFixed(2));
    setPrice(price);
  }, [count]);

  const incriment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) {
      return null;
    } else {
      setCount(count - 1);
    }
  };

  useEffect(()=>{
    const od =parseFloat((price / mounth).toFixed(2))
    setOdenis(od)
  },[mounth,incriment,decrement])

  return (
    <div className="container">
      <Navbar />
      <Search />
      <div className="product-container">
        <div className="top">
          <div className="product">
            <div className="img">
              <img src={products[3].img} alt="" />
            </div>
            <div className="about">
              <div className="title">
                <h2>{products[3].desc}</h2>
                <p>Brand: Apple</p>
                <span>${products[3].price}</span>
              </div>

              <div className="reng-yaddas">
                <div className="reng">
                  <p>Rənglər</p>
                  <div className="color">
                    {products[3].color.map((c) => (
                      <div
                        className={color === c.id ? "active" : ""}
                        style={{ backgroundColor: c.color }}
                        key={c.id}
                        onClick={() => setColor(c.id)}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="yaddas">
                  <p>Yaddaş</p>
                  <div className="storage">
                    {products[3].yaddas.map((y) => (
                      <span
                        className={storage === y.id ? "active" : ""}
                        key={y.id}
                        onClick={() => setStorage(y.id)}
                      >
                        {y.storage}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text">
                <div className="ekran box">
                  <p>Ekran ölçüsü: </p>
                  <span>6.5</span>
                </div>
                <div className="emeliyyat box">
                  <p>Əməliyyat sistemi: </p>
                  <span>IOS 3</span>
                </div>
                <div className="ram box">
                  <p>Operativ yaddaş (Ram): </p>
                  <span>8 GB</span>
                </div>
                <div className="kamera box">
                  <p>Əsas Kamera (MP):</p>
                  <span>64 + 12 + 12 +5</span>
                </div>
                <div className="bateriya box">
                  <p>Akkumulyatorun həcmi (mAh): </p>
                  <span>4500</span>
                </div>
                <div className="ekran box">
                  <p>Daxili yaddaş: </p>
                  <span>256 GB</span>
                </div>
              </div>

              <div className="btns">
                <button>Səbətə əlavə et</button>
                <button onClick={handleClick}>Hissə-hissə ödəniş</button>
              </div>
            </div>
          </div>

          <div className="slider">
            {products[3].imgs.map((i) => (
              <img
                src={i.img}
                alt=""
                className={img === i.id ? "active" : ""}
                key={i.id}
                onClick={() => setImg(i.id)}
              />
            ))}
          </div>
        </div>
        <div className="bottom">
          <div className="head">
            <h2>Məhsul detalları</h2>
          </div>
          <div className="ses">
            <div className="section1">
              <h3>Səs texnologiyası</h3>
              <p>LTE: Var</p>
              <p>4G: Var</p>
              <p>SIM-kart növü: Dual SIM (Nano-SIM, dual stand-by)</p>
              <p>SIM-kart sayı: 2</p>
            </div>
            <div className="section1">
              <h3>Səs texnologiyası</h3>
              <p>LTE: Var</p>
              <p>4G: Var</p>
              <p>SIM-kart növü: Dual SIM (Nano-SIM, dual stand-by)</p>
              <p>SIM-kart sayı: 2</p>
            </div>
          </div>
          <div className="akumlyator">
            <div className="section">
              <h3>Akumulyator</h3>
              <p>Əməliyyat sistemi: Android 11, One UI 3.1</p>
              <p>
                Prosessor tipi (Chipset): Qualcomm SM7125 Snapdragon 720G (8 nm)
              </p>
              <p>
                Prosessor tezliyi (CPU): Octa-core (2x2.3 GHz Kryo 465 Gold &
                6x1.8 GHz Kryo 465 Silver)
              </p>
              <p>Qrafik prosessor (GPU): Adreno 618</p>
              <p>Nüvə sayı: 8</p>
            </div>
            <div className="section">
              <h3>Akumulyator</h3>
              <p>Əməliyyat sistemi: Android 11, One UI 3.1</p>
              <p>
                Prosessor tipi (Chipset): Qualcomm SM7125 Snapdragon 720G (8 nm)
              </p>
              <p>
                Prosessor tezliyi (CPU): Octa-core (2x2.3 GHz Kryo 465 Gold &
                6x1.8 GHz Kryo 465 Silver)
              </p>
              <p>Qrafik prosessor (GPU): Adreno 618</p>
              <p>Nüvə sayı: 8</p>
            </div>
          </div>
        </div>
      </div>

      <div className={kredit ? "hisse-odenis active" : "hisse-odenis"}>
        <div className="boxs">
          <div className="title">
            <h2>Hissə-hissə ödəniş</h2>
          </div>

          <div className="img-box">
            <div className="img">
              <img src={products[3].img} alt="" />
            </div>
            <div className="name">
              <span>Phone</span>
              <p>Apple Iphone Pro Max 12</p>
            </div>
            <div className="count">
              <AiOutlineMinus className="icon" onClick={decrement} />
              <span>{count}</span>
              <AiOutlinePlus className="icon" onClick={incriment} />
            </div>
            <div className="price">
              <span>₼ {price}</span>
            </div>
          </div>

          <div className="ay">
            {mounths.map((m) => (
              <div
                className={ay === m.id ? "box active" : "box"}
                key={m.id}
                onClick={() =>handleMounth(m)}
              >
                <span>{m.mounth} ay</span>
              </div>
            ))}
          </div>

          <div className="muddet-odenis">
            <div className="muddet box">
              <p>Müddət :</p>
              <span>{mounth} ay</span>
            </div>
            <div className="ilkin box">
              <p>İlkin ödəniş</p>
              <span>0₼</span>
            </div>
            <div className="aylıq box">
              <p>Aylıq ödəniş</p>
              <span>{odenis}₼</span>
            </div>
          </div>

          <div className="btns">
            <div className="text">
              <span>
                *İlkin ödəniş məbləği ümumi dövriyyə və ödəniş tarixçəsindən
                asılı olaraq dəyişə bilər.
              </span>
              <span>
                **Məhsul nisyə satılan zaman rəsmiləşdirilməsi üçün 5-12% xidmət
                haqqı əlavə oluna bilər
              </span>
            </div>
            <div className="btn">
              <button>Sifarişi rəsmiləşdir {">"}</button>
            </div>
          </div>
        </div>
      </div>

      <Product />
      <Footer />
    </div>
  );
};

export default Products;
