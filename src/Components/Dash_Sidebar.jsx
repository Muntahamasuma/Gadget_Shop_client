import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Dash_Sidebar = () => {
  return (
    <div className="bg-gray-100 border-r-2 border-black h-screen px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Gadget Shop</h2>
      <ul className="flex flex-col gap-3">
        <li className="btn">
          <NavLink to="/dashboard/overview" className="flex gap-3 items-center">
          <GrOverview />
          <p>Overview</p>
          </NavLink>
        </li>
        <li className="btn">
          <NavLink to="/dashboard/myproducts" className="flex gap-3 items-center">
          <MdOutlineProductionQuantityLimits />
          My Products
          </NavLink>
        </li>
        <li className="btn">
          <NavLink to="/dashboard/addproducts" className="flex gap-3 items-center">
          <AiOutlineProduct />
          Add Products
          </NavLink>
        </li>
        <li className="btn">
          <NavLink to="/" className="flex gap-3 items-center">
          <IoHomeOutline />
          Home
          </NavLink>
        </li>
        <li className="btn  bg-black text-white">
          <button className="flex gap-3 items-center">
          <FiLogOut />
          Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Dash_Sidebar;
