import React from "react";
import "./Checkout.css";
import Subtotal from "../../components/subtotal/Subtotal";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import { useStateValue } from "../../components/StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Ad Banner"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            {basket?.length > 0
              ? "Your Shopping Basket"
              : "Your Shopping Basket is Empty"}
          </h2>
          {basket?.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
