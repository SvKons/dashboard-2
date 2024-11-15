import Popup from '../Popup';

interface SettingsModalProps {
    onClose: () => void;
}

interface SettingsModalProps {
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
    return (
        <Popup onClose={onClose} title="Настройки">
            <div>
                {/* Настройки для отображения видимости блоков */}
                <h3>Настройки видимости блоков</h3>
            </div>
        </Popup>
    );
};

export default SettingsModal;
