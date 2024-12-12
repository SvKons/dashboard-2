import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Tooltip, Legend, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { getDepartmentData, mockMetricsData } from './utils';
import MetricsBlock from '../../MetricsBlock';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement, Legend, ChartDataLabels);

export interface IDepartmentStatsProps {
    viewType: 'total-stats' | 'direction';
    sortOption: string | null;
    filterOption: string;
    customPeriod?: { startDate: Date | null; endDate: Date | null };
}

interface MetricsType {
    totalPayments: number;
    yearlyPaymentsPercentage: number;
    averageCheck: number;
    conversionRate: number;
}

const DepartmentStats = ({ viewType, sortOption, filterOption, customPeriod }: IDepartmentStatsProps) => {
    const [dataByTotalStats, setDataByTotalStats] = useState<{ [key: string]: number[] }>({});
    const [dataByDirection, setDataByDirection] = useState<{ direction: string; value: number }[]>([]);
    const [metrics, setMetrics] = useState<MetricsType>({
        totalPayments: 0,
        yearlyPaymentsPercentage: 0,
        averageCheck: 0,
        conversionRate: 0,
    });

    useEffect(() => {
        const fetchData = () => {
            if (viewType === 'total-stats') {
                setDataByDirection([]); // Очистка данных По направлению, если выбрано Общая статистика
                const filteredDataDepartment = getDepartmentData(viewType, filterOption, customPeriod) as { [key: string]: number[] };
                setDataByTotalStats(filteredDataDepartment);
                if (filterOption in mockMetricsData) {
                    const calculatedMetrics = calculateMetrics(filterOption as keyof typeof mockMetricsData);
                    setMetrics(calculatedMetrics);
                }
            } else if (viewType === 'direction') {
                setDataByTotalStats({}); // Очистка данных Общая статистика, если выбрано По направлению

                const filteredDataDepartment = getDepartmentData(viewType, filterOption, customPeriod) as { direction: string; value: number }[];

                setDataByDirection(filteredDataDepartment);
            }
        };

        fetchData();
    }, [viewType, filterOption, sortOption, customPeriod]);

    const calculateMetrics = (filterOption: keyof typeof mockMetricsData) => {
        const { totalPayments, yearlyPayments, totalTransactions, leads } = mockMetricsData[filterOption];
        const averageCheck = totalPayments / totalTransactions;
        const yearlyPaymentsPercentage = (yearlyPayments / totalTransactions) * 100;
        const conversionRate = (totalTransactions / leads) * 100;

        return {
            totalPayments,
            yearlyPaymentsPercentage,
            averageCheck,
            conversionRate,
        };
    };

    // Настройки для столбчатой диаграммы
    const barChartData = {
        labels: Object.keys(dataByTotalStats),
        datasets: [
            {
                label: 'Продажи',
                data: Object.values(dataByTotalStats).flat(),
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
            <h3 className="title">Статистика отдела - {viewType === 'total-stats' ? 'Общая статистика' : 'По направлению'}</h3>
            {viewType === 'total-stats' && <MetricsBlock metrics={metrics} />}
            <div className="chart-container">
                {viewType === 'total-stats' ? (
                    <Bar style={{ height: '896px' }} data={barChartData} options={barOptions} className="chart-container__block" />
                ) : (
                    <Doughnut data={donutChartData} options={donutOptions} className="chart-container__block chart-container__block_donut" />
                )}
            </div>
        </div>
    );
};

export default DepartmentStats;
