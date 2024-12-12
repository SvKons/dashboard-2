import { useState } from 'react';
import SettingsModal from '../SettingsModal';
import './Header.scss';
import LogInModal from '../LogInModal';
import HeaderFilterList from '../public/HeaderFilterList';
import { UserRole } from '../../types/types';
import RunningLine from '../RunningLine';

interface IHeaderProps {
    sortOption: string | null;
    filterOption: string;
    onFilterChange: (option: string) => void;
    onCustomPeriodSelect: (start: Date, end: Date) => void;
    userRole: UserRole;
}

const Header = ({ filterOption, onFilterChange, onCustomPeriodSelect, userRole, sortOption }: IHeaderProps) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isModalSettingsVisible, setIsModalSettingsVisible] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);
    const [activeFilter, setActiveFilter] = useState(filterOption);
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const openModal = () => {
        setIsModalSettingsVisible(true);
        setIsMenuVisible(false);
    };

    const closeModal = () => {
        setIsModalSettingsVisible(false);
    };

    const openLogInModal = () => {
        setIsLogIn(true);
    };

    const closeModalLogIn = () => {
        setIsLogIn(false);
    };

    return (
        <div className="header">
            <header className="header__container">
                <div className="header__logo-wrap">
                    <img className="header__logo" src={require('./img/logo.jpg')} alt="Логотип" />
                </div>
                <div className="header__filter-options">
                    {userRole === UserRole.Public && <HeaderFilterList filterOption={filterOption} setDate={setDate} date={date} onFilterChange={onFilterChange} activeFilter={activeFilter} sortOption={sortOption} onCustomPeriodSelect={onCustomPeriodSelect} />}
                    {userRole === UserRole.Manager ? <RunningLine role="manager" /> : userRole === UserRole.Leader ? <RunningLine role="leader" /> : null}
                </div>
                <div className="header__buttons">
                    <button className="header__button header__button_settings" onClick={openModal}>
                        <img src={require('./img/settings.png')} alt="Настройки" className="header__icon" />
                    </button>
                    <button className="header__button header__button_login" onClick={openLogInModal}>
                        <svg className="header__icon" width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.583 33.917h7.709a3.083 3.083 0 0 0 3.083-3.084V6.167a3.083 3.083 0 0 0-3.083-3.084h-7.709" stroke="#fff" />
                            <path d="m16.958 24.667 6.167-6.167-6.167-6.167M23.125 18.5h-18.5" stroke="#fff" />
                        </svg>
                    </button>
                </div>
            </header>
            {isLogIn && <LogInModal onClose={closeModalLogIn} />}

            {isModalSettingsVisible && <SettingsModal onClose={closeModal} />}
        </div>
    );
};
export default Header;
