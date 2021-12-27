import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
            <div className ="p-2 rounded mb-2" style ={{background:"linear-gradient(gray, lightgray)", color:'white'}}><h3>Review</h3></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className ="form-control" defaultValue="" placeholder ="Your Name" {...register("example")} /> <br />
                
                <textarea className ="form-control" name="description" placeholder ="Description" ></textarea> <br />
                
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Review;