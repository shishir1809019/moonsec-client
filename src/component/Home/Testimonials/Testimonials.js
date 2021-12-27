import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const consumerTalk = [
    {
        name: 'samanta',
    },
    {
        name: 'Lola',
    },
    {
        name: 'Adriana',
    },
]

const Testimonials = () => {
    return (
        <section style ={{background :"#ECEDEF"}}>
            <div>
                <h2 className = "text-center pt-5 mb-5">Testimonials</h2>
            </div>
            <div className = "d-flex justify-content-center">
                <div className = "row w-75">
                    {
                        consumerTalk.map(comment => <Testimonial comment ={comment}></Testimonial> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;