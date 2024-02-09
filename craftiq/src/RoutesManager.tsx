
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
import UserLogin from "./containers/UserLogin";
import UserRegistration from "./containers/UserRegistration";
import ShoppingCart from "./containers/ShoppingCart";
import ErrorComponent from "./components/ErrorComponent";
import SellerDashboard from "./containers/SellerDashboard";

const RoutesManager = () => (
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/products" element={<ProductList/>} />
                    <Route path="/products/:id" element={<ProductDetails/>} />

                    <Route path="/login" element={<UserLogin/>} />
                    <Route path="/register" element={<UserRegistration/>} />
                    <Route path="/dashboard" element={<SellerDashboard/>} />

                    <Route path="/cart" element={<ShoppingCart/>} />
                    <Route path="/*" element={<ErrorComponent/>} />
                </Routes>
        </Router>    
  );
export default RoutesManager;
