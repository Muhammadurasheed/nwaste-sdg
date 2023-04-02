import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo1.png';
import axios from 'axios';


const StriprCheckoutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Kco5LFusehQlq139HMRKyH0LonyUCpZOdvzWzwwtzDOTubBOoeeujDnvCNUzL3xOK0qh2TKfZl016nMBLHsGRSL00LKkwoHeI';
     const onToken = token =>{
       axios({
           url: 'http://localhost:5000/payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
       }).then(response =>{
           alert('payment was successful')
       }).catch(error =>{
           console.log('payment error', JSON.parse(error));
           alert('There was a problem processing your payment. Please use the below test credit card. ')
       })
     }
    return(
        <StripeCheckout
        label='pay with stripe'
        name='Nwaste'
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay with stripe'
        token={onToken} 
        stripeKey={publishableKey}
          />
    )
}

export default StriprCheckoutButton;
