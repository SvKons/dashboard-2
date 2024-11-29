import Button from '../Button';
import './DeleteConfirmationPopup.scss';

interface IDeleteConfirmationPopupProps {
    onClose: () => void;
    onConfirmDelete: () => void;
}

const DeleteConfirmationPopup = ({ onClose, onConfirmDelete }: IDeleteConfirmationPopupProps) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <h2 className="modal__title">Подвердите удаление</h2>
                    <button className="modal__close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="delete-popup">
                    <div className="delete-popup__buttons">
                        <Button label="Удалить" onClick={onConfirmDelete} className="my-button delete-popup__button delete-popup__button_delete" />
                        <Button label="Отмена" onClick={onClose} className="my-button delete-popup__button delete-popup__button_cancel" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationPopup;
