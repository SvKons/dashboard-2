import './TopManagers.scss';
import { managers } from './utils';

const TopManagers = () => {
    const topManagers = managers.sort((a, b) => b?.sales - a?.sales).slice(0, 3);

    return (
        <div className="top-managers">
            <div className="top-managers__wrap">
                <h2 className="top-managers__title">ТОП-3 менеджера</h2>
                <ul className="top-managers__list">
                    {topManagers.map((manager, index) => (
                        <li key={index} className="top-managers__item">
                            <div className="top-managers__img-wrap">
                                <img src={manager.photo} alt={`${manager.firstName} ${manager.lastName}`} className="top-managers__img" />
                            </div>

                            <div className="top-managers__info">
                                <h3 className="top-managers__name">{`${manager.firstName} ${manager.lastName}`}</h3>
                                <p className="top-managers__sales">Продажи: {manager.sales.toLocaleString()} рублей</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopManagers;
