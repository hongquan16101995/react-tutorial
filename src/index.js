import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProductView from "./product/ProductView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import FormProduct from "./product/FormProduct";
import ClassComponent from "./product/ClassComponent";

//tạo root để render các component thành phần khởi tạo trước đó
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //React.StrictMode là component của React, cho phép render 2 lần để kiểm tra chính xác các mã nguồn được viết
    <React.StrictMode>
        <BrowserRouter>
            <Home/>
            <Routes>
                <Route path={'/'} element={<ProductView/>}>Danh sách</Route>
                <Route path={'/form'} element={<FormProduct/>}>Tạo mới</Route>
            </Routes>
        </BrowserRouter>

        {/*gọi component App.js*/}
        {/*<App/>*/}

        {/*sử dụng DemoComponent như 1 thẻ HTML*/}
        {/*<Demo/>*/}

        {/*sử dụng lifecycle trong ClassComponent*/}
        {/*<ClassComponent/>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
