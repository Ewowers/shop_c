import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  HomeOutlined,
  DropboxOutlined,
  PictureOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./layout.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminPageLayot extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">Harble shop</div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/admin">Главное</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DropboxOutlined />}>
              <Link to="product">Товары</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PictureOutlined />}>
              <Link to="slider">Слайдер</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    );
  }
}
export default AdminPageLayot;
