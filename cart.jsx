import React, { useContext, useEffect } from "react";
import { fecthedData } from "../../context/Context";
import ReactStars from "react-stars";
import IncDecItem from "./IncDecItem";

import "./Cart.css";

import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { data, setData, incData, setIncData} = useContext(fecthedData);
 
  let navigate = useNavigate();

  useEffect(() => {
    setData([...data]);
    setIncData([...incData]);
  }, [data, incData, setData, setIncData]);

  const handleClick = (item) => {
    data.splice(data.indexOf(item), 1);
    const filtered=incData.filter(ele=>ele.id!==item.id)
    setData([...data]);
    setIncData(filtered);
  };

  const handleCheckOut = () => {
    alert("Thank You for Shopping");
    navigate("/all");
  };

  return (
    <div className="cart_display">
      <div className="cart_left">
        <div className="cart_cards">
          {data.length === 0 ? (
            <h2 className="empty">Your Cart is Empty</h2>
          ) : (
            data.map((item) => {
              return (
                <div className="cart_card" key={item.id}>
                  <div className="cart_card_img">
                    <img
                      src={item.image}
                      alt="unavailable"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="cart_details">
                    <p>{item.title}</p>
                    <ReactStars
                      count={5}
                      size={24}
                      value={item.rating.rate}
                      color2={"#ffd700"}
                    />
                    <div className="btnsss">
                      <div className="indec">
                        <IncDecItem priceData={item} />
                      </div>

                      <div
                        className="remov_btn"
                        onClick={(e) => handleClick(item)}
                      >
                        <Button type="primary" danger>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="cart_right">
        <Card>
          <h3>Order Summary</h3>
          <h4>Total Price :</h4>
          <h2>₹{data.length>0 || incData.length>0 ?(data.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0,)+incData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,)).toFixed(2):0}</h2>
          <Button type="primary" onClick={handleCheckOut}>
            CHECK OUT
          </Button>
          <h6>Tax Exclusive* added at checkout</h6>
        </Card>
      </div>
    </div>
  );
}

export default Cart;
