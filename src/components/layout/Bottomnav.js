import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Bottomnav = ({ bottomNavItems }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set a threshold value for when the header should appear
      const threshold = 100;

      // Update the state based on the scroll position
      setShowHeader(scrollY > threshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount
  return (
    <>
      {showHeader && (
        <div className={`sticky-header ${showHeader ? "show" : ""}`}>
          <p style={{ color: "white" }}>
            <span style={{ marginRight: "4px" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5L12.6 6.4L14.2 8H6V10H14.2L12.6 11.6L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z"
                  fill="white"
                />
              </svg>
            </span>
            Logout
          </p>
        </div>
      )}
      <div className="btm-nav">
        {bottomNavItems?.map((items) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
                width: "40%",
              }}
              className="btm-nav-btn"
            >
              <NavLink to={items.to}>
                <img src={items.iconPath} style={{ height: "24px" }} />
                <p style={{ fontSize: "10px" }}>{items.itemName}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Bottomnav;
