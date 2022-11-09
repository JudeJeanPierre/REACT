import React from "react";

function receipt(props) {
  return (
    <>
      <div className="receiptList">
        <h2 className="receiptTitle">{props.receipt.person}</h2>

        <div className="item"> Order:{props.receipt.order.main}</div>
        <div className="item">Protein: {props.receipt.order.protein}</div>
        <div className="item"> Rice: {props.receipt.order.rice}</div>
        <div className="item"> Sauce: {props.receipt.order.sauce}</div>

        <div className="item">
          {" "}
          Toppings: {props.receipt.order.toppings}
        </div>
        <div className="item"> Drink: {props.receipt.order.drink}</div>
        <div className="item"> Cost: $ {props.receipt.order.cost}</div>
      </div>
    </>
  );
}

export default receipt;
