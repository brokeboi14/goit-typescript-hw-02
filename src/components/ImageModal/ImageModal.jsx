import css from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const ImageModal = ({ modalState, onModalClose }) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.modalOverlay}
      isOpen={modalState.modalIsOpen}
      onRequestClose={onModalClose}
    >
      <img src={modalState.srcUrl} alt={modalState.altDescription} />
      <ul className={css.modalInfoList}>
        <li className={css.modalInfoListItem}>
          {modalState.authorName}
        </li>
        <li className={css.modalInfoListItem}>
          {modalState.likes}
        </li>
      </ul>
      <p className={css.modalInfoDescription}>{modalState.largeDescription}</p>
    </Modal>
  );
};

export default ImageModal;