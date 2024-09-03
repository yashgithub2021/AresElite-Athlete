import React from "react";
import { Modal } from "react-bootstrap";
import {FaTimes} from 'react-icons/fa'
const BootstrapModal = ({
  showModal,
  handleClose,
  modalTitle,
  modalContent,
  className,
  modalFooter,
  bg
}) => {
  return (
    <Modal show={showModal} onHide={handleClose} className={className}  >
    <div style={{background:{bg}, height:"100%",borderRadius:"inherit"}}>

   
      <Modal.Header>
        <Modal.Title>{modalTitle}</Modal.Title>
        <button onClick={handleClose}><FaTimes style={{color:"white",fontSize:"large"}}/></button>
        
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
      <Modal.Footer style={{widht:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
         <div >
         {modalFooter}
         </div>
        
      </Modal.Footer>
      </div>
    </Modal>
    
  );
};

export default BootstrapModal;
