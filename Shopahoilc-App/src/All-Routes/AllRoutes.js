import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Pages/Admin/Dashboard/Dashboard';
import Cart from '../Pages/Cart/Cart';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import AllProduct from '../Pages/Product/AllProduct';
import SingleProduct from '../Pages/Product/SingleProduct';
import Signup from '../Pages/Signup/Signup';
import Admin from "../Pages/Admin/Dashboard/admin"
import AddProduct from '../Pages/Admin/AddProduct/AddProduct';
import AdminCart from "../Pages/Admin/Cart/AdminCart"
/*
Dont make any changes to this file
*/

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<AllProduct />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin/dashboard" element={ <Admin> <Dashboard /> </Admin >} />
            <Route path="/admin/addProduct" element={ <Admin> <AddProduct /> </Admin >} />
            <Route path="/admin/cart" element={ <Admin> <AdminCart /> </Admin >} />

        </Routes>
    );
}

export default AllRoutes;