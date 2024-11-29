import PercentStatsBlock from '../../PercentStatsBlock';
import './PercentStatsManager.scss';

interface IStatData {
    title: string;
    percentage: number;
}

const calculateStatistics = (data: IStatData[]): IStatData[] => {
    return data;
};

const exampleData: IStatData[] = [
    { title: 'Выполнение личного плана', percentage: 75 },
    { title: 'Конверсия лидов', percentage: 60 },
    { title: 'Вклад в общий факт', percentage: 85 },
];

const PercentStatsManager = () => {
    const statistics = calculateStatistics(exampleData);

    return (
        <div className="stats-cards">
            {statistics.map((stat, index) => (
                <PercentStatsBlock key={index} title={stat.title} percentage={stat.percentage} />
            ))}
        </div>
    );
};

export default PercentStatsManager;
