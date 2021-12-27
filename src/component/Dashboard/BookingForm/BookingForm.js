import React from 'react';
import { useForm } from 'react-hook-form';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
       <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className ="form-control" defaultValue="test" {...register("Name")} />  <br /> 
                
                {/* include validation with required or other standard HTML validation rules */}
                <input className ="form-control"  {...register("Email", { required: true })} /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input className = "form-control" {...register("Service", { required: true })} /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <p className = "text-muted">pay with: </p>
                <ProcessPayment></ProcessPayment> <br />
                <input type="submit" />
            </form>
       </div>
    );
};

export default BookingForm;