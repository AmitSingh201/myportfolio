import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
// import Toggle from './Toggle/Toggle';
// import Nav from './Navbar/Nav';


export default function Home() {
    return (
        <div className="home-container">
            {/* <Nav/> */}
            {/* <Toggle/> */}
            <Profile/>
            <Footer/>
        </div>
    )
}
