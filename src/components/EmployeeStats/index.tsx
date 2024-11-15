import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Tooltip, Legend, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { getEmployeeData } from './utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, ChartDataLabels);

interface EmployeeStatsProps {
    viewType: 'date' | 'direction';
    sortOption: string | null;
    filterOption: string;
}

const EmployeeStats = ({ sortOption, filterOption, viewType }: EmployeeStatsProps) => {
    const [dataByDate, setDataByDate] = useState<{ [key: string]: { [employee: string]: number } }>({});
    const [dataByDirection, setDataByDirection] = useState<{ employee: string; direction: string; value: number }[]>([]);

    useEffect(() => {
        const fetchData = () => {
            if (viewType === 'date') {
                setDataByDirection([]); // Очищаем данные По направлению, если выбрано По дате
                const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { [key: string]: { [employee: string]: number } };
                setDataByDate(filteredDataEmployee);
            } else if (viewType === 'direction') {
                setDataByDate({}); // Очищаем данные По дате, если выбрано По направлению
                const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { employee: string; direction: string; value: number }[];
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

    // Настройки для столбчатой диаграммы
    const barChartData = {
        labels: Object.keys(dataByDate),
        datasets:
            Object.keys(dataByDate).length > 0
                ? Object.keys(dataByDate[Object.keys(dataByDate)[0]]).map((employee, index) => ({
                      label: employee,
                      data: Object.keys(dataByDate).map(date => dataByDate[date][employee]),
                      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`,
                      hoverBackgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`,
                  }))
                : [],
    };

    // Настройки для круговой диаграммы
    const donutChartData = {
        labels: dataByDirection.map(item => `${item.employee} (${item.direction})`),
        datasets: [
            {
                label: `Направлений: ${dataByDirection.length}`,
                data: dataByDirection.map(item => item.value),
                backgroundColor: dataByDirection.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`),
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
                color: '#fff',
                font: {
                    size: 12,
                    weight: 'bold',
                },
                align: 'center',
                anchor: 'center',
            },
        },
    };

    return (
        <div className="diagrams-block">
            <h1 className="diagrams-block__title">Статистика сотрудников - {viewType === 'date' ? 'По дате' : 'По направлению'}</h1>
            <div className="chart-container">
                {viewType === 'date' ? <Bar data={barChartData} options={barOptions} className="chart-container__block" /> : <Doughnut data={donutChartData} options={donutOptions} className="chart-container__block chart-container__block_donut" />}
            </div>
        </div>
    );
};

export default EmployeeStats;
