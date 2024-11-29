import Popup from '../Popup';

interface ISettingsModalProps {
    onClose: () => void;
}

interface ISettingsModalProps {
    onClose: () => void;
}

const SettingsModal = ({ onClose }: ISettingsModalProps) => {
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
