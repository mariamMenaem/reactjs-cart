import React from 'react'
import { useForm } from 'react-hook-form'
import { useCart } from 'react-use-cart'
import "./checkout.css"
function Checout({ items }) {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();

    const { emptyCart } = useCart();
    const onSubmit = data => {
        emptyCart();
        alert("Your order is Placed")
        console.log(data)
        reset()
    };
    return (

        <>
            <div className='checkout-container'>
                <div className='checkout-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder='Name' className='checkout-input'
                            {...register("Name", { required: "name is required",
                            minLength:{
                                value: 3,
                                message: "Name is too short"
                              }
                        })}
                            onKeyUp={() => {
                                trigger("Name");
                            }}

                        />
                        {errors.Name && <small className='invalid'>{errors.Name?.message}</small>}
                        <input placeholder='Email' className='checkout-input'
                            {...register("email", {
                                required: "Email is Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                }
                            })}
                            onKeyUp={() => {
                                trigger("email");
                            }}
                        />
                        {errors.email && (
                            <small className='invalid'>{errors.email.message}</small>
                        )}


                        <input placeholder='Phone Number' className='checkout-input'
                            {...register("phone", {
                                required: "Phone is Required",
                                pattern: {
                                    value: /^01[0125][0-9]{8}$/i,
                                    message: "Invalid  phone number",
                                }
                            })}
                            onKeyUp={() => {
                                trigger("phone");
                            }}
                        />
                        {errors.phone && (
                            <small className='invalid'>{errors.phone.message}</small>)}
                        <input className='checkout-submit' type="submit" />
                    </form>
                </div>
                <div className='checkout-order'></div>
            </div>



        </>
    );
}

export default Checout
