import React, { Component } from "react";

export default class ProductView extends Component {
  render() {
    const product = {
      name: "Product",
      price: 1.49,
      img: {
        url: "/logo192.png",
        alt: "Product Image",
      },
    };
    return (
      <div>
        <h2>{product.name}</h2>
        <span>
          {product.price.toLocaleString("pt-Br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <div>
          <img src={product.img.url} alt={product.img.alt} />
        </div>
      </div>
    );
  }
}
