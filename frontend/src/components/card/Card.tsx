import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import SiderBar from "../sidebar/sidebar";
import '../card/Card.css'

const Home: React.FC = () => {
  return (
      <Row>        
        <Col span={1}  className="animated-layout">
          <Layout>
            <SiderBar></SiderBar>
          </Layout>
        </Col>
        <Col span={20}>
          <Layout>
            <Content>
            </Content>
          </Layout>
        </Col>
      </Row>
    );
};

export default Home;
