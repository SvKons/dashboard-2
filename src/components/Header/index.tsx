import { useEffect, useRef, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';
import { ru } from 'date-fns/locale';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file main style file// theme css file
// import { addYears } from 'date-fns';
import SettingsModal from '../SettingsModal';
import './Header.scss';
import LogInModal from '../LogInModal';

interface HeaderProps {
    // sortOption: string | null;
    filterOption: string;
    onFilterChange: (option: string) => void;
    onCustomPeriodSelect: (start: Date, end: Date) => void;
}

const Header = ({ filterOption, onFilterChange, onCustomPeriodSelect }: HeaderProps) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isModalSettingsVisible, setIsModalSettingsVisible] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);
    // Для первого календаря
    // const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    // const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState(filterOption);
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const [openDate, setOpenDate] = useState(false);

    const datePickerRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const location = useLocation(); // Получаем текущий URL

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

    const toggleDatePicker = () => {
        setIsDatePickerVisible(!isDatePickerVisible);
    };

    // Первый календарь
    // const handleDateRangeSelect = (dates: [Date | null, Date | null]) => {
    //     const [start, end] = dates;
    //     // Устанавливаем даты, преобразуем null в undefined для совместимости
    //     setStartDate(start !== null ? start : undefined);
    //     setEndDate(end !== null ? end : undefined);

    //     // Закрываем календарь после выбора конечной даты
    //     if (end) {
    //         setIsDatePickerVisible(false);
    //     }
    // };

    const handleClickOutside = (event: MouseEvent) => {
        // Закрываем календарь, если клик вне его области и кнопки - первый календарь
        // if (datePickerRef.current && buttonRef.current && !datePickerRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
        //     setIsDatePickerVisible(false);
        // }

        // Проверка, был ли клик вне календаря
        if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
            setOpenDate(false); // Закрытие календаря
        }
    };

    const handleFilterChange = (option: string) => {
        onFilterChange(option);
        setActiveFilter(option); // Обновляем активный фильтр
        if (option === 'choosePeriod') {
            // Открываем календарь, если это выбрано
            toggleDatePicker();
        }
    };

    // Определение активности Текущего месяца
    const isCurrentMonthActive = activeFilter === 'currentMonth' && (location.pathname === '/department-statistics' || location.pathname === '/employees-statistics');

    // Использование эффекта для добавления обработчика кликов
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside); // Добавление обработчика
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Удаление обработчика при размонтировании
        };
    }, []);

    useEffect(() => {
        // Устанавливаем значение по умолчанию для фильтра, если не передано
        if (!filterOption) {
            onFilterChange('currentMonth');
        }
    }, [filterOption, onFilterChange]);

    useEffect(() => {
        // Проверяем, находимся ли мы на страницах статистики
        const isStatsPage = ['/department-statistics', '/employees-statistics'].includes(location.pathname);

        // Если мы не на странице статистики, сбрасываем activeFilter на 'currentMonth'
        if (!isStatsPage) {
            setActiveFilter('currentMonth');
        } else {
            // Если на странице статистики, устанавливаем activeFilter в filterOption
            setActiveFilter(filterOption);
        }
    }, [location.pathname, filterOption]);

    const handleChange = (ranges: any) => {
        setDate(ranges.selection);
    };

    const handleClick = () => {
        setOpenDate(!openDate);
    };

    return (
        <div className="header">
            <header className="header__container">
                <div className="header__logo-wrap">
                    <img className="header__logo" src={require('./img/logo.png')} alt="Логотип" />
                </div>
                <div className="header__filter-options">
                    <div className="header__filter-list">
                        <button className={`header__filter-item ${activeFilter === 'prevMonth' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('prevMonth')}>
                            Прошедший год
                        </button>
                        <button className={`header__filter-item ${activeFilter === 'prevMonth' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('prevMonth')}>
                            Прошедший месяц
                        </button>
                        <button className={`header__filter-item ${isCurrentMonthActive ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('currentMonth')}>
                            Текущий месяц
                        </button>
                        <button className={`header__filter-item ${activeFilter === 'nextMonth' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('nextMonth')}>
                            Следующий месяц
                        </button>
                        <div className="header__date-picker">
                            <button className={`header__filter-item ${activeFilter === 'choosePeriod' ? 'header__filter-item_active' : ''}`} onClick={handleClick} ref={buttonRef}>
                                Выбрать период
                            </button>
                            {openDate && (
                                <div ref={datePickerRef} className="header__date-range">
                                    <DateRangePicker ranges={[date]} onChange={handleChange} locale={ru} />
                                </div>
                            )}
                        </div>
                        {/* <div className="header__date-picker-container">
                            <button className={`header__filter-item ${activeFilter === 'choosePeriod' ? 'header__filter-item_active' : ''}`} onClick={() => handleFilterChange('choosePeriod')} ref={buttonRef}>
                                Выбрать период
                            </button>
                            {isDatePickerVisible && (
                                <div className="header__datepicker" ref={datePickerRef}>
                                    <DatePicker selected={startDate} onChange={handleDateRangeSelect} startDate={startDate} endDate={endDate} selectsRange inline />
                                </div>
                            )}
                        </div> */}
                    </div>
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
