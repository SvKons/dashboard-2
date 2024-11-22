import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserRole } from '../../types/types';
import LeaderAside from '../leader/LeaderAside';
import PublicAside from '../public/PublicAside';
import './Sidebar.scss';
import DateTime from '../DateTime';
import ManagerAside from '../manager/ManagerAside';

interface SidebarProps {
    userRole: UserRole;
    onSortByTotalStats: (viewType: string) => void;
    onSortByDirection: (viewType: string) => void;
}

type MenuKey = 'department' | 'employees';

const Sidebar = ({ userRole, onSortByTotalStats, onSortByDirection }: SidebarProps) => {
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
                <NavLink to="/" className="sidebar__item">
                    <img src={require('./img/dashboard-icon.png')} alt="Dashboard" className="sidebar__item_icon" />
                    Dashboard
                </NavLink>

                {userRole === UserRole.Public && <PublicAside openMenus={openMenus} handleMenuClick={handleMenuClick} onSortByTotalStats={onSortByTotalStats} onSortByDirection={onSortByDirection} sortOption={null} />}
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
