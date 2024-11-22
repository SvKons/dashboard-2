import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDepartmentData } from '../DepartmentStats/utils';
import StatCard from '../StatCard';
import './TotalStatsBlock.scss';

interface TotalStatsBlockProps {
    filterOption: string; // Фильтр
}

const TotalStatsBlock = ({ filterOption }: TotalStatsBlockProps) => {
    const [totalSales, setTotalSales] = useState<number>(0);
    const [newClients, setNewClients] = useState<number>(0);
    const [averageCheck, setAverageCheck] = useState<number>(0);
    const [forecast, setForecast] = useState<number>(0);

    const location = useLocation(); // Получаем текущий URL, для проверки, чтоб не отображать статистику продаж за другие месяцы

    useEffect(() => {
        const currentFilter = location.pathname === '/' ? 'currentMonth' : filterOption;

        const fetchSalesData = () => {
            const data = getDepartmentData('total-stats', currentFilter) as { [key: string]: number[] };
            const sales = Object.values(data)
                .flat()
                .reduce((acc, curr) => acc + curr, 0);
            setTotalSales(sales);
        };

        const fetchNewClients = () => {
            setNewClients(10);
        };

        const fetchAverageCheck = () => {
            setAverageCheck(1500);
        };

        const fetchForecast = () => {
            setForecast(75);
        };

        fetchSalesData();
        fetchNewClients();
        fetchAverageCheck();
        fetchForecast();
    }, [filterOption, location.pathname]);

    return (
        <div className="stats-block">
            <div className="stats-block__content">
                <h2 className="stats-block__title">Общая статистика</h2>
                <div className="stats-block__wrap">
                    <StatCard title="Сумма продаж за текущий месяц" value={`${totalSales} руб.`} imgUrl={require('./img/res-react-dash-bear.svg').default} />
                    <StatCard title="Количество новых клиентов" value={`${newClients} новых счастливых студентов`} />
                    <StatCard title="Средний чек" value={`${averageCheck} руб.`} />
                    <StatCard title="Прогноз выполнения плана" value={`${forecast}%`} imgUrl={require('./img/res-react-dash-bull.svg').default} showCircle />
                </div>
            </div>
        </div>
    );
};
export default TotalStatsBlock;
