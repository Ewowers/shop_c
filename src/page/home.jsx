import Header from "../component/header";
import { Row, Col, Carousel, Tabs } from "antd";
import Card from "../component/card";
import slide from "../image/Group 56.png";
import "./home.css";

const { TabPane } = Tabs;
function Home() {
  return (
    <>
      <Header />
      <Row justify="center">
        <Col md={20}>
          <Slider />
          <Popup />
        </Col>
      </Row>
    </>
  );
}
const Slider = () => {
  const onChange = () => {};
  const contentStyle = {
    width: "100%",
    height: 400,
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src={slide} style={contentStyle} />
      </div>
      <div>
        <img src={slide} style={contentStyle} />
      </div>
      <div>
        <img src={slide} style={contentStyle} />
      </div>
      <div>
        <img src={slide} style={contentStyle} />
      </div>
    </Carousel>
  );
};
const Popup = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Tab 1" key="1">
        <div className="card-list">
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            reviews={4}
            prise={499}
            beforePrise={540}
          />
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
            reviews={4}
            prise={499}
            beforePrise={540}
          />
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            reviews={4}
            prise={499}
            beforePrise={540}
          />
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            reviews={4}
            prise={499}
            beforePrise={540}
          />
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            reviews={4}
            prise={499}
            beforePrise={540}
          />
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            reviews={4}
            prise={499}
            beforePrise={540}
          />
          <Card
            stock
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            reviews={4}
            prise={499}
            beforePrise={540}
          />
        </div>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};
export default Home;
