import './SettingsModal.scss';

interface SettingsModalProps {
    onClose: () => void;
}

const SettingsModal = ({ onClose }: SettingsModalProps) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>
                    &times;
                </button>
                <h2>Настройки</h2>
                {/* Настройки для отображения видимости блоков */}
            </div>
        </div>
    );
};

export default SettingsModal;
