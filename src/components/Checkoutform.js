import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { stripestep2 } from '../features/apiCall';

const Checkoutform = ({ body }) => {
  const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    alert("here")
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/a-transactions`,
      },
      redirect: 'if_required'
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      alert(result.error.message)
    } else {
      console.log("success")
      console.log({ body })
      await stripestep2(dispatch, { body })
      window.location.reload()
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (

    <form onSubmit={handleSubmit} className="payment_form">
      <PaymentElement />
      <button disabled={!stripe} onClick={() => { }} className="signup-button">Submit</button>
    </form>
  )
};

export default Checkoutform;