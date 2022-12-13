import { useState } from "react";
import Link from "next/link";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "app",
    label: <Link href="/">App</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: "login",
    label: <Link href="/login">Login</Link>,
    icon: <LoginOutlined />,
  },
  {
    key: "register",
    label: <Link href="/register">Register</Link>,
    icon: <UserAddOutlined />,
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState("app");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default TopNav;
