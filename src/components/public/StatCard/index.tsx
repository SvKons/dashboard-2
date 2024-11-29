import './StatCard.scss';

interface IStatCardProps {
    title?: string;
    value?: number | string;
    imgUrl?: string;
}

const StatCard = ({ title, value, imgUrl }: IStatCardProps) => {
    return (
        <div className="stat-card">
            <h3 className="stat-card__title">{title}</h3>
            <div className="stat-card__content">
                <p className="stat-card__value">{value}</p>
                {imgUrl && <img className="stat-card__img" src={imgUrl} alt={title} />}
            </div>
        </div>
    );
};
export default StatCard;
