import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    onSortByDate: () => void;
    onSortByDirection: () => void;
}

type MenuKey = 'department' | 'employees';

const Sidebar: React.FC<SidebarProps> = ({ onSortByDate, onSortByDirection }) => {
    const [openMenus, setOpenMenus] = useState<Record<MenuKey, boolean>>({
        department: false,
        employees: false,
    });

    const handleMenuClick = (menu: MenuKey) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <aside className="sidebar">
            <nav className="sidebar__menu">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink
                    to="/statistika"
                    onClick={() => {
                        handleMenuClick('department');
                    }}
                >
                    Статистика отдела
                </NavLink>
                <div className="sidebar__submenu">
                    {openMenus.department && (
                        <ul className="sidebar__submenu">
                            <li className="sidebar__submenu-item">
                                <button className="sidebar__button">По дате</button>
                            </li>
                            <li className="sidebar__submenu-item">
                                <button className="sidebar__button">По направлению</button>
                            </li>
                        </ul>
                    )}
                </div>
                <NavLink
                    to="/uchastniki"
                    onClick={() => {
                        handleMenuClick('employees');
                    }}
                >
                    Статистика сотрудников
                </NavLink>
                <div className="sidebar__submenu">
                    {openMenus.employees && (
                        <ul className="sidebar__submenu">
                            <li className="sidebar__submenu-item">
                                <button className="sidebar__button">По дате</button>
                            </li>
                            <li className="sidebar__submenu-item">
                                <button className="sidebar__button">По направлению</button>
                            </li>
                        </ul>
                    )}
                </div>
                <NavLink to="/tseli">Цели отдела</NavLink>
                <NavLink to="/dostizheniya">Достижения</NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
