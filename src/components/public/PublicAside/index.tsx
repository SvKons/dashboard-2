import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

type MenuKey = 'department' | 'employees';

interface PublicAsideProps {
    openMenus: Record<MenuKey, boolean>;
    handleMenuClick: (menu: MenuKey) => void;
    onSortByTotalStats: (viewType: string) => void;
    onSortByDirection: (viewType: string) => void;
    sortOption: string | null;
}

const PublicAside = ({ openMenus, handleMenuClick, onSortByTotalStats, onSortByDirection, sortOption }: PublicAsideProps) => {
    const navigate = useNavigate();

    const [activeSort, setActiveSort] = useState({ type: 'department', order: 'total-stats' }); // По умолчанию 'Общая статистика', выделяет активную кнопку Общая статистика/По направлению

    const handleDepartmentClick = () => {
        navigate('/department-statistics?sort=total-stats'); // Переход с параметром сортировки
    };

    const handleEmployeesClick = () => {
        navigate('/employees-statistics?total-stats'); // Переход с параметром сортировки
    };

    return (
        <>
            {/* Если использовать NavLink, то параметр sort не будет передаваться в адресную строку. Если использовать тег button, то параметр sort будет передаваться в адресную строку */}
            <NavLink
                to="/department-statistics"
                className="sidebar__item"
                onClick={() => {
                    handleDepartmentClick();
                    handleMenuClick('department');
                    setActiveSort({ type: 'department', order: 'total-stats' });
                }}
            >
                <img src={require('./img/group-icon.png')} alt="Статистика отдела" className="sidebar__item_icon" />
                Статистика отдела
            </NavLink>

            {openMenus.department && (
                <ul className="sidebar__submenu-list">
                    <li className="sidebar__submenu-item">
                        <button
                            className={`sidebar__button-sort ${activeSort.type === 'department' && activeSort.order === 'total-stats' ? 'sidebar__button-sort_active' : ''}`}
                            onClick={() => {
                                setActiveSort({ type: 'department', order: 'total-stats' });
                                onSortByTotalStats('department');
                            }}
                        >
                            Общая статистика
                        </button>
                    </li>
                    <li className="sidebar__submenu-item">
                        <button
                            className={`sidebar__button-sort ${activeSort.type === 'department' && activeSort.order === 'direction' ? 'sidebar__button-sort_active' : ''}`}
                            onClick={() => {
                                setActiveSort({ type: 'department', order: 'direction' });
                                onSortByDirection('department');
                            }}
                        >
                            По направлению
                        </button>
                    </li>
                </ul>
            )}
            <button
                className="sidebar__item"
                onClick={() => {
                    handleEmployeesClick();
                    handleMenuClick('employees');
                    setActiveSort({ type: 'employees', order: 'total-stats' });
                }}
            >
                <img src={require('./img/user-icon.png')} alt="Статистика сотрудников" className="sidebar__item_icon" />
                Статистика сотрудников
            </button>

            {openMenus.employees && (
                <ul className="sidebar__submenu-list">
                    <li className="sidebar__submenu-item">
                        <button
                            className={`sidebar__button-sort ${activeSort.type === 'employees' && activeSort.order === 'total-stats' ? 'sidebar__button-sort_active' : ''}`}
                            onClick={() => {
                                setActiveSort({ type: 'employees', order: 'total-stats' });
                                onSortByTotalStats('employees');
                            }}
                        >
                            Общая статистика
                        </button>
                    </li>
                    <li className="sidebar__submenu-item">
                        <button
                            className={`sidebar__button-sort ${activeSort.type === 'employees' && activeSort.order === 'direction' ? 'sidebar__button-sort_active' : ''}`}
                            onClick={() => {
                                setActiveSort({ type: 'employees', order: 'direction' });
                                onSortByDirection('employees');
                            }}
                        >
                            По направлению
                        </button>
                    </li>
                </ul>
            )}

            <NavLink to="/goals" className="sidebar__item">
                <img src={require('./img/goals-icon.png')} alt="Цели отдела" className="sidebar__item_icon" />
                Цели отдела
            </NavLink>
            <NavLink to="/achievements" className="sidebar__item">
                <img src={require('./img/achievements-icon.png')} alt="Достижения" className="sidebar__item_icon" />
                Достижения
            </NavLink>
        </>
    );
};

export default PublicAside;
