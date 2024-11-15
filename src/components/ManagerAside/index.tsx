import { NavLink } from 'react-router-dom';

const ManagerAside = () => {
    return (
        <>
            <NavLink to="/lk/my-profile" className="sidebar__item">
                <img src={require('./img/statistics-icon.png')} alt="Управление статистикой" className="sidebar__item_icon" />
                Мой профиль
            </NavLink>
            <NavLink to="/lk/data-entry" className="sidebar__item">
                <img src={require('./img/database-icon.png')} alt="Ввод данных" className="sidebar__item_icon" />
                Ввод данных
            </NavLink>
            <NavLink to="/lk/my-statistics" className="sidebar__item">
                <img src={require('./img/statistics-icon.png')} alt="Отчеты" className="sidebar__item_icon" />
                Моя статистика
            </NavLink>
            <NavLink to="/lk/offer-ideas" className="sidebar__item">
                <img src={require('./img/ideas-icon.png')} alt="Идеи" className="sidebar__item_icon" />
                Предложить идею
            </NavLink>
        </>
    );
};

export default ManagerAside;
