import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from "./Demo";

//tạo root để render các component thành phần khởi tạo trước đó
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //React.StrictMode là component của React, cho phép render 2 lần để kiểm tra chính xác các mã nguồn được viết
    <React.StrictMode>
        {/*gọi component App.js*/}
        <App/>
        {/*sử dụng DemoComponent như 1 thẻ HTML*/}
        <Demo/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
