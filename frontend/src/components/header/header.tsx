import { Input, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const items: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const HeaderPage: React.FC = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center",background: 'white' } }  >
        
        <Input placeholder="Search ..."  style={{width: 200}}/>
 
    </Header>
  );
};

export default HeaderPage;
