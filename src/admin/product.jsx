import { Space, Button, Modal, Form, Input, Select, Checkbox, InputNumber, Upload, Table, Drawer } from "antd";
import { CheckOutlined, CloseOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

import { destroy, get, post, update } from "../util/axios";
import { key } from "../util/key";
const { Option } = Select;
function Product() {
  const [products, setProducts] = useState([]); //товары
  const [product, setProduct] = useState(false); //стейт модального окна
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();
  const showProduct = () => setProduct(true);
  const getProduct = () => {
    get("/api/product").then((res) => setProducts(res));
  };
  const open = (product) => {
    form.setFieldsValue({ ...product, ...product.information });
    console.log(product);
    setEdit(true);
  };
  const destory = (id) => {
    console.log(id);
    destroy("/api/product/" + id).then(() => getProduct());
  };
  useEffect(() => {
    getProduct();
  }, []);
  const column = [
    { title: "Название товара", dataIndex: "title", key: "key" },
    { title: "Цена", dataIndex: "prise", key: "key" },
    { title: "Цена со скидкой", dataIndex: "beforePrise", key: "key" },
    { title: "В наличий", dataIndex: "stock", key: "key", render: (stock) => (stock ? <CheckOutlined /> : <CloseOutlined />) },
    { title: "Оценка", dataIndex: "reviews", key: "key" },
    { title: "Категория", dataIndex: "category", key: "key" },
    {
      title: "Опций",
      key: "action",
      render: (action, product) => (
        <Space size="middle">
          <Button onClick={() => open(product)} style={{ background: "#ffc107", color: "#ffffff", borderColor: "#ffc107" }}>
            <EditOutlined /> Редактирование
          </Button>
          <Button onClick={() => destory(product._id)} danger type="primary">
            <DeleteOutlined /> Удалить
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Space>
        <Button onClick={showProduct}>Создать товар</Button>
      </Space>
      <Table columns={column} dataSource={key(products)} />
      <CreateProduct state={product} setState={setProduct} get={getProduct} />
      <Edit state={edit} setState={setEdit} form={form} get={getProduct} />
    </div>
  );
}
const Edit = ({ form, state, setState, get }) => {
  const [categori, setcategori] = useState("");
  const onclose = () => setState(false);
  const onFinish = (values) => {
    console.log(values);
    let body = {
      _id: values._id,
      title: values.title,
      prise: values.prise,
      beforePrise: values.beforePrise,
      stock: values.stock,
      category: values.category,
      information: values,
    };
    delete body.information._id;
    delete body.information.title;
    delete body.information.prise;
    delete body.information.beforePrise;
    delete body.information.stock;
    delete body.information.category;
    update("/api/product", body)
      .then((res) => {
        get();
      })
      .then((res) => setState(false));
  };
  const onFinishFailed = (values) => {
    console.log(values);
  };
  const onCategory = () => {};
  return (
    <Drawer visible={state} onClose={onclose}>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" form={form}>
        <Form.Item name="upload" label="Картинка товара" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="image" maxCount={1} customRequest={false} listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Название" name="_id" style={{ display: "none" }}>
          <Input />
        </Form.Item>
        <Form.Item label="Название" name="title" rules={[{ required: true, message: "Пожалуйста, введите название!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Цена товара" name="prise" rules={[{ required: true, message: "Пожалуйста, введите цену!" }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Если скидка прошлая цена" name="beforePrise">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="stock" valuePropName="checked">
          <Checkbox>Есть в наличий</Checkbox>
        </Form.Item>
        <Form.Item label="Категория товара" name="category" rules={[{ required: true, message: "Пожалуйста, ввыберите категорию!" }]}>
          <Select onChange={onCategory}>
            <Option value="phone">Телефон</Option>
          </Select>
        </Form.Item>
        {form.getFieldValue().category ? category[form.getFieldValue().category].map((item, i) => getInput(item, i)) : null}
        <Form.Item>
          <Button htmlType="submit">Изменить</Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
const CreateProduct = ({ state, setState, get }) => {
  const [categori, setCategori] = useState(null);
  const submit = useRef(null);
  const close = () => setState(false);
  const ok = () => submit.current.click();
  const onFinish = (values = []) => {
    let body = {
      image: values.upload[0].thumbUrl,
      title: values.title,
      prise: values.prise,
      beforePrise: values.beforePrise,
      stock: values.stock,
      category: values.category,
      information: values,
    };
    delete body.information.title;
    delete body.information.prise;
    delete body.information.beforePrise;
    delete body.information.stock;
    delete body.information.category;
    post("/api/product", body).then((res) => {
      get();
      setState(false);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onCategory = (value) => setCategori(value);

  return (
    <Modal visible={state} onCancel={close} onOk={ok}>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" initialValues={{ stock: true }}>
        <Form.Item label="Название" name="title" rules={[{ required: true, message: "Пожалуйста, введите название!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="upload" label="Картинка товара" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload name="image" maxCount={1} customRequest={false} listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Цена товара" name="prise" rules={[{ required: true, message: "Пожалуйста, введите цену!" }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Если скидка прошлая цена" name="beforePrise">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="stock" valuePropName="checked">
          <Checkbox>Есть в наличий</Checkbox>
        </Form.Item>
        <Form.Item label="Категория товара" name="category" rules={[{ required: true, message: "Пожалуйста, ввыберите категорию!" }]}>
          <Select onChange={onCategory}>
            <Option value="phone">Телефон</Option>
          </Select>
        </Form.Item>
        {!categori ? null : category[categori].map((item, i) => getInput(item, i))}
        <Form.Item style={{ display: "none" }}>
          <Button type="primary" htmlType="submit" ref={submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const category = {
  phone: [
    { label: "Модельный год", type: "number" },
    { label: "Диагональ дисплея, дюйм", type: "number" },
    { label: "Разрешение дисплея ширина", type: "number" },
    { label: "Разрешение дисплея высота", type: "number" },
    { label: "Объем оперативной памяти гб", type: "number" },
    { label: "Объем встроенной памяти", type: "number" },
    { label: "Модель матрицы", type: "string" },
  ],
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const getInput = ({ value, label, type }, i) => {
  if (type === "string") {
    return (
      <Form.Item label={label} name={label} rules={[{ required: true, message: "Пожалуйста, введите " + label + " !" }]} key={i}>
        <Input />
      </Form.Item>
    );
  }
  if (type === "number") {
    return (
      <Form.Item label={label} name={label} key={i} rules={[{ required: true, message: "Пожалуйста, введите " + label + " !" }]}>
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
    );
  }
};
export default Product;
