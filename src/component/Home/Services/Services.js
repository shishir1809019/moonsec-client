import React from 'react';
import mobile from '../../../img/mobile.jpg'
import computer from '../../../img/computer.jpg'
import television from '../../../img/television.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'Mobile Service',
        img: mobile
    },
    {
        name: 'Computer Service',
        img: computer
    },
    {
        name: 'Television Service',
        img: television
    },
]

const Services = () => {
    return (
        <section className = "mt-5">
            <div>
                <h2 className =" text-center">Services We provide</h2>
            </div>
            <div className = " d-flex justify-content-center">
                <div className = "row w-75">
                    {
                        servicesData.map(service => <ServiceDetail service ={service}></ServiceDetail> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;