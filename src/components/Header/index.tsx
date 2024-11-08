import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import SettingsModal from '../SettingsModal';
import './Header.scss';

interface HeaderProps {
    sortOption: string | null;
    filterOption: string;
    onFilterChange: (option: string) => void;
    onCustomPeriodSelect: (start: Date, end: Date) => void;
}

const Header = ({ sortOption, filterOption, onFilterChange, onCustomPeriodSelect }: HeaderProps) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState(filterOption);

    const datePickerRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const location = useLocation(); // Получаем текущий URL

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const openModal = () => {
        setIsModalVisible(true);
        setIsMenuVisible(false);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const toggleDatePicker = () => {
        setIsDatePickerVisible(prev => !prev);
    };

    const handleDateRangeSelect = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        // Устанавливаем даты, преобразуем null в undefined для совместимости
        setStartDate(start !== null ? start : undefined);
        setEndDate(end !== null ? end : undefined);

        // Закрываем календарь после выбора конечной даты
        if (end) {
            setIsDatePickerVisible(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        // Закрываем календарь, если клик вне его области и кнопки
        if (datePickerRef.current && buttonRef.current && !datePickerRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
            setIsDatePickerVisible(false);
        }

        // Закрываем меню, если клик вне его области и кнопки
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuVisible(false);
        }
    };

    const handleFilterChange = (option: string) => {
        onFilterChange(option);
        setActiveFilter(option); // Обновляем активный фильтр
        if (option === 'choosePeriod') {
            toggleDatePicker(); // Открываем календарь, если это выбрано
        }
    };

    // Определение активности Текущего месяца
    const isCurrentMonthActive = activeFilter === 'currentMonth' && (location.pathname === '/department-statistics' || location.pathname === '/employees-statistics');

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Устанавливаем значение по умолчанию для фильтра, если не передано
        if (!filterOption) {
            onFilterChange('currentMonth');
        }
    }, [filterOption, onFilterChange]);

    return (
        <div className="header">
            <header className="header__container">
                <div className="header__logo-wrap">
                    <img className="header__logo" src={require('./img/logo.png')} alt="Логотип" />
                </div>
                <div className="header__filter-options">
                    <div className="header__filter-list">
                        <button className={`header__filter-item ${activeFilter === 'prevMonth' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('prevMonth')}>
                            Прошлый месяц
                        </button>
                        <button className={`header__filter-item ${isCurrentMonthActive ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('currentMonth')}>
                            Текущий месяц
                        </button>
                        <button className={`header__filter-item ${activeFilter === 'nextMonth' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('nextMonth')}>
                            Следующий месяц
                        </button>
                        <div className="header__date-picker-container">
                            <button className={`header__filter-item ${activeFilter === 'choosePeriod' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('choosePeriod')} ref={buttonRef}>
                                Выбрать период
                            </button>
                            {isDatePickerVisible && (
                                <div className="header__datepicker" ref={datePickerRef}>
                                    <DatePicker selected={startDate} onChange={handleDateRangeSelect} startDate={startDate} endDate={endDate} selectsRange inline />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="header__buttons">
                    <button className="header__button header__button_settings" onClick={toggleMenu}>
                        <img src={require('./img/settings.png')} alt="Настройки" className="header__icon" />
                    </button>
                    {isMenuVisible && (
                        <div className="header__button_sublist" ref={menuRef}>
                            <div className="header__button_subitem" onClick={openModal}>
                                Настройки
                            </div>
                            <div className="header__button_subitem">Пункт 2</div>
                        </div>
                    )}
                    <button className="header__button header__button_login">
                        <svg className="header__icon" width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.583 33.917h7.709a3.083 3.083 0 0 0 3.083-3.084V6.167a3.083 3.083 0 0 0-3.083-3.084h-7.709" stroke="#fff" />
                            <path d="m16.958 24.667 6.167-6.167-6.167-6.167M23.125 18.5h-18.5" stroke="#fff" />
                        </svg>
                    </button>
                    {isModalVisible && <SettingsModal onClose={closeModal} />}
                </div>
            </header>

            {isModalVisible && <SettingsModal onClose={closeModal} />}
        </div>
    );
};

export default Header;
