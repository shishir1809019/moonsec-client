import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    return (
        <Link to ="/bookService" style ={{textDecoration:'none'}} className ='mb-5 col-md-4 '>
            <div  className = "main mt-5 text-center">
                <img className = " img img-fluid" src={service.img} alt="" />
                <h3 className ="pt-3">{service.name}</h3>
                <p className ="text-secondary pb-5" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse asperiores accusamus nihil quas, unde ratione.</p>
            </div>
        </Link>
    );
};

export default ServiceDetail;