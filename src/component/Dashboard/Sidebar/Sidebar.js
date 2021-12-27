import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <ul>
                <li className = "mb-5">
                    <Link to = "/"><h1>MOONESC</h1></Link>
                </li>
            </ul>
            {/* <ul>
                <li>
                    <Link to = "/dashboard">Dashboard</Link>
                </li>
            </ul> */}
            <ul>
                <li>
                    <Link to = "/bookService">book</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to ="/bookingList" >Booking List</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to ="/review">Review</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;