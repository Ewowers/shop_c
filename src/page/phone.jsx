import { Col, Row, Breadcrumb, Space, InputNumber, Slider } from "antd";
import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";
import Header from "../component/header";
import { get } from "../util/axios";
function PhonePage() {
  let [phones, setPhones] = useState([]);
  let [minWidth, setMinWidth] = useState(0);
  let [maxWidth, setMaxWidth] = useState(0);
  let changeWidth = (value) => {
    setMinWidth(value[0]);
    setMaxWidth(value[1]);
  };
  let getPhones = () => {
    get("/api/product/phone").then((res) => setPhones(res));
  };
  useEffect(getPhones, []);
  return (
    <div>
      <Header />
      <Row justify="center">
        <Col md={20}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Главное</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Телефоны</Breadcrumb.Item>
          </Breadcrumb>
          <Row style={{ marginTop: 25 }}>
            <Col md={6} sm={8}>
              <div className="box-shadow filter">
                <span className="box-shadow filter-title">Фильр</span>
                <FilterItem title={"Цена"}>
                  <Space>
                    <Input type="number" label="От" />
                    <Input type="number" label="До" />
                  </Space>
                </FilterItem>
                <FilterItem title="Бренды">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: 10,
                    }}
                  >
                    <button className="box-shadow filter-button">Apple</button>
                    <button className="box-shadow filter-button">Samsung</button>
                    <button className="box-shadow filter-button">OPPO</button>
                    <button className="box-shadow filter-button">Poco</button>
                    <button className="box-shadow filter-button">OnePlus</button>
                    <button className="box-shadow filter-button">Sony</button>
                    <button className="box-shadow filter-button">Xiaomi</button>
                    <button className="box-shadow filter-button">HUAWEI</button>
                  </div>
                </FilterItem>
                <FilterItem title="Разрешение экрана">
                  <button className="box-shadow filter-button" style={{ width: "100%" }}>
                    {minWidth} x {maxWidth}
                  </button>
                  <Slider range={{ draggableTrack: true }} defaultValue={[minWidth, maxWidth]} onChange={changeWidth} />
                </FilterItem>
                <FilterItem title="Ёмкость акумултора">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <button className="box-shadow filter-button">3000</button>
                    <button className="box-shadow filter-button">4000</button>
                    <button className="box-shadow filter-button">5000</button>
                    <button className="box-shadow filter-button">2500</button>
                  </div>
                </FilterItem>
                <FilterItem title="Мобильный интернет">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <button className="box-shadow filter-button">4G</button>
                    <button className="box-shadow filter-button">5G</button>
                  </div>
                </FilterItem>
              </div>
            </Col>
            <Col md={18} sm={16} style={{ padding: 10, display: "flex", gap: 10 }}>
              {phones.map((item, i) => (
                <Card {...item} key={i} />
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const Input = ({ label }) => {
  const [value, setValue] = useState(0);
  const onChange = (e) => {
    if (!isNaN(e.target.value)) setValue(e.target.value);
  };
  return (
    <div className="parenInput box-shadow">
      <span className="label">{label}</span>
      <input type="text" className="input" value={value} onChange={onChange} />
    </div>
  );
};
const FilterItem = ({ title, children, style }) => {
  return (
    <>
      <div style={{ marginBottom: 25 }}>
        <p>
          <span className="color-gray">{title}</span>
        </p>
        {children}
      </div>
    </>
  );
};
export default PhonePage;
