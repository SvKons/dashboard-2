import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Tooltip, Legend, LinearScale, LineElement, PointElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { dailySalesData, recommendedSalesData } from './utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, ArcElement, Legend, ChartDataLabels);

interface IChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor?: string[];
        hoverBackgroundColor?: string[];
        borderColor?: string;
        type: 'bar' | 'line';
        tension?: number; // Для сглаживания линии
    }[];
}

const getMonthInPrepositionalCase = (month: string): string => {
    const monthMap: { [key: string]: string } = {
        январь: 'январе',
        февраль: 'феврале',
        март: 'марте',
        апрель: 'апреле',
        май: 'мае',
        июнь: 'июне',
        июль: 'июле',
        август: 'августе',
        сентябрь: 'сентябре',
        октябрь: 'октябре',
        ноябрь: 'ноябре',
        декабрь: 'декабре',
    };
    return monthMap[month.toLowerCase()] || month;
};

const DailySales = () => {
    useEffect(() => {
        const labels = Object.keys(dailySalesData);
        const data = Object.values(dailySalesData).map(value => parseFloat(value));
        const backgroundColors = data.map(() => 'rgb(255, 99, 132)');
        const hoverBackgroundColors = data.map(() => 'rgba(255, 99, 132, 0.8)');

        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        const monthInPrepositionalCase = getMonthInPrepositionalCase(currentMonth);
        const label = `Продажи в ${monthInPrepositionalCase}`;

        // Получение данных для рекомендуемых продаж
        const recommendedData = Object.values(recommendedSalesData).map(value => parseFloat(value));

        setChartData({
            labels,
            datasets: [
                {
                    label,
                    data,
                    backgroundColor: backgroundColors,
                    hoverBackgroundColor: hoverBackgroundColors,
                    type: 'bar',
                },
                {
                    label: 'Рекомендуемые продажи',
                    data: recommendedData,
                    borderColor: 'rgb(54, 162, 235)',
                    type: 'line',
                    tension: 0.4, // Сглаживание линии
                },
            ],
        });
    }, []);

    const [chartData, setChartData] = useState<IChartData>({
        labels: [],
        datasets: [
            {
                label: 'Продажи',
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
                type: 'bar',
            },
            {
                label: 'Рекомендуемые продажи',
                data: [],
                borderColor: 'rgb(54, 162, 235)',
                type: 'line',
            },
        ],
    });

    const barOptions = {
        responsive: true,
        color: '#fff',
        animation: {
            duration: 2000,
            easing: 'easeOutQuad' as const,
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
            y: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.5)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            tooltip: {
                enabled: true,
            },
            datalabels: {
                color: '#fff',
            },
        },
    };

    return (
        <div className="daily-sales-chart">
            <Chart type="bar" data={chartData} options={barOptions} />
        </div>
    );
};

export default DailySales;
