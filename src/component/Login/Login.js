import React from 'react';
import img1 from '../../img/google.png'

const Login = () => {
    return (
        <div style ={{marginTop:'200px'}}>
            <div className = "text-center">
            <h2>MOON Electronics Service Center</h2>
                <button style ={{borderRadius:'8px',border:'1px solid lightgray', marginTop:'20px'}}>
                     <img style ={{width:'25px'}} src={img1} alt="" /> Continue with Google
                </button>
                <p>Don't have an account <a href="">Create an account</a></p>
        </div>
        </div>
    );
};

export default Login;