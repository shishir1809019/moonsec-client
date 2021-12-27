import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import TeamMember from '../TeamMember/TeamMember';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <TeamMember></TeamMember>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;