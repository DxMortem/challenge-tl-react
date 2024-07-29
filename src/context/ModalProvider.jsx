import { createContext, useState } from 'react';
import { Modal } from '../components/Modal';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const onClose = () => {
    setOpenModal(false);
    setModalChildren(null);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, setModalChildren }}
    >
      {children}
      <Modal isOpen={openModal} children={modalChildren} onClose={onClose} />
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
