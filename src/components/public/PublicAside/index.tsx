import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// type MenuKey = 'department' | 'employees';

// interface IPublicAsideProps {
//     openMenus: Record<MenuKey, boolean>;
//     handleMenuClick: (menu: MenuKey) => void;
//     onSortByTotalStats: (viewType: string) => void;
//     onSortByDirection: (viewType: string) => void;
//     sortOption: string | null;
// }

// const PublicAside = ({ openMenus, handleMenuClick, onSortByTotalStats, onSortByDirection, sortOption }: IPublicAsideProps) => {
//     const [activeSort, setActiveSort] = useState({ type: 'department', order: 'total-stats' }); // По умолчанию 'Общая статистика', выделяет активную кнопку Общая статистика/По направлению

//     const navigate = useNavigate();

//     const handleDepartmentClick = () => {
//         navigate('/department-statistics?sort=total-stats'); // Переход с параметром сортировки
//     };

//     const handleEmployeesClick = () => {
//         navigate('/employees-statistics?total-stats'); // Переход с параметром сортировки
//     };

//     return (
//         <>
//             {/* Если использовать NavLink, то параметр sort не будет передаваться в адресную строку. Если использовать тег button, то параметр sort будет передаваться в адресную строку */}
//             <NavLink
//                 to="/department-statistics"
//                 className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}
//                 onClick={() => {
//                     handleDepartmentClick();
//                     handleMenuClick('department');
//                     setActiveSort({ type: 'department', order: 'total-stats' });
//                 }}
//             >
//                 <img src={require('./img/group-icon.png')} alt="Статистика отдела" className="sidebar__item_icon" />
//                 Статистика отдела
//             </NavLink>

//             {openMenus.department && (
//                 <ul className="sidebar__submenu-list">
//                     <li className="sidebar__submenu-item">
//                         <button
//                             className={`sidebar__button-sort ${activeSort.type === 'department' && activeSort.order === 'total-stats' ? 'sidebar__button-sort_active' : ''}`}
//                             onClick={() => {
//                                 setActiveSort({ type: 'department', order: 'total-stats' });
//                                 onSortByTotalStats('department');
//                             }}
//                         >
//                             Общая статистика
//                         </button>
//                     </li>
//                     <li className="sidebar__submenu-item">
//                         <button
//                             className={`sidebar__button-sort ${activeSort.type === 'department' && activeSort.order === 'direction' ? 'sidebar__button-sort_active' : ''}`}
//                             onClick={() => {
//                                 setActiveSort({ type: 'department', order: 'direction' });
//                                 onSortByDirection('department');
//                             }}
//                         >
//                             По направлению
//                         </button>
//                     </li>
//                 </ul>
//             )}
//             <button
//                 className={`sidebar__item`}
//                 onClick={() => {
//                     handleEmployeesClick();
//                     handleMenuClick('employees');
//                     setActiveSort({ type: 'employees', order: 'total-stats' });
//                 }}
//             >
//                 <img src={require('./img/user-icon.png')} alt="Статистика сотрудников" className="sidebar__item_icon" />
//                 Статистика сотрудников
//             </button>

//             {openMenus.employees && (
//                 <ul className="sidebar__submenu-list">
//                     <li className="sidebar__submenu-item">
//                         <button
//                             className={`sidebar__button-sort ${activeSort.type === 'employees' && activeSort.order === 'total-stats' ? 'sidebar__button-sort_active' : ''}`}
//                             onClick={() => {
//                                 setActiveSort({ type: 'employees', order: 'total-stats' });
//                                 onSortByTotalStats('employees');
//                             }}
//                         >
//                             Общая статистика
//                         </button>
//                     </li>
//                     <li className="sidebar__submenu-item">
//                         <button
//                             className={`sidebar__button-sort ${activeSort.type === 'employees' && activeSort.order === 'direction' ? 'sidebar__button-sort_active' : ''}`}
//                             onClick={() => {
//                                 setActiveSort({ type: 'employees', order: 'direction' });
//                                 onSortByDirection('employees');
//                             }}
//                         >
//                             По направлению
//                         </button>
//                     </li>
//                 </ul>
//             )}

//             <NavLink to="/goals" className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}>
//                 <img src={require('./img/goals-icon.png')} alt="Цели отдела" className="sidebar__item_icon" />
//                 Цели отдела
//             </NavLink>
//             <NavLink to="/achievements" className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}>
//                 <img src={require('./img/achievements-icon.png')} alt="Достижения" className="sidebar__item_icon" />
//                 Достижения
//             </NavLink>
//         </>
//     );
// };

// export default PublicAside;

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
    isAutoSwitching: boolean;
    setIsAutoSwitching: (value: boolean) => void;
}

const PublicAside = ({ openMenus, handleMenuClick, onSortByTotalStats, onSortByDirection, isAutoSwitching, setIsAutoSwitching }: IPublicAsideProps) => {
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
        navigate(`${path}?sort=${order || 'total-stats'}`);
    };

    return (
        <>
            {menuItems.map((item, index) => (
                <div key={index} className="sidebar__group">
                    {/* Если использовать NavLink, то параметр sort не будет передаваться в адресную строку. Если использовать тег button, то параметр sort будет передаваться в адресную строку */}
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
                                            console.log(`Clicked: ${sub.label}`);
                                            setActiveSort({ type: sub.sortType, order: sub.order });
                                            sub.order === 'total-stats' ? onSortByTotalStats(sub.sortType) : onSortByDirection(sub.sortType);
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
            <div className="sidebar__auto-switch">
                <label>
                    <input type="checkbox" checked={isAutoSwitching} onChange={() => setIsAutoSwitching(!isAutoSwitching)} />
                    Автоматическое переключение страниц
                </label>
            </div>
        </>
    );
};

export default PublicAside;
