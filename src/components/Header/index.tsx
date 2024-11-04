import './Header.scss';

interface HeaderProps {
    sortOption: string | null;
}

// interface HeaderProps {
//     setActiveComponent: (component: string) => void;
//     setActiveFilter: (filter: string) => void;
// }

const Header = ({ sortOption }: HeaderProps) => {
    return (
        <div className="header">
            <header className="header__container">
                <div className="header__logo-wrap">
                    <img className="header__logo" src={require('./img/logo.png')} alt="Логотип" />
                </div>
                <div className="header__filter-options">
                    <div className="header__filter-list">
                        <button className="header__filter-item">Прошлый месяц</button>
                        <button className="header__filter-item">Текущий месяц</button>
                        <button className="header__filter-item">Следующий месяц</button>
                        <button className="header__filter-item">Выбрать период</button>
                    </div>
                </div>
                <div className="header__buttons">
                    <button className="header__button header__button_settings">
                        <img src={require('./img/settings.png')} alt="Настройки" className="header__icon" />
                    </button>
                    <button className="header__button header__button_login">
                        <svg className="header__icon" width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.583 33.917h7.709a3.083 3.083 0 0 0 3.083-3.084V6.167a3.083 3.083 0 0 0-3.083-3.084h-7.709" stroke="#000" />
                            <path d="m16.958 24.667 6.167-6.167-6.167-6.167M23.125 18.5h-18.5" stroke="#000" />
                        </svg>
                    </button>
                </div>
                {sortOption && <div className="header__sort-info">Сортировка: {sortOption}</div>}
            </header>
        </div>
    );
};

export default Header;
