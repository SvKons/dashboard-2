// Сортировка с правильным url

// import { NavLink } from 'react-router-dom';

// type MenuKey = 'department' | 'employees';

// interface ManagerAsideProps {
//     openMenus: Record<MenuKey, boolean>;
//     handleMenuClick: (menu: MenuKey) => void;
//     onSortByDate: (viewType: string) => void;
//     onSortByDirection: (viewType: string) => void;
// }

// const ManagerAside = ({ openMenus, handleMenuClick, onSortByDate, onSortByDirection }: ManagerAsideProps) => (
//     <>
// <NavLink to="/department-statistics" className="sidebar__item" onClick={() => handleMenuClick('department')}>
//     <img src={require('./img/group-icon.png')} alt="Статистика отдела" className="sidebar__item_icon" />
//     Статистика отдела
// </NavLink>
//         {openMenus.department && (
//             <ul className="sidebar__submenu-list">
//                 <li className="sidebar__submenu-item">
//                     <button className="sidebar__button-sort" onClick={() => onSortByDate('department')}>
//                         По дате
//                     </button>
//                 </li>
//                 <li className="sidebar__submenu-item">
//                     <button className="sidebar__button-sort" onClick={() => onSortByDirection('department')}>
//                         По направлению
//                     </button>
//                 </li>
//             </ul>
//         )}

//         <NavLink to="/employees-statistics" className="sidebar__item" onClick={() => handleMenuClick('employees')}>
//             <img src={require('./img/user-icon.png')} alt="Статистика сотрудников" className="sidebar__item_icon" />
//             Статистика сотрудников
//         </NavLink>
//         {openMenus.employees && (
//             <ul className="sidebar__submenu-list">
//                 <li className="sidebar__submenu-item">
//                     <button className="sidebar__button-sort" onClick={() => onSortByDate('employees')}>
//                         По дате
//                     </button>
//                 </li>
//                 <li className="sidebar__submenu-item">
//                     <button className="sidebar__button-sort" onClick={() => onSortByDirection('employees')}>
//                         По направлению
//                     </button>
//                 </li>
//             </ul>
//         )}

//         <NavLink to="/goals" className="sidebar__item">
//             <img src={require('./img/goals-icon.png')} alt="Цели отдела" className="sidebar__item_icon" />
//             Цели отдела
//         </NavLink>
//         <NavLink to="/achievements" className="sidebar__item">
//             <img src={require('./img/achievements-icon.png')} alt="Достижения" className="sidebar__item_icon" />
//             Достижения
//         </NavLink>
//     </>
// );

// export default ManagerAside;

import { NavLink, useNavigate } from 'react-router-dom';

type MenuKey = 'department' | 'employees';

interface ManagerAsideProps {
    openMenus: Record<MenuKey, boolean>;
    handleMenuClick: (menu: MenuKey) => void;
    onSortByDate: (viewType: string) => void;
    onSortByDirection: (viewType: string) => void;
}

const ManagerAside = ({ openMenus, handleMenuClick, onSortByDate, onSortByDirection }: ManagerAsideProps) => {
    const navigate = useNavigate();

    const handleDepartmentClick = () => {
        navigate('/department-statistics?sort=date'); // Переход с параметром сортировки
    };

    const handleEmployeesClick = () => {
        navigate('/employees-statistics?sort=date'); // Переход с параметром сортировки
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
                }}
            >
                <img src={require('./img/group-icon.png')} alt="Статистика отдела" className="sidebar__item_icon" />
                Статистика отдела
            </NavLink>

            {openMenus.department && (
                <ul className="sidebar__submenu-list">
                    <li className="sidebar__submenu-item">
                        <button className="sidebar__button-sort" onClick={() => onSortByDate('department')}>
                            По дате
                        </button>
                    </li>
                    <li className="sidebar__submenu-item">
                        <button className="sidebar__button-sort" onClick={() => onSortByDirection('department')}>
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
                }}
            >
                <img src={require('./img/user-icon.png')} alt="Статистика сотрудников" className="sidebar__item_icon" />
                Статистика сотрудников
            </button>

            {openMenus.employees && (
                <ul className="sidebar__submenu-list">
                    <li className="sidebar__submenu-item">
                        <button className="sidebar__button-sort" onClick={() => onSortByDate('employees')}>
                            По дате
                        </button>
                    </li>
                    <li className="sidebar__submenu-item">
                        <button className="sidebar__button-sort" onClick={() => onSortByDirection('employees')}>
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

export default ManagerAside;
