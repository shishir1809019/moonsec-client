import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const brand = [
        {name : "Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab a et dolore magna aliqua"}
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const quickLink = [
        {name: "Help and Support" , link: "/help-support"},
        {name: "Return & Cancellation" , link: "/return-cancel"},
        {name: "Online Product Service" , link: "/online-service"},
        {name: "Delivery Schedule" , link: "/tooth-extract"},
        {name: "Online Special service" , link: "/online-special"},
    ]
    const latestArticle = [
        {name: "How to take cate of our computer", date:"2 july, 2021", link:"/computer-article"},
        {name: "Top ten software for mobile phone", date:"2 july, 2021", link: "/phone-article" },
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle = "MOONESC" menuItems={brand}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        
                    </FooterCol>
                    <FooterCol key={2} menuTitle = "Quick Link" menuItems={quickLink}/>
                    <FooterCol key={3} menuTitle = "Latest Article" menuItems={latestArticle}/>
                    <FooterCol key={4} menuTitle = "Address" menuItems={ourAddress}>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+95035547</button>
                        </div>
                    </FooterCol>
                        
                </div>
                <div className="copyRight text-center">
                    <p className ="pb-3">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;