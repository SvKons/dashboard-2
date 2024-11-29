import { NavLink } from 'react-router-dom';
import { INavItem } from '../../../types/types';

const navItems: INavItem[] = [
    { path: '/lk/statistics-management', icon: require('./img/statistics-icon.png'), alt: 'Управление статистикой', label: 'Управление статистикой' },
    { path: '/lk/goal-leader', icon: require('./img/goal-management-icon.png'), alt: 'Управление целями', label: 'Управление целями' },
    { path: '/lk/employee-management', icon: require('./img/employee-management-icon.png'), alt: 'Управление сотрудниками', label: 'Управление сотрудниками' },
    { path: '/lk/achievement-management', icon: require('./img/achievement-management-icon.png'), alt: 'Управление достижениями', label: 'Управление достижениями' },
    { path: '/lk/reports', icon: require('./img/reports-icon.png'), alt: 'Отчеты', label: 'Отчеты' },
    { path: '/lk/leader-profiles', icon: require('./img/profiles-icon.png'), alt: 'Профили', label: 'Мой профиль' },
    { path: '/lk/ideas', icon: require('./img/ideas-icon.png'), alt: 'Идеи', label: 'Посмотреть идеи' },
];

const LeaderMenu = () => (
    <>
        {navItems.map(item => (
            <NavLink to={item.path} key={item.path} className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}>
                <img src={item.icon} alt={item.alt} className="sidebar__item_icon" />
                {item.label}
            </NavLink>
        ))}
    </>
);

export default LeaderMenu;
