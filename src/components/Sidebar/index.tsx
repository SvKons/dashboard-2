import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserRole } from '../../types/types';
import LeaderAside from '../leader/LeaderAside';
import PublicAside from '../public/PublicAside';
import './Sidebar.scss';
import DateTime from '../DateTime';
import ManagerAside from '../manager/ManagerAside';

interface ISidebarProps {
    userRole: UserRole;
    onSortByTotalStats: (viewType: string) => void;
    onSortByDirection: (viewType: string) => void;
    isAutoSwitching: boolean;
    setIsAutoSwitching: (value: boolean) => void;
}

type MenuKey = 'department' | 'employees';

const Sidebar = ({ userRole, onSortByTotalStats, onSortByDirection, isAutoSwitching, setIsAutoSwitching }: ISidebarProps) => {
    const [openMenus, setOpenMenus] = useState<{ department: boolean; employees: boolean }>({
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
            <div className="sidebar__menu">
                <NavLink to="/" className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}>
                    <img src={require('./img/dashboard-icon.png')} alt="Dashboard" className="sidebar__item_icon" />
                    Dashboard
                </NavLink>

                {userRole === UserRole.Public && (
                    <PublicAside
                        openMenus={openMenus}
                        handleMenuClick={handleMenuClick}
                        onSortByTotalStats={onSortByTotalStats}
                        onSortByDirection={onSortByDirection}
                        sortOption={null}
                        isAutoSwitching={isAutoSwitching}
                        setIsAutoSwitching={setIsAutoSwitching}
                    />
                )}
                {userRole === UserRole.Manager && <ManagerAside />}
                {userRole === UserRole.Leader && <LeaderAside />}
            </div>
            <div className="date-time">
                <DateTime />
            </div>
        </aside>
    );
};

export default Sidebar;
