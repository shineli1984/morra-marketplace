import React, { ReactNode } from 'react';
// import './Modal.css';

interface ModalProps {
  _id:string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children,_id }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div id={_id}></div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
