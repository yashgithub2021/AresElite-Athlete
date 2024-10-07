import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
import { Avatar } from "@mantine/core";

const PaymentForm = ({ clientSecret, mainheading, subheading, body }) => {
  const [stripePromise, setstripePromise] = useState(
    "pk_test_51P1kZASAZ5IkC6u6AubbgH453E8NdLV1wAVeipaiZrHtY4PDfzPImUfquioLk924EBUtcYzgBLiMCd0hLDsWh4XY004V9N14x4"
  );
  console.log(body);
  return (
    <>
      {clientSecret && (
        <Elements stripe={loadStripe(stripePromise)} options={{ clientSecret }}>
          <div>
            <div style={{ background: "#7257FF26", padding: "30px 50px" }}>
              <h7 style={{ color: "var(--main-dark)", marginBottom: "6px" }}>
                Continue payment for
              </h7>
              <div className="d-flex gap-3 pt-3">
                <Avatar radius="xl" size={"50px"} />
                <p style={{ margin: "0px", fontSize: "small" }}>
                  {mainheading} <br />{" "}
                  <span>
                    <p className="sub-text">{subheading}</p>
                  </span>
                </p>
              </div>
            </div>
            <div style={{ padding: "50px" }}>
              <Checkoutform body={body} />
            </div>
          </div>
        </Elements>
      )}
    </>
  );
};

export default PaymentForm;
