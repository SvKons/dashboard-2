import { NavLink } from 'react-router-dom';
import { INavItem } from '../../../types/types';

const navItems: INavItem[] = [
    { path: '/lk/my-profile', icon: require('./img/statistics-icon.png'), alt: 'Мой профиль', label: 'Мой профиль' },
    { path: '/lk/data-entry', icon: require('./img/database-icon.png'), alt: 'Ввод данных', label: 'Ввод данных' },
    { path: '/lk/my-statistics', icon: require('./img/statistics-icon.png'), alt: 'Отчеты', label: 'Моя статистика' },
    { path: '/lk/offer-ideas', icon: require('./img/ideas-icon.png'), alt: 'Идеи', label: 'Предложить идею' },
];

const MmanagerAside = () => (
    <>
        {navItems.map(item => (
            <NavLink to={item.path} key={item.path} className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}>
                <img src={item.icon} alt={item.alt} className="sidebar__item_icon" />
                {item.label}
            </NavLink>
        ))}
    </>
);

export default MmanagerAside;
