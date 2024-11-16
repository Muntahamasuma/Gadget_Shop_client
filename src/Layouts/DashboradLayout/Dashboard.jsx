import React from 'react';
import { Outlet } from 'react-router-dom';
import Dash_Sidebar from '../../Components/Dash_Sidebar';

const Dashboard = () => {
  return (
    <div className='grid lg:grid-cols-12'>
      <div className='col-span-2'>
        <Dash_Sidebar/>
      </div>
      <div className='col-span-10 p-12'>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;