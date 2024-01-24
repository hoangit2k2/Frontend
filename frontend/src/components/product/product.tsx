import React from "react";
import { Card } from "antd";
import food from "../product/food.jpg";
import "./product.css";
const Product: React.FC = () => {
  return (
    <div className="card-product">
      <img src={food}></img>
      <Card className="product">
        <p>Mực Hấp</p>
      </Card>
    </div>
  );
};
export default Product;
