import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav';


const MainLayout = () => {
    return (
        <div>
           <div className='career-bg'>
           <Nav></Nav>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;