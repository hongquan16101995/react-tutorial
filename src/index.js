import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProductView from "./product/ProductView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import FormProduct from "./product/FormProduct";
import ClassComponent from "./product/ClassComponent";
import Test from "./home/Test";
import Header from "./home/Header";
import Footer from "./home/Footer";
import ListCustomer from "./customer/ListCustomer";
import FormCustomer from "./customer/FormCustomer";

//tạo root để render các component thành phần khởi tạo trước đó
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //React.StrictMode là component của React, cho phép render 2 lần để kiểm tra chính xác các mã nguồn được viết
    <React.StrictMode>
        <BrowserRouter>
            {/*    <Header/>*/}
            {/*    /!*<Home/>*!/*/}
            {/*    /!*<ProductView/>*!/*/}
            {/*    <Routes>*/}
            {/*        <Route path={''} element={<Home/>}>*/}
            {/*            <Route path={''} element={<ProductView/>}/>*/}
            {/*            <Route path={'form'} element={<FormProduct/>}/>*/}
            {/*            <Route path={'test'} element={<Test/>}/>*/}
            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*    <Footer/>*/}


            {/*gọi component App.js*/}
            {/*<App/>*/}

            {/*sử dụng DemoComponent như 1 thẻ HTML*/}
            {/*<Demo/>*/}

            {/*sử dụng lifecycle trong ClassComponent*/}
            {/*<ClassComponent/>*/}

            <ListCustomer/>
            <Routes>
                <Route path={'/form-customer/:id'} element={<FormCustomer/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
