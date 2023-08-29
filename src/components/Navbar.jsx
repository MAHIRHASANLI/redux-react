import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav">
        <div>Courses</div>
        <div className="basket-icons">
          <div className="navState">
            <p>{quantity}</p>
          </div>
          <BsFillBasket2Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
