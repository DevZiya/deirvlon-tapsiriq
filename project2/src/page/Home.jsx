import Navbar from "../Component/navbar/Navbar";
import Search from "../Component/search/Search";
import Footer from "../Component/footer/Footer";
import "./home.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { products } from "../data";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Home = () => {
  const valuetext = (value) => `${value} azn`;
  const [value, setValue] = useState([20, 37]);
  const [pageNumber, setPageNumber] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;
  const displayUser = products.slice(pageVisited, pageVisited + userPerPage);
  const pageCount = Math.ceil(products.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Navbar />
      <Search />
      <div className="home-container">
        <div className="left">
          <div className="kateqoriya">
            <div className="title">
              <h3>Kateqoriyalar</h3>
            </div>
            <ul className="subtitle">
              <li>Smartfonlar</li>
              <li>Smart saatlar</li>
              <li>Aksesuarlar</li>
              <li>Planşetlər</li>
              <li>Qulaqlıqlar</li>
            </ul>
          </div>

          <div className="qiymet-araligi">
            <div className="title">
              <h3>Qiymət aralığı</h3>
            </div>

            <div className="slide">
              <Box sx={{ width: 233 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="on"
                  getAriaValueText={valuetext}
                  max={1000}
                  color="primary"
                />
              </Box>
            </div>
          </div>

          <div className="brendler">
            <div className="title">
              <h3>Brendlər</h3>
            </div>

            <div className="subtitle">
              <div className="apple">
                <input type="radio" name="brend" value={"apple"} />
                <span>Apple</span>
              </div>
              <div className="apple">
                <input type="radio" name="brend" value={"apple"} />
                <span>Apple</span>
              </div>
              <div className="apple">
                <input type="radio" name="brend" value={"apple"} />
                <span>Apple</span>
              </div>
              <div className="apple">
                <input type="radio" name="brend" value={"apple"} />
                <span>Apple</span>
              </div>
              <div className="apple">
                <input type="radio" name="brend" value={"apple"} />
                <span>Apple</span>
              </div>
              <div className="apple">
                <input type="radio" name="brend" value={"apple"} />
                <span>Apple</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="filter">
            <span>35 ədəd məhsul tapıldı</span>

            <select>
              <option value="Ada görə (A-Z)">Ada görə (A-Z)</option>
              <option value="Ada görə (Z-A)">Ada görə (Z-A)</option>
            </select>
          </div>

          <div className="products-container">
            <div className="products-box">
              {displayUser.map((product) => (
                <Link to={`/product/${product.id}`}>
                  <div className="body" key={product.id}>
                    <div className="img">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="title">
                      <p>{product.title}</p>
                      <span>{product.desc}</span>
                    </div>

                    <div className="price">
                      <p>{product.endirim ? "₼" + product.endirim : null}</p>
                      <span>₼{product.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousBtn"}
              previousLabel="<"
              nextLabel=">"
              nextLinkClassNameLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
