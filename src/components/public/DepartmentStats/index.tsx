import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Tooltip, Legend, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { getDepartmentData } from './utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement, Legend, ChartDataLabels);

interface DepartmentStatsProps {
    viewType: 'date' | 'direction';
    sortOption: string | null;
    filterOption: string;
}

const DepartmentStats = ({ viewType, sortOption, filterOption }: DepartmentStatsProps) => {
    const [dataByDate, setDataByDate] = useState<{ [key: string]: number[] }>({});
    const [dataByDirection, setDataByDirection] = useState<{ direction: string; value: number }[]>([]);

    useEffect(() => {
        const fetchData = () => {
            if (viewType === 'date') {
                setDataByDirection([]); // Очистка данных По направлению, если выбрано По дате
                const filteredDataDepartment = getDepartmentData(viewType, filterOption) as { [key: string]: number[] };
                setDataByDate(filteredDataDepartment);
            } else if (viewType === 'direction') {
                setDataByDate({}); // Очистка данных по дате, если выбрано По направлению
                const filteredDataDepartment = getDepartmentData(viewType, filterOption) as { direction: string; value: number }[];
                setDataByDirection(filteredDataDepartment);
            }
        };

        fetchData();
    }, [viewType, filterOption, sortOption]);

    // Получение данных с API
    /*
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (viewType === 'date') {
                    setDataByDirection([]); // Очистка данных По направлению, если выбрано По дате
                    response = await fetch(`ссылка`);
                } else if (viewType === 'direction') {
                    setDataByDate({}); // Очистка данных по дате, если выбрано По направлению
                    response = await fetch(`ссылка`);
                }

                const data = await response.json();
                if (viewType === 'date') {
                    setDataByDate(data);
                } else if (viewType === 'direction') {
                    setDataByDirection(data);
                }
            } catch (error) {
                console.error('Ошибка при получении данных департаментов:', error);
            }
        };

        fetchData();
    }, [viewType, filterOption, sortOption]);
    */

    // Настройки для столбчатой диаграммы
    const barChartData = {
        labels: Object.keys(dataByDate),
        datasets: [
            {
                label: 'Продажи',
                data: Object.values(dataByDate).flat(),
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
                hoverBackgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(255, 205, 86, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(201, 203, 207, 0.8)'],
            },
        ],
    };

    // Настройки для круговой диаграммы
    const donutChartData = {
        labels: dataByDirection.map(item => item.direction),
        datasets: [
            {
                label: `Направлений: ${dataByDirection.length}`,
                data: dataByDirection.map(item => item.value),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#4BA2C0'],
                hoverOffset: 34,
                hoverBorderColor: '#000',
            },
        ],
    };

    // Данные для столбчатой диаграммы
    const barOptions = {
        responsive: true,
        color: '#fff',
        animation: {
            animateScale: true,
            duration: 2000,
            easing: 'easeOutQuad' as const,
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff', // Цвет меток на оси X
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.5)', // Цвет сетки на оси X
                },
            },
            y: {
                ticks: {
                    color: '#fff', // Цвет меток на оси Y
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.5)', // Цвет сетки на оси X
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

    // Данные для круговой диаграммы
    const donutOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        color: '#fff',
        animation: {
            animateScale: true,
            duration: 2000,
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
            datalabels: {
                formatter: (value: number, context: any) => {
                    const total = context.dataset.data.reduce((acc: number, curr: number) => acc + curr, 0);
                    const percentage = ((value / total) * 100).toFixed(1) + '%';
                    return `${context.chart.data.labels[context.dataIndex]}: ${value} (${percentage})`;
                },
                color: '#000',
                font: {
                    size: 14,
                    weight: 'bold',
                },
                align: 'center',
                anchor: 'center',
            },
        },
    };

    return (
        <div className="diagrams-block">
            <h1 className="diagrams-block__title">Статистика департаментов - {viewType === 'date' ? 'По дате' : 'По направлению'}</h1>
            <div className="chart-container">
                {viewType === 'date' ? <Bar data={barChartData} options={barOptions} className="chart-container__block" /> : <Doughnut data={donutChartData} options={donutOptions} className="chart-container__block chart-container__block_donut" />}
            </div>
        </div>
    );
};
export default DepartmentStats;
