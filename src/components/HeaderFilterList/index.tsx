import { useRef, useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { ru } from 'date-fns/locale';
import { useLocation } from 'react-router-dom';
import './HeaderFilterList.scss';

interface FilterListProps {
    // activeFilter: string;
    // sortOption: string | null;
    onFilterChange: (option: string) => void;
    filterOption: string;
    setDate: (date: { startDate: Date; endDate: Date; key: string }) => void;
    date: { startDate: Date; endDate: Date; key: string };
}

const HeaderFilterList = ({ onFilterChange, setDate, date, filterOption }: FilterListProps) => {
    const [activeFilter, setActiveFilter] = useState(filterOption);
    const [openDate, setOpenDate] = useState(false);

    const datePickerRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const location = useLocation(); // Получаем текущий URL

    const handleClickOutside = (event: MouseEvent) => {
        // Проверка, был ли клик вне календаря
        if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
            setOpenDate(false);
        }
    };

    const handleChange = (ranges: any) => {
        setDate(ranges.selection);
    };

    const handleFilterChange = (option: string) => {
        if (option === 'choosePeriod') {
            // Переключаем видимость календаря
            setOpenDate(!openDate);
        } else {
            // Закрываем календарь, если выбран другой фильтр
            setOpenDate(false);
        }
        setActiveFilter(option); // Устанавливаем активный фильтр
        onFilterChange(option); // Передаём изменение в родительский компонент
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

    useEffect(() => {
        // Синхронизация активного фильтра с пропсами
        setActiveFilter(filterOption);
    }, [filterOption]);

    return (
        <div className="filter-list">
            <button className={`filter-list__item ${activeFilter === 'prevYear' ? 'filter-list__item_active' : ''}`} onClick={() => handleFilterChange('prevYear')}>
                Прошедший год
            </button>
            <button className={`filter-list__item ${activeFilter === 'prevMonth' ? 'filter-list__item_active' : ''}`} onClick={() => handleFilterChange('prevMonth')}>
                Прошедший месяц
            </button>
            <button className={`filter-list__item ${isCurrentMonthActive ? 'filter-list__item_active' : ''}`} onClick={() => handleFilterChange('currentMonth')}>
                Текущий месяц
            </button>
            <button className={`filter-list__item ${activeFilter === 'nextMonth' ? 'filter-list__item_active' : ''}`} onClick={() => handleFilterChange('nextMonth')}>
                Следующий месяц
            </button>

            <div className="filter-list__date-picker">
                <button className={`filter-list__item ${activeFilter === 'choosePeriod' ? 'filter-list__item_active' : ''}`} onClick={() => handleFilterChange('choosePeriod')} ref={buttonRef}>
                    Выбрать период
                </button>
                {openDate && (
                    <div ref={datePickerRef} className="filter-list__date-range">
                        <DateRangePicker ranges={[date]} onChange={handleChange} locale={ru} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderFilterList;
