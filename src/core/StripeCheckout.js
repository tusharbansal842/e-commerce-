// import React, { useState, useEffect} from 'react'
// import { isAuthenticated } from '../auth/helper/index';
// import {cartEmpty} from './helper/cartHelper';
// import {loadCart} from './helper/cartHelper';
// import { Link } from 'react-router-dom';
// import StripeCheckoutButton from "react-stripe-checkout";
// import { API } from '../backend';
// import { createOrder } from './helper/orderHelper';



// const StripeCheckout = ({
//     products,
//     setReload = f => f,
//     reload = undefined
// }) =>  {

//     const [data,setData] = useState({
//         loading: false,
//         success: false,
//         error: "",
//         address: ""
//     });

//     const token = isAuthenticated() && isAuthenticated().token
//     const userId = isAuthenticated() && isAuthenticated().user._id

//     const getFinalPrice = () => {
//        let amount = 0;
//        products.map(p => {
//            amount = amount + p.price;
//        })
//        return amount;
//     };

//     const makePayment = (token) => {
//         const body = {
//             token,
//             products
//         }
//         const headers = {
//             "Content-Type": "application/json"
//         }
//         return fetch(`${API}/stripepayment`, {
//             mathod: "POST",
//             headers,
//             body: JSON.stringify(body)
//         })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(error => console.log(error))
//     }

//     const showStripeButton = () => {
//         return isAuthenticated() ? (
//             <StripeCheckoutButton
//             stripekey = ""
//             token = {makePayment}
//             amount = {getFinalPrice() * 100}
//             name = "Buy Tshirts"
//             shippingAddress
//             billingAddress
//             >
//             <button className="btn btn-success">Pay with stripe</button>
//             </StripeCheckoutButton>
//         ) : (
//             <Link to="/sigin">
//                 <button className="btn btn-warning">Signin</button>
//             </Link>
//         )
//     }
    
//     return (
//         <div>
//             <h3 className="text-white">Stripe Checkout Rs {getFinalPrice()}/-</h3>
//             {showStripeButton()}
//         </div>
//     )
// }

// export default StripeCheckout;