import React from "react";
import { Container, Row } from "react-bootstrap";
// import image from "../../../public/images/profile_heading.png";
import AtheleteMenu from "./AtheleteMenu";
import ProfileCard from "./Components/ProfileCard";
import ProfileContent from "./Components/ProfileContent";
import ProfileDetails from "./Components/ProfileDetails";
import ProfileNavigation from "./Components/ProfileNavigation";

const AtheProfileLayout = ({ children }) => {
  return (
    <AtheleteMenu>
      {/* <section style={{ padding:"30px",background:"white",borderRadius:"16px" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* <img src="/images/profile_heading.png" /> 
       
         <Container style={{ width: "90%" }}>
          <ProfileDetails />

          <Row
            className="justify-content-between"
            style={{
              gap: "20px",
              position: "relative",
              bottom: "50px",
              height: "70vh",
            }}
          >
            <ProfileNavigation />
            <ProfileContent>{children}</ProfileContent>
          </Row>
        </Container> 
        
        
 

      {/* </section> */}
          <div style={{width:"100%",padding:"30px"}}>{children}</div> 
    </AtheleteMenu>
  );
};

export default AtheProfileLayout;
