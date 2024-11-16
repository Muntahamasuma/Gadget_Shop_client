import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Homepage/Home";
import ProductCard from "../Components/FeatureProduct.jsx/ProductCard";
import Products from "../Pages/Products";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import SignUp from "../Pages/Register";
// import Dashborad from "../Layouts/DashBorad/Dashborad";
import Dashboard from "../Layouts/DashboradLayout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Dash_overview from "../Pages/DashBorad/Dash_overview";
import SellerRoute from "./SellerRoute";
import MyProducts from "../Pages/Seller/MyProducts";
import AddProduct from "../Pages/Seller/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <SignUp></SignUp>
      },
    ],
  },
    {path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard/overview',
          element:<Dash_overview/>
        },
        // seller routes
        {
          path:'/dashboard/myproducts',
          element:<SellerRoute><MyProducts/></SellerRoute>
        },
        {
          path:'/dashboard/addproducts',
          element:<SellerRoute><AddProduct/></SellerRoute>
        },
      ]
    }
]);