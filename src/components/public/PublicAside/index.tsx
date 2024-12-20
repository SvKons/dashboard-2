import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

type MenuKey = 'department' | 'employees';

interface IMenuItem {
    path: string;
    icon: string;
    alt: string;
    label: string;
    submenu?: {
        label: string;
        sortType: string;
        order: string;
    }[];
}

interface IPublicAsideProps {
    openMenus: Record<MenuKey, boolean>;
    handleMenuClick: (menu: MenuKey) => void;
    onSortByTotalStats: (viewType: string) => void;
    onSortByDirection: (viewType: string) => void;
    sortOption: string | null;
    filterOption: string;
    isAutoSwitching: boolean;
    setIsAutoSwitching: (value: boolean) => void;
}

const PublicAside = ({ openMenus, handleMenuClick, onSortByTotalStats, onSortByDirection, isAutoSwitching, setIsAutoSwitching, filterOption }: IPublicAsideProps) => {
    const [activeSort, setActiveSort] = useState({ type: 'department', order: 'total-stats' }); // По умолчанию 'Общая статистика', выделяет активную кнопку Общая статистика/По направлению
    const navigate = useNavigate();

    const menuItems: IMenuItem[] = [
        {
            path: '/department-statistics',
            icon: require('./img/group-icon.png'),
            alt: 'Статистика отдела',
            label: 'Статистика отдела',
            submenu: [
                { label: 'Общая статистика', sortType: 'department', order: 'total-stats' },
                { label: 'По направлению', sortType: 'department', order: 'direction' },
            ],
        },
        {
            path: '/employees-statistics',
            icon: require('./img/user-icon.png'),
            alt: 'Статистика сотрудников',
            label: 'Статистика сотрудников',
            submenu: [
                { label: 'Общая статистика', sortType: 'employees', order: 'total-stats' },
                { label: 'По направлению', sortType: 'employees', order: 'direction' },
            ],
        },
        {
            path: '/goals',
            icon: require('./img/goals-icon.png'),
            alt: 'Цели отдела',
            label: 'Цели отдела',
        },
        {
            path: '/achievements',
            icon: require('./img/achievements-icon.png'),
            alt: 'Достижения',
            label: 'Достижения',
        },
    ];

    const handleItemClick = (path: string, menuKey?: MenuKey, order?: string) => {
        if (menuKey) {
            handleMenuClick(menuKey);
            setActiveSort({ type: menuKey, order: order || 'total-stats' });
        }
        navigate(`${path}?sort=${order || 'total-stats'}&filter=${filterOption}`);
    };

    return (
        <>
            {menuItems.map((item, index) => (
                <div key={index} className="sidebar__group">
                    <NavLink
                        to={item.path}
                        className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}
                        onClick={() => item.submenu && handleItemClick(item.path, item.submenu ? (index === 0 ? 'department' : 'employees') : undefined)}
                    >
                        <img src={item.icon} alt={item.alt} className="sidebar__item_icon" />
                        {item.label}
                    </NavLink>

                    {item.submenu && openMenus[index === 0 ? 'department' : 'employees'] && (
                        <ul className="sidebar__submenu-list">
                            {item.submenu.map((sub, subIndex) => (
                                <li key={subIndex} className="sidebar__submenu-item">
                                    <button
                                        className={`sidebar__button-sort ${activeSort.type === sub.sortType && activeSort.order === sub.order ? 'sidebar__button-sort_active' : ''}`}
                                        onClick={() => {
                                            setActiveSort({ type: sub.sortType, order: sub.order });
                                            sub.order === 'total-stats' ? onSortByTotalStats(sub.sortType) : onSortByDirection(sub.sortType);
                                            // Обновляем URL с фильтром
                                            navigate(`${item.path}?sort=${sub.order}&filter=${filterOption}`);
                                        }}
                                    >
                                        {sub.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            <div className="auto-switch">
                <input type="checkbox" id="auto-switch" checked={isAutoSwitching} className="auto-switch__checkbox" onChange={() => setIsAutoSwitching(!isAutoSwitching)} />
                <label htmlFor="auto-switch" className="auto-switch__label"></label>
            </div>
        </>
    );
};

export default PublicAside;
