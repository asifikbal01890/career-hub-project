import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav';


const MainLayout = () => {
    return (
        <div >
           <div className='relative'>
           <Nav></Nav>
           </div>
           <div className=''>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;