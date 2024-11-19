import React from "react";

import { Stepper, rem } from "@mantine/core";

const Card3 = ({ len, trackingid, startDate, endDate }) => {
  const [active, setActive] = React.useState(len);
  const formattedStartDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(new Date(startDate));

  const formattedEndDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(new Date(endDate));
  return (
    <div
      xs={6}
      sm={6}
      className="upper-card text-shadow "
      style={{
        background: "var(--main-dark)",
        width: "420px",
      }}
    >
      {len && trackingid ? (
        <div>
          <div className="circle-1 pulsate"></div>
          <div className="circle-2  pulsate"></div>

          <img
            className="circle-img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/win-sports-competition-4981299-4145076.png?f=webp"
          />

          <Stepper
            active={active}
            visibleFrom="md"
            color="#B9ABFF"
            completedIcon={
              <svg
                width="212"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9475 5.1153L8.09107 13.9717L4.06543 9.94607"
                  stroke="#060024"
                  stroke-width="1.61026"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            <Stepper.Step
              icon={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9475 5.1153L8.09107 13.9717L4.06543 9.94607"
                    stroke="#060024"
                    stroke-width="1.61026"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              description="Order Placed"
            />
            <Stepper.Step
              visibleFrom={"md"}
              icon={
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9377 1.07623L5.08131 9.93265L1.05566 5.907"
                    stroke="#060024"
                    stroke-width="1.61026"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              description="Order Dispatched"
            />
            <Stepper.Step
              icon={
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.924097 0.0632935C0.745315 0.0632935 0.573856 0.13583 0.447438 0.264946C0.321021 0.394061 0.25 0.56918 0.25 0.751777V10.3905C0.25 11.3228 0.854665 12.1104 1.68515 12.3679C1.80878 12.7844 2.05809 13.1504 2.39749 13.4136C2.73688 13.6768 3.14902 13.8238 3.57507 13.8336C4.00112 13.8434 4.4193 13.7154 4.76992 13.468C5.12055 13.2206 5.38569 12.8664 5.5275 12.456H9.80195C9.94376 12.8664 10.2089 13.2206 10.5595 13.468C10.9102 13.7154 11.3283 13.8434 11.7544 13.8336C12.1804 13.8238 12.5926 13.6768 12.932 13.4136C13.2714 13.1504 13.5207 12.7844 13.6443 12.3679C14.0597 12.2392 14.4235 11.9775 14.682 11.6215C14.9406 11.2654 15.0801 10.8338 15.0801 10.3905V7.63661C15.0801 7.18455 14.9929 6.73691 14.8236 6.31926C14.6542 5.90161 14.4059 5.52212 14.0929 5.20246C13.78 4.8828 13.4084 4.62923 12.9995 4.45623C12.5905 4.28324 12.1523 4.1942 11.7096 4.1942H9.01326V0.751777C9.01326 0.56918 8.94223 0.394061 8.81582 0.264946C8.6894 0.13583 8.51794 0.0632935 8.33916 0.0632935H0.924097ZM9.80262 11.079H9.01326V5.57116H11.7096C12.246 5.57116 12.7604 5.78877 13.1396 6.17612C13.5189 6.56347 13.7319 7.08882 13.7319 7.63661V10.3905C13.732 10.481 13.7146 10.5705 13.6807 10.6541C13.6468 10.7376 13.5971 10.8135 13.5344 10.8773C13.3621 10.5086 13.0865 10.2003 12.7427 9.99159C12.3988 9.78283 12.002 9.68293 11.6025 9.70452C11.203 9.72612 10.8188 9.86824 10.4984 10.1129C10.178 10.3576 9.93589 10.6938 9.80262 11.079ZM3.1439 11.2808C3.20608 11.215 3.28046 11.1626 3.36271 11.1265C3.44495 11.0904 3.5334 11.0714 3.62291 11.0706C3.71241 11.0698 3.80118 11.0872 3.88402 11.1218C3.96687 11.1565 4.04213 11.2076 4.10542 11.2722C4.16872 11.3369 4.21877 11.4137 4.25267 11.4984C4.28656 11.583 4.30362 11.6736 4.30284 11.765C4.30206 11.8565 4.28346 11.9468 4.24813 12.0308C4.21281 12.1148 4.16145 12.1908 4.09707 12.2543C3.96993 12.3797 3.79965 12.4491 3.62291 12.4475C3.44616 12.4459 3.27709 12.3735 3.15211 12.2459C3.02712 12.1182 2.95623 11.9456 2.95469 11.765C2.95316 11.5845 3.0211 11.4106 3.1439 11.2808ZM11.0355 11.7675C11.0355 11.5849 11.1066 11.4098 11.233 11.2807C11.3594 11.1516 11.5309 11.079 11.7096 11.079C11.8884 11.079 12.0599 11.1516 12.1863 11.2807C12.3127 11.4098 12.3837 11.5849 12.3837 11.7675C12.3837 11.9501 12.3127 12.1252 12.1863 12.2543C12.0599 12.3835 11.8884 12.456 11.7096 12.456C11.5309 12.456 11.3594 12.3835 11.233 12.2543C11.1066 12.1252 11.0355 11.9501 11.0355 11.7675Z"
                    fill="var(--main-dark)"
                  />
                </svg>
              }
              description="Shipped"
            />
            <Stepper.Step
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0912 2.34493C12.0912 2.34526 12.0909 2.34548 12.0906 2.34532L10.6082 1.56333C9.30613 0.877113 8.65508 0.53363 7.9551 0.53363C7.25512 0.53363 6.60408 0.876368 5.30199 1.56333C5.19865 1.618 5.1961 1.76512 5.29749 1.82334L11.4333 5.34653C11.5876 5.43513 11.7761 5.44033 11.935 5.3604L14.0462 4.29867C14.3559 4.1429 14.429 3.73955 14.1507 3.53276C13.6757 3.17983 13.0185 2.83317 12.0919 2.34453C12.0916 2.34438 12.0912 2.34459 12.0912 2.34493ZM15.3018 5.6098C15.263 5.27844 14.9058 5.1168 14.6077 5.26663L12.5105 6.3208C12.3317 6.41072 12.2188 6.59382 12.2188 6.79403V8.72954C12.2188 8.87775 12.1602 9.01988 12.0559 9.12468C11.9516 9.22948 11.8101 9.28835 11.6626 9.28835C11.5151 9.28835 11.3737 9.22948 11.2694 9.12468C11.1651 9.01988 11.1065 8.87775 11.1065 8.72954V7.88437C11.1065 7.4902 10.6913 7.23414 10.3391 7.4111L8.8031 8.18279C8.62417 8.27269 8.51123 8.45582 8.51123 8.65606V14.6851C8.51123 15.0297 8.83417 15.275 9.15034 15.1378C9.54326 14.9672 10.0061 14.7233 10.6082 14.4056L12.0912 13.6232C13.6862 12.782 14.4841 12.3618 14.9275 11.6056C15.3702 10.85 15.3702 9.90901 15.3702 8.02916V7.94199C15.3702 6.93313 15.3702 6.19454 15.3018 5.6098ZM6.75986 15.1378C7.07604 15.275 7.39897 15.0297 7.39897 14.6851V8.65678C7.39897 8.45655 7.28606 8.27343 7.10714 8.18352L1.30246 5.26654C1.00438 5.11674 0.647181 5.27839 0.608425 5.60973C0.540039 6.19439 0.540039 6.93268 0.540039 7.9405V8.02767C0.540039 9.90901 0.540039 10.85 0.982718 11.6056C1.42614 12.3618 2.224 12.7828 3.81898 13.624L5.30199 14.4056C5.90406 14.7233 6.36694 14.9672 6.75986 15.1378ZM1.25189 3.99184C1.25189 3.99171 1.25202 3.99163 1.25214 3.99169L7.71736 7.23989C7.86695 7.31504 8.04326 7.31505 8.19286 7.23992L9.60415 6.53108C9.98133 6.34163 9.9962 5.80865 9.63017 5.59846L3.97022 2.34842C3.9236 2.32166 3.86653 2.32062 3.81898 2.34567C2.50457 3.03845 1.73123 3.44599 1.25219 3.99196C1.25208 3.99208 1.25189 3.992 1.25189 3.99184Z"
                    fill="var(--main-dark)"
                  />
                </svg>
              }
              description="Out For Delivery"
            />
            <Stepper.Step
              visibleFrom={"md"}
              icon={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9475 5.1153L8.09107 13.9717L4.06543 9.94607"
                    stroke="#060024"
                    stroke-width="1.61026"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              description="Delivered"
            />
          </Stepper>
          <Stepper
            active={active}
            hiddenFrom="md"
            iconSize={"24px"}
            color="#B9ABFF"
            completedIcon={
              <svg
                width="212"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9475 5.1153L8.09107 13.9717L4.06543 9.94607"
                  stroke="#060024"
                  stroke-width="1.61026"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            <Stepper.Step
              icon={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9475 5.1153L8.09107 13.9717L4.06543 9.94607"
                    stroke="#060024"
                    stroke-width="1.61026"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              description="order placed"
            />

            <Stepper.Step
              icon={
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.924097 0.0632935C0.745315 0.0632935 0.573856 0.13583 0.447438 0.264946C0.321021 0.394061 0.25 0.56918 0.25 0.751777V10.3905C0.25 11.3228 0.854665 12.1104 1.68515 12.3679C1.80878 12.7844 2.05809 13.1504 2.39749 13.4136C2.73688 13.6768 3.14902 13.8238 3.57507 13.8336C4.00112 13.8434 4.4193 13.7154 4.76992 13.468C5.12055 13.2206 5.38569 12.8664 5.5275 12.456H9.80195C9.94376 12.8664 10.2089 13.2206 10.5595 13.468C10.9102 13.7154 11.3283 13.8434 11.7544 13.8336C12.1804 13.8238 12.5926 13.6768 12.932 13.4136C13.2714 13.1504 13.5207 12.7844 13.6443 12.3679C14.0597 12.2392 14.4235 11.9775 14.682 11.6215C14.9406 11.2654 15.0801 10.8338 15.0801 10.3905V7.63661C15.0801 7.18455 14.9929 6.73691 14.8236 6.31926C14.6542 5.90161 14.4059 5.52212 14.0929 5.20246C13.78 4.8828 13.4084 4.62923 12.9995 4.45623C12.5905 4.28324 12.1523 4.1942 11.7096 4.1942H9.01326V0.751777C9.01326 0.56918 8.94223 0.394061 8.81582 0.264946C8.6894 0.13583 8.51794 0.0632935 8.33916 0.0632935H0.924097ZM9.80262 11.079H9.01326V5.57116H11.7096C12.246 5.57116 12.7604 5.78877 13.1396 6.17612C13.5189 6.56347 13.7319 7.08882 13.7319 7.63661V10.3905C13.732 10.481 13.7146 10.5705 13.6807 10.6541C13.6468 10.7376 13.5971 10.8135 13.5344 10.8773C13.3621 10.5086 13.0865 10.2003 12.7427 9.99159C12.3988 9.78283 12.002 9.68293 11.6025 9.70452C11.203 9.72612 10.8188 9.86824 10.4984 10.1129C10.178 10.3576 9.93589 10.6938 9.80262 11.079ZM3.1439 11.2808C3.20608 11.215 3.28046 11.1626 3.36271 11.1265C3.44495 11.0904 3.5334 11.0714 3.62291 11.0706C3.71241 11.0698 3.80118 11.0872 3.88402 11.1218C3.96687 11.1565 4.04213 11.2076 4.10542 11.2722C4.16872 11.3369 4.21877 11.4137 4.25267 11.4984C4.28656 11.583 4.30362 11.6736 4.30284 11.765C4.30206 11.8565 4.28346 11.9468 4.24813 12.0308C4.21281 12.1148 4.16145 12.1908 4.09707 12.2543C3.96993 12.3797 3.79965 12.4491 3.62291 12.4475C3.44616 12.4459 3.27709 12.3735 3.15211 12.2459C3.02712 12.1182 2.95623 11.9456 2.95469 11.765C2.95316 11.5845 3.0211 11.4106 3.1439 11.2808ZM11.0355 11.7675C11.0355 11.5849 11.1066 11.4098 11.233 11.2807C11.3594 11.1516 11.5309 11.079 11.7096 11.079C11.8884 11.079 12.0599 11.1516 12.1863 11.2807C12.3127 11.4098 12.3837 11.5849 12.3837 11.7675C12.3837 11.9501 12.3127 12.1252 12.1863 12.2543C12.0599 12.3835 11.8884 12.456 11.7096 12.456C11.5309 12.456 11.3594 12.3835 11.233 12.2543C11.1066 12.1252 11.0355 11.9501 11.0355 11.7675Z"
                    fill="var(--main-dark)"
                  />
                </svg>
              }
              description="order placed"
            />
            <Stepper.Step
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0912 2.34493C12.0912 2.34526 12.0909 2.34548 12.0906 2.34532L10.6082 1.56333C9.30613 0.877113 8.65508 0.53363 7.9551 0.53363C7.25512 0.53363 6.60408 0.876368 5.30199 1.56333C5.19865 1.618 5.1961 1.76512 5.29749 1.82334L11.4333 5.34653C11.5876 5.43513 11.7761 5.44033 11.935 5.3604L14.0462 4.29867C14.3559 4.1429 14.429 3.73955 14.1507 3.53276C13.6757 3.17983 13.0185 2.83317 12.0919 2.34453C12.0916 2.34438 12.0912 2.34459 12.0912 2.34493ZM15.3018 5.6098C15.263 5.27844 14.9058 5.1168 14.6077 5.26663L12.5105 6.3208C12.3317 6.41072 12.2188 6.59382 12.2188 6.79403V8.72954C12.2188 8.87775 12.1602 9.01988 12.0559 9.12468C11.9516 9.22948 11.8101 9.28835 11.6626 9.28835C11.5151 9.28835 11.3737 9.22948 11.2694 9.12468C11.1651 9.01988 11.1065 8.87775 11.1065 8.72954V7.88437C11.1065 7.4902 10.6913 7.23414 10.3391 7.4111L8.8031 8.18279C8.62417 8.27269 8.51123 8.45582 8.51123 8.65606V14.6851C8.51123 15.0297 8.83417 15.275 9.15034 15.1378C9.54326 14.9672 10.0061 14.7233 10.6082 14.4056L12.0912 13.6232C13.6862 12.782 14.4841 12.3618 14.9275 11.6056C15.3702 10.85 15.3702 9.90901 15.3702 8.02916V7.94199C15.3702 6.93313 15.3702 6.19454 15.3018 5.6098ZM6.75986 15.1378C7.07604 15.275 7.39897 15.0297 7.39897 14.6851V8.65678C7.39897 8.45655 7.28606 8.27343 7.10714 8.18352L1.30246 5.26654C1.00438 5.11674 0.647181 5.27839 0.608425 5.60973C0.540039 6.19439 0.540039 6.93268 0.540039 7.9405V8.02767C0.540039 9.90901 0.540039 10.85 0.982718 11.6056C1.42614 12.3618 2.224 12.7828 3.81898 13.624L5.30199 14.4056C5.90406 14.7233 6.36694 14.9672 6.75986 15.1378ZM1.25189 3.99184C1.25189 3.99171 1.25202 3.99163 1.25214 3.99169L7.71736 7.23989C7.86695 7.31504 8.04326 7.31505 8.19286 7.23992L9.60415 6.53108C9.98133 6.34163 9.9962 5.80865 9.63017 5.59846L3.97022 2.34842C3.9236 2.32166 3.86653 2.32062 3.81898 2.34567C2.50457 3.03845 1.73123 3.44599 1.25219 3.99196C1.25208 3.99208 1.25189 3.992 1.25189 3.99184Z"
                    fill="var(--main-dark)"
                  />
                </svg>
              }
              description="order placed"
            />
          </Stepper>

          <div style={{ marginTop: "45px", width: "90%" }}>
            <h2 style={{ fontWeight: "500" }}>
              <span style={{ color: "#FFFFFF" }}>Shipping </span>
              <span style={{ color: "#FFFFFFCC" }}>#{trackingid}</span>
            </h2>
            <p style={{ color: "#FFFFFF99", fontWeight: "500" }}>
              Your order has been shipped, and delivery is expected between{" "}
              <span style={{ color: "#FFFFFF" }}>
                {formattedStartDate} to {formattedEndDate}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card3;
