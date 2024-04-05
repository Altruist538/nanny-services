import React from 'react';
// import { useState } from 'react';
import Modal from 'react-modal';
import ClBtnIco from '../../data/x.svg';
import { CloseButton, CloseButtonIco, ModalBlock } from './Modal.styled';
Modal.setAppElement('#modal-root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    backgroundColor: 'fbfbfb',
    border: '1px solid #ccc',
    borderRadius: '30px',
    padding: '64px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    // height: ' 489px',
  },
  overlay: {
    backgroundColor: 'rgba(11, 11, 11, 0.6)', // Задаем цвет и прозрачность фона
  },
};
const ModalSkelet = ({ ModalFilling, isOpen, toggleModal }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsOpen(!isOpen);
  //   };
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        // contentLabel="Пример модального окна"
      >
        <CloseButton onClick={toggleModal}>
          <CloseButtonIco src={ClBtnIco} />
        </CloseButton>
        <ModalBlock>{ModalFilling}</ModalBlock>
      </Modal>
    </div>
  );
};

export default ModalSkelet;
