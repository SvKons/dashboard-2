import { useState, useEffect } from 'react';
import './StatCard.scss';

interface StatCardProps {
    title?: string;
    value?: number | string;
    imgUrl?: string;
    showCircle?: boolean; // Новый пропс для отображения круга
}

const StatCard = ({ title, value, imgUrl, showCircle }: StatCardProps) => {
    const [count, setCount] = useState(0);
    const isImg = Boolean(imgUrl);

    useEffect(() => {
        const targetCount = 75;
        const duration = 3800; // Длительность анимации в миллисекундах
        const interval = duration / targetCount;

        const intervalId = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < targetCount) {
                    return prevCount + 1;
                } else {
                    clearInterval(intervalId);
                    return prevCount;
                }
            });
        }, interval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="stat-card">
            <h3 className="stat-card__title">{title}</h3>
            {showCircle ? (
                <div className="stat-card__percent">
                    <div className="stat-card__circle">
                        <div className="stat-card__pie">
                            <svg>
                                <circle cx="60" cy="60" r="50"></circle>
                            </svg>
                        </div>
                        <div className="stat-card__counter">{count}%</div>
                    </div>
                </div>
            ) : (
                <div className="stat-card__content">
                    <p className="stat-card__value">{value}</p>
                    {isImg && <img className="stat-card__img" src={imgUrl} alt={title} />}
                </div>
            )}
        </div>
    );
};

export default StatCard;
