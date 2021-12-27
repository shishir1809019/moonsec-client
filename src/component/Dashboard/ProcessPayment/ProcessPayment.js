import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../CardForm/CardForm';

const stripePromise = loadStripe('pk_test_51J0gUUF3Jx3DSvyWQx50ynTWJ3ir8OQHgpq12NDUmr17NHIWFuOI3X51eDiINa4im7dAv29OTN7EDv285zNLoeC100blIcYsab');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
        <CardForm></CardForm>
      </Elements>  
    );
};

export default ProcessPayment;