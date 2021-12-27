import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Sidebar from '../Sidebar/Sidebar';

const BookService = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <div className ="p-2 rounded mb-2" style ={{background:"linear-gradient(gray, lightgray)", color:'white'}}><h3>Book</h3></div>
                <BookingForm></BookingForm>
                {/* <ProcessPayment></ProcessPayment> */}
            </div>
        </div>
    );
};

export default BookService;