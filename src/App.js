import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Home from "./page/home";
import "antd/dist/antd.css";
import PhonePage from "./page/phone";
import AdminPageLayot from "./admin/layout";
import ProductAdmin from "./admin/product";
function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/phone" element={<PhonePage />} />
        <Route path="/admin" element={<AdminPageLayot />}>
          <Route path="product" element={<ProductAdmin />} />
          <Route path="slider" element={<h1>slider</h1>} />
          <Route path="promo" element={<h1>promocode</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
