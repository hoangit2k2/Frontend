import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import YourComponent from "./components/sidebar/sidebar";
import App1 from "./components/card/Card";
import MyLayout from "./components/sidebar/sidebar";
import SiderBar from "./components/sidebar/sidebar";
import Card1 from "./components/card/Card";

const App: React.FC = () => {
  return (
          <Card1 />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
