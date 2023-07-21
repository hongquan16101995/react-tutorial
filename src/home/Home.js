import Header from "./Header";
import Footer from "./Footer";
import ProductView from "../product/ProductView";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import FormProduct from "../product/FormProduct";
import Test from "./Test";
import React from "react";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Outlet/><br/>
            <Link to={"/form"}>Form</Link>
            <Link to={"/test"}>Test</Link><br/>
        </>
    )
}
