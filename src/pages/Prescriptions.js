import React, { useEffect, useState } from "react";
import AtheleteMenu from "../components/layout/AtheleteMenu";
import { TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useSearchParams,useParams } from "react-router-dom";
import { GetRecentPrescriptions } from "../features/apiCall";
import { useDispatch } from "react-redux";
const Prescriptions = () => {
    const navigate=useNavigate()
    let { presId,appointmentid } = useParams();
    const [presc,setpresc]=useState([])
    const dispatch=useDispatch()
    console.log(presc.form)
    const fetchprescription= async()=>{
       const {form}= await GetRecentPrescriptions(dispatch,{presId,appointmentid})
       setpresc(form)
    }
    useEffect(()=>{
      fetchprescription()
    },[])
  return (
    <AtheleteMenu>
      <div style={{ padding: "30px" }}>
        <div className="d-flex gap-5 ">
          <svg
            onClick={()=>{navigate("/a-booking")}}
            width="40"
            height="61"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 19.7C0 12.9794 0 9.61905 1.30792 7.05211C2.4584 4.79417 4.29417 2.9584 6.55211 1.80792C9.11905 0.5 12.4794 0.5 19.2 0.5H20.8C27.5206 0.5 30.8809 0.5 33.4479 1.80792C35.7058 2.9584 37.5416 4.79417 38.6921 7.05211C40 9.61905 40 12.9794 40 19.7V21.3C40 28.0206 40 31.3809 38.6921 33.9479C37.5416 36.2058 35.7058 38.0416 33.4479 39.1921C30.8809 40.5 27.5206 40.5 20.8 40.5H19.2C12.4794 40.5 9.11905 40.5 6.55211 39.1921C4.29417 38.0416 2.4584 36.2058 1.30792 33.9479C0 31.3809 0 28.0206 0 21.3V19.7Z"
              fill="#1C1C1C"
              fill-opacity="0.05"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.9254 15.0581C23.1915 15.3021 23.1915 15.6979 22.9254 15.9419L18.4375 20.0581C18.1714 20.3021 18.1714 20.6979 18.4375 20.9419L22.9254 25.0581C23.1915 25.3021 23.1915 25.6979 22.9254 25.9419C22.6593 26.186 22.2278 26.186 21.9617 25.9419L17.4738 21.8258C16.6754 21.0936 16.6754 19.9064 17.4738 19.1742L21.9617 15.0581C22.2278 14.814 22.6593 14.814 22.9254 15.0581Z"
              fill="#1C1C1C"
            />
          </svg>
          <div>
            <p style={{ margin: 0, fontWeight: "600", fontSize: "18px" }}>
              Prescription
            </p>{" "}
            <p style={{ margin: 0, color: "#8C90AA", fontSize: "15px" }}>
              Mr. Scott Mctominay
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0px 10px 25px -5px #0000001A",
            padding: "30px",
          }}
        >
          <div className="mb-3 d-flex flex-wrap gap-3">
            {presc?.form?.map((item,index)=>{
              const form = Object.entries(item);
              console.log(form)
              return form?.map((field)=>{
                return (
                  <TextInput
                  label={field[0]}
                  placeholder={field[1]}
                  variant="filled"
                  radius={"8px"}
                  style={{ width: "45%", borderRadius: "8px" }}
                  inputWrapperOrder={["label", "error", "input", "description"]}
                />
                 )
                   
              })
              
                 
            
               
            })}
            
           
          </div>
          
         

          
        </div>
      </div>
    </AtheleteMenu>
  );
};

export default Prescriptions;
