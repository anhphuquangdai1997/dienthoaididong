import React from 'react';
import { Modal } from "flowbite-react";

const ModalMenu = ({ openModal, setOpenModal,services,text }) => {
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>{text}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          
            {services.map((service)=>(
              <p key={service} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{service}</p>
            ))}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalMenu
