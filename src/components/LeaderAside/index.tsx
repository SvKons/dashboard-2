import { NavLink } from 'react-router-dom';

const LeaderMenu = () => (
    <>
        <NavLink to="/lk/statistics-management" className="sidebar__item">
            <img src={require('./img/statistics-icon.png')} alt="Управление статистикой" className="sidebar__item_icon" />
            Управление статистикой
        </NavLink>
        <NavLink to="/lk/data-entry" className="sidebar__item">
            <img src={require('./img/database-icon.png')} alt="Ввод данных" className="sidebar__item_icon" />
            Ввод данных
        </NavLink>
        <NavLink to="/lk/reports" className="sidebar__item">
            <img src={require('./img/reports-icon.png')} alt="Отчеты" className="sidebar__item_icon" />
            Отчеты
        </NavLink>
        <NavLink to="/lk/profiles" className="sidebar__item">
            <img src={require('./img/profiles-icon.png')} alt="Профили" className="sidebar__item_icon" />
            Профили
        </NavLink>
        <NavLink to="/lk/ideas" className="sidebar__item">
            <img src={require('./img/ideas-icon.png')} alt="Идеи" className="sidebar__item_icon" />
            Идеи
        </NavLink>
        <NavLink to="/lk/goal-management" className="sidebar__item">
            <img src={require('./img/goal-management-icon.png')} alt="Управление целями" className="sidebar__item_icon" />
            Управление целями
        </NavLink>
        <NavLink to="/lk/employee-management" className="sidebar__item">
            <img src={require('./img/employee-management-icon.png')} alt="Управление участниками" className="sidebar__item_icon" />
            Управление участниками
        </NavLink>
        <NavLink to="/lk/achievement-management" className="sidebar__item">
            <img src={require('./img/achievement-management-icon.png')} alt="Управление достижениями" className="sidebar__item_icon" />
            Управление достижениями
        </NavLink>
    </>
);

export default LeaderMenu;
