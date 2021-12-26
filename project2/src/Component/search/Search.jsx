import "./search.scss";
import { FaBars } from "react-icons/fa";
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className="search-container">
      <div className="kateqoriya">
        <div className="icon">
          <FaBars />
        </div>
        <ul className="cat">Kateqoriyaları göstər</ul>
      </div>

      <div className="search">
        <input type="text" placeholder="Məhsul axtar" />
        <AiOutlineSearch  className="icon"/>
      </div>
    </div>
  );
};

export default Search;
