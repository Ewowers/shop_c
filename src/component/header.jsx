import { Link } from "react-router-dom";
import { Row, Col, Input, Badge, Avatar } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <header>
      <Row justify="center" style={{ background: "#3a3a3a", color: "#ffffff" }}>
        <Col md={20}>
          <Row>
            <Col span={12}>
              <span>Пон-Пят:</span> 9:00 AM - 5:30 PM
            </Col>
            <Col span={12} style={{ textAlign: "end" }}>
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                +7(777)777-77-77
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col md={20}>
          <Row align="middle" gutter={20}>
            <Col md={8}>
              <h1 className="logo">Logo</h1>
            </Col>
            <Col md={8} className="navbar">
              <nav>
                <ul>
                  <li>
                    <Link to="/category/phone">Телефоны</Link>
                  </li>
                  <li>
                    <Link to="/">Компьютеры</Link>
                  </li>
                  <li>
                    <Link to="/">Сканеры</Link>
                  </li>
                  <li>
                    <Link to="/">Наушники</Link>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col md={8} style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className="search">
                <Input
                  size="small"
                  placeholder="пойск"
                  style={{ border: "none", borderBottom: "1px solid" }}
                />
                <SearchOutlined id="search" />
              </div>
              <Badge count={5}>
                <Avatar
                  style={{
                    background: "#fff",
                    color: "#000",
                    fontSize: "1.5rem",
                  }}
                >
                  <ShoppingCartOutlined />
                </Avatar>
              </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};
export default Header;
