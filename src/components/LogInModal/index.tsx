// import './LogInModal.scss';
import { Link } from 'react-router-dom';
import Popup from '../Popup';

interface ISettingsModalLogInProps {
    onClose: () => void;
}

const LogInModal = ({ onClose }: ISettingsModalLogInProps) => {
    return (
        <Popup onClose={onClose} title="Вход в личный кабинет">
            <form className="modal__form">
                <div className="modal__inputbox">
                    <input className="modal__input" type="text" placeholder=" " />
                    <label className="modal__label">Логин</label>
                </div>

                <div className="modal__inputbox">
                    <input className="modal__input" type="password" placeholder=" " />
                    <label className="modal__label">Пароль</label>
                </div>

                <button className="modal__button-submit" type="submit">
                    Войти
                </button>
                <p className="modal__rps">
                    <Link to="/" className="modal__link">
                        Забыли пароль?
                    </Link>
                </p>
            </form>
        </Popup>
    );
};
export default LogInModal;
