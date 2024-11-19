import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { stripestep2 } from "../features/apiCall";
import { toast } from "react-toastify";

const CheckoutForm = ({ body }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  // State to manage form visibility
  const [isFormVisible, setFormVisible] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    if (body.isPaid) {
      // Payment has already succeeded, handle this case
      const toastId = toast.success("Payment successfully processed", {
        onClose: async () => {
          await stripestep2(dispatch, { body });
          setFormVisible(false); // Close the payment form
          window.location.reload(); // Reload the page only after toast is closed
        },
      });
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/a-transactions`,
      },
      redirect: "if_required",
    });

    if (result.error) {
      // Show error to your customer
      alert(result.error.message);
    } else {
      await stripestep2(dispatch, { body });
      setFormVisible(false); // Close the payment form
      window.location.reload();
    }
  };

  // Render the form conditionally
  return (
    <>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="payment_form">
          <PaymentElement />
          <button type="submit" disabled={!stripe} className="signup-button">
            Submit
          </button>
        </form>
      )}
      {!isFormVisible && (
        <div>Your payment has been processed successfully.</div>
      )}
    </>
  );
};

export default CheckoutForm;
