import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose?: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      {children}
    </div>
  );
};

export default Modal;
