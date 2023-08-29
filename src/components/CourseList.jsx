import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItems from "./CourseItems";
import { clearCart } from "../control/cartSlice";

const CourseList = () => {
  const dispathc = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Basket</h2>
            <h4>empty</h4>
          </header>
        </section>
      ) : (
        <section className="courses">
          <header>
            <h2>Basket</h2>
            <div>
              {cartItems &&
                cartItems.map((item) => (
                  <CourseItems key={item.id} {...item} />
                ))}
            </div>{" "}
          </header>
          <footer>
            <hr />
            <div>
              <h4>Total price: {total} $</h4>
            </div>
            <button className="deleteBtn" onClick={() => dispathc(clearCart())}>
              Reset
            </button>
          </footer>{" "}
        </section>
      )}
    </>
  );
};

export default CourseList;
