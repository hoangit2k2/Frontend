import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import YourComponent from "./components/sidebar/sidebar";
import MyLayout from "./components/sidebar/sidebar";
import SiderBar from "./components/sidebar/sidebar";
import Home from "./components/home/home";

const App: React.FC = () => {
  return (
          <Home></Home>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
