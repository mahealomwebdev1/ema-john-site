import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Loggin/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>
     { console.log(data) }

    const auth = useAuth();
  
    return (
      <form className="shipment-form" onSubmit={handleSubmit(onSubmit)}>
           
        {/* include validation with required or other standard HTML validation rules */}
        <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="your name"/>
        {/* errors will return when field validation fails  */}
        {
        errors.name && <span className="error" >Name is required</span>
        }

        <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="your email" />
        {
        errors.email && <span className="error" >Email is required</span>
        }

        <input name="addressLine1" ref={register({ required: true })}  placeholder="address" />
        {
        errors.addressLine1 && <span className="error" >Address is required</span>
        }
        
        <input name="addressLine2" ref={register} placeholder="address line 2" />
        
        <input name="city" ref={register({ required: true })} placeholder="city" />
        {
        errors.city && <span className="error" >City is required</span>
        }

        <input name="country" ref={register({ required: true })} placeholder="country" />
        {
        errors.country && <span className="error" >Country is required</span>
        }

        <input name="zipcode" ref={register({ required: true })} placeholder="zip code" />
        {
        errors.zipcode && <span className="error" > Zip Code is required</span>
        }
        
        <input type="submit" />
      </form>
    )
};

export default Shipment;