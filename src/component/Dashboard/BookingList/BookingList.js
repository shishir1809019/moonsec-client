import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
            <div className ="p-2 rounded mb-2" style ={{background:"linear-gradient(gray, lightgray)", color:'white'}}><h3>Booking List</h3></div>
            </div>
        </div>
    );
};

export default BookingList;