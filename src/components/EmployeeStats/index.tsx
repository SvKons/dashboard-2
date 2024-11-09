import { useEffect, useState } from 'react';
import './styles.scss';
import { getEmployeeData } from './utils';
import { Doughnut, Bar } from 'react-chartjs-2';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Legend, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend, ChartDataLabels);

interface EmployeeStatsProps {
    viewType: 'date' | 'direction';
    sortOption: string | null;
    filterOption: string;
}

const EmployeeStats = ({ sortOption, filterOption, viewType }: EmployeeStatsProps) => {
    const [dataByDate, setDataByDate] = useState<{ [key: string]: number[] }>({});
    const [dataByDirection, setDataByDirection] = useState<{ direction: string; value: number }[]>([]);

    useEffect(() => {
        const fetchData = () => {
            if (viewType === 'date') {
                setDataByDirection([]); // Очищаем данные По направлению, если выбрано По дате
                const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { [key: string]: number[] };
                setDataByDate(filteredDataEmployee);
            } else if (viewType === 'direction') {
                setDataByDate({}); // Очищаем данные По дате, если выбрано По направлению
                const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { direction: string; value: number }[];
                setDataByDirection(filteredDataEmployee);
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
                    setDataByDirection([]); // Очищаем данные По направлению, если выбрано По дате
                    response = await fetch(`ссылка`);
                } else if (viewType === 'direction') {
                    setDataByDate({}); // Очищаем данные По дате, если выбрано По направлению
                    response = await fetch(`ссылка`);
                }

                const data = await response.json();
                if (viewType === 'date') {
                    setDataByDate(data); // Предполагается, что данные приходят в нужном формате
                } else if (viewType === 'direction') {
                    setDataByDirection(data);
                }
            } catch (error) {
                console.error('Ошибка при получении данных сотрудников:', error);
            }
        };
        fetchData();
    }, [viewType, filterOption, sortOption]);
    */

    const barChartData = {
        labels: Object.keys(dataByDate),
        datasets: [
            {
                label: 'Значение',
                data: Object.values(dataByDate).flat(),
                backgroundColor: '#008FFB',
            },
        ],
    };

    const donutChartData = {
        labels: dataByDirection.map(item => item.direction),
        datasets: [
            {
                label: `Направлений: ${dataByDirection.length}`,
                data: dataByDirection.map(item => item.value),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverOffset: 4,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
        },
    };

    const donutOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
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
        <div className="chart-container">
            <h1>Статистика сотрудников - {viewType === 'date' ? 'По дате' : 'По направлению'}</h1>
            {viewType === 'date' ? <Bar data={barChartData} options={barOptions} /> : <Doughnut data={donutChartData} options={donutOptions} />}
        </div>
    );
};

export default EmployeeStats;
