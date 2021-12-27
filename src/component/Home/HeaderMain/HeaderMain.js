import React from 'react';
import laptop from '../../../img/laptopH.jpg'

const HeaderMain = () => {
    return (
        <div>
            <main style={{height:'600px', backgroundColor: '#ECEDEF'}} className = "row d-flex align-items-center" >
                <div className="col-md-4 offset-md-1">
                    <h1 style = {{color:'#3A4256'}} >Repair Your Laptop<br />Iphone & Computer</h1>
                    <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quidem dolore deleniti quas, error voluptas!</p>
                    <button className="btn btn-primary">Get A Quote</button>
                </div>
                <div className="col-md-6">
                    <img src={laptop} alt="" className = "img-fluid" />
                </div>
             </main>
        </div>
    );
};

export default HeaderMain;