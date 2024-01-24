import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import SiderBar from "../sidebar/sidebar";
import "./home.css";
import banner from "../home/banner.png";
import HeaderPage from "../header/header";
import Category from "../category/category";
import Product from "../product/product";
const headerColor = '#D1EDE1';
const Home: React.FC = () => {
  return (
    <Row >
      <Col span={1} className="animated-layout">
        <Layout >
          <SiderBar></SiderBar>
        </Layout>
      </Col>
      <Col span={23}style={{background: headerColor}} >
        <Layout >
        
        <HeaderPage></HeaderPage>
          
          <Content style={{background:headerColor}}>
            <Row >
              <Col span={20}> 
              <img src={banner} className="banner" />
              </Col>
            </Row>
            <Row >
              <Col span={20}> 
              <h2>Loại Món</h2>
              <Category ></Category>
              </Col>
            </Row>
            <h2>Menu Quán</h2>
            <Row >
              <Col span={3}> 
              <Product ></Product>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Col>
    </Row>
  );
};

export default Home;
