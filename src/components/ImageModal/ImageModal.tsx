import css from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export interface ModalState {
  modalIsOpen: boolean;
  srcUrl: string;
  altDescription: string;
  authorName: string;
  likes: string;
  largeDescription?: string;
}

interface ImageModalProps {
  modalState: ModalState;
  onModalClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ modalState, onModalClose }) => {
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