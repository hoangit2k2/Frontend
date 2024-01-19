import { Card, Row } from "antd";
import React from "react";
import icon from "../category/iconbeer.png";
import Meta from "antd/es/card/Meta";
import "./category.css";

const Category: React.FC = () => {
  return (
    <Card  className="card"
        style={{width:104}}
    >
      <img src={icon} style={{width:50}}/>
      <Meta title="Bia Lon" style={{textAlign: "center", fontSize: "9px"}}/>
    </Card>
  );
};

export default Category;
