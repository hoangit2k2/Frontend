import React, { useState } from "react";
import { Menu, Layout, MenuProps, MenuTheme, Drawer, Row, Col } from "antd";
import {
  AreaChartOutlined,
  AccountBookFilled,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Order", "1", <OrderedListOutlined />),
  getItem("Account", "2", <AccountBookFilled />),
  getItem("Statistical", "3", <AreaChartOutlined />),
];

const SiderBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse);
  };
  return (


    
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          items={items}
        />
      </Sider>




  );
};

export default SiderBar;
