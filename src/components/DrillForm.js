import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import { SubmitDrillForm } from "../features/apiCall";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
const DrillForm = ({ activity, index, total,disabled,fetchDrills }) => {
  const [formData, setFormData] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [submitchoice, setsubmitchoice] = useState(false)
  useEffect(() => {
    if (activity?.form) {
      const updatedFormData = activity.form.map((item) => ({
        ...item,
        value: item.value || "", // Set value to existing value or empty string
      }));
      setFormData(updatedFormData);
    }
  }, [activity]);

  const handleInputChange = (e, key) => {
    const updatedFormData = formData.map((item) =>
      item.key === key ? { ...item, value: e.target.value } : item
    );
    setFormData(updatedFormData);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
   
    var isformdata_Okay=true;
    formData.map((item)=>{ 
      if(item.value.length==0){
         toast.error(`Please fill ${item.label}`)
         
         isformdata_Okay=false;
        
      }
     
     
    })
 if(isformdata_Okay){
  open();
 }
   
   
    
 
   
  };
 const submithandler=async(res)=>{ 
  toast.success("Hold on submitting your response")
  
  
  if(res){
   
    try {
      console.log("Form data submitted:", formData);

      const success = await SubmitDrillForm(dispatch, {
        activityId: activity._id,
        formData,
      });
      close();
      setsubmitchoice(false)
      toast.success("Response Submitted")
      window.location.reload()
      
    } catch (error) {
      toast.error("Unexpected Error !");
      console.log(error)
      setsubmitchoice(false)
      close();
    }
  }
 }
 
  return (
    <>
     <Modal opened={opened} onClose={()=>{close(); setsubmitchoice(false)}}  overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }} centered>
       
       <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
           <h4>Submit</h4>
           <p>The submitted data will not be edited</p>
           <button className="purple-button m-auto" onClick={()=>{setsubmitchoice(true);submithandler(true)}}>Confirm</button>
       </div>
       
      </Modal>
      <div className="drill-main-box calibration-forms">
        <h5>NeuroTrainer (Calibration)</h5>
        <span style={{ color: "rgb(178 170 170)", fontSize: "16px" }}>
          Drill {index} of {total}
        </span>
      
      <Container>
        <Form onSubmit={handleSubmit} style={{display:"grid",gridTemplateRows:"repeat(auto-fit, 1fr)",gridTemplateColumns:"repeat(2, 1fr)"}}>
          {formData.map((field, index) => (
            <Form.Group key={index} controlId={field.key} className="mb-4">
              <Form.Label>{field.label}</Form.Label>
              {field.type === "text" && (
                <Form.Control
                  type="text"
                  disabled={disabled}
                  style={{background:"#F4F4F4",border:"none",maxWidth:"100%",margin:"0px"}}
                  name={field.key}
                  value={field.value || ""}
                  onChange={(e) => handleInputChange(e, field.key)}
                  placeholder={`Enter ${field.label}`}
                />
              )}
              {field.type === "multipleChoice" && (
                <Form.Control
                  as="select"
                  disabled={disabled}
                  name={field.key}
                  value={field.value || ""}
                  style={{background:"#F4F4F4",border:"none",maxWidth:"100%",margin:"0px"}}
                  onChange={(e) => handleInputChange(e, field.key)}
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              )}
              {field.type === "checkBox" && (
               
                <div
                 
                  
                  style={{maxWidth:"100%",paddingRight:"30%"}}
                  
                >
                  <Select
                  isMulti
                  isDisabled={disabled}
                  options={field.options.map((option, optionIndex) => ({
                    value: option,
                    label: option,
                  }))}
               
                  value={
                    Array.isArray(field.value)
                      ? field.value.map((value) => ({
                          value,
                          label: value,
                        }))
                      : []
                  }
                  onChange={(selectedOptions) => {
                    const selectedValues = selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : [];
                    handleInputChange(
                      { target: { value: selectedValues } },
                      field.key
                    );
                  }}
                /> 
                           </div>
              )}
            </Form.Group>
          ))}
          {/* Button for completion */}
         
         
        </Form>
        <div className="w-100 d-flex mt-4">
            {" "}
            <button
              className="purple-button m-auto"
              type="submit"
              onClick={handleSubmit}
              style={{ width: "170px" }}
            >
              Complete
            </button>
          </div>
      </Container>
      </div>
    
    </>
  );
};
export default DrillForm;
