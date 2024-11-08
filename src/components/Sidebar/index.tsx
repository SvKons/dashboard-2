// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { UserRole } from '../../types/UserRole';
// import LeaderAside from '../LeaderAside';
// import ManagerAside from '../ManagerAside';
// import './Sidebar.scss';

// interface SidebarProps {
//     userRole: UserRole;
//     onSortByDate: (viewType: string) => void;
//     onSortByDirection: (viewType: string) => void;
// }

// type MenuKey = 'department' | 'employees';

// const Sidebar = ({ userRole, onSortByDate, onSortByDirection }: SidebarProps) => {
//     const [openMenus, setOpenMenus] = useState<Record<MenuKey, boolean>>({
//         department: false,
//         employees: false,
//     });

//     const handleMenuClick = (menu: MenuKey) => {
//         setOpenMenus(prevState => ({
//             ...prevState,
//             [menu]: !prevState[menu],
//         }));
//     };

//     return (
//         <aside className="sidebar">
//             <div className="sidebar__menu">
//                 <NavLink to="/" className="sidebar__item">
//                     <img src={require('./img/dashboard-icon.png')} alt="Dashboard" className="sidebar__item_icon" />
//                     Dashboard
//                 </NavLink>

//                 {userRole === UserRole.Manager ? <ManagerAside openMenus={openMenus} handleMenuClick={handleMenuClick} onSortByDate={onSortByDate} onSortByDirection={onSortByDirection} /> : <LeaderAside />}
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserRole } from '../../types/UserRole';
import LeaderAside from '../LeaderAside';
import ManagerAside from '../ManagerAside';
import './Sidebar.scss';

interface SidebarProps {
    userRole: UserRole;
    onSortByDate: (viewType: string) => void;
    onSortByDirection: (viewType: string) => void;
}

type MenuKey = 'department' | 'employees';

const Sidebar = ({ userRole, onSortByDate, onSortByDirection }: SidebarProps) => {
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

                {userRole === UserRole.Manager ? <ManagerAside openMenus={openMenus} handleMenuClick={handleMenuClick} onSortByDate={onSortByDate} onSortByDirection={onSortByDirection} /> : <LeaderAside />}
            </div>
        </aside>
    );
};

export default Sidebar;
