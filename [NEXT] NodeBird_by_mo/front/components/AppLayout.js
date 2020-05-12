import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import LogingForm from "../components/LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  // const { isLoggedIn } = useSelector(state => state.user);
  return (
    <div>
      <Menu mode={"horizontal"}>
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
          {/* Link와 a 태그는 한 쌍 */}
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row>
        {/* xs:모바일, sm:작은화면, md:중간화면, lg:큰화면 (가로너비 기준) */}
        <Col xs={24} md={6}>
          {/* {isLoggedIn ? <UserProfile /> : <LogingForm />} */}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://github.com/moddang123/moddang">
            <a target="_blank">Made by Moddang</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  // 렌더링될 수 있는 아이들은 다 node
  children: PropTypes.node,
};

export default AppLayout;
