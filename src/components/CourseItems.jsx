import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { removeCartItem, increace, decreace } from "../control/cartSlice";
import { useDispatch } from "react-redux";

const CourseItems = ({ id, title, price, img, quantity }) => {
  const dispathc = useDispatch();
  return (
    <div className="courseItems">
      <img src={img} alt="" />

      <div className="itemsRight">
        <h4>{title}</h4>
        <h4>{price} $</h4>
        <div className="itemsCount">
          <button onClick={() => dispathc(increace(id))}>
            <BsChevronUp />
          </button>
          <p>{quantity}</p>
          <button onClick={() => dispathc(decreace(id))}>
            <BsChevronDown />
          </button>
        </div>
        <div>
          <button
            className="deleteBtn"
            onClick={() => dispathc(removeCartItem(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItems;
