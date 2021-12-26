import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import "./navbar.scss";

const Navbar = () => {

  return (
    <div className="nav-container">
     <Link to={'/'}>
     <div className="logo">
        <span>Green</span>
        <p>Tekno</p>
      </div>
     </Link>

      <ul className="links">
        <li>Ana səhifə</li>
        <li>Məhsullar</li>
        <li>Endirimlər</li>
      </ul>

      <div className="icons">
        <AiOutlineHeart className="icon" />
        <Badge badgeContent={2} color="primary">
           <Link to={"/cart"}>
          <AiOutlineShoppingCart className="icon" color="action" />
        </Link>
        </Badge>
       
      </div>
    </div>
  );
};

export default Navbar;
