import React from 'react';
import laptop from '../../../img/laptop.jpg'
import './ChooseUs.css'


const ChooseUs = () => {
    return (
        <section className = " choose-area pt-5 pb-5">
            <div className = "d-flex justify-content-center">
                <div className = " row w-75  ">
                    <div className = " col-md-6">
                        <h2 className = "text-light pt-5">Why You Choose Us!</h2>
                        <p className = "text-light text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis consequatur expedita ex labore odio eius nobis, ipsum ullam, blanditiis dolor, a quam tempore consectetur?</p>
                    </div>
                    <div className = "col-md-6">
                        <img className = "choose-image" src={laptop} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;