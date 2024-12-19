import { useEffect, useState } from 'react';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Tooltip, Legend, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Course, CourseData, getDepartmentData, mockMetricsData } from './utils';
import MetricsBlock from '../../MetricsBlock';
import Slides from './Slides';
import './DepartmentStats.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement, Legend, ChartDataLabels);

export interface IDepartmentStatsProps {
    viewType: 'total-stats' | 'direction';
    sortOption: string | null;
    filterOption: string;
    customPeriod?: { startDate: Date | null; endDate: Date | null };
    onLastSlide: () => void;
}

interface MetricsType {
    totalPayments: number;
    yearlyPaymentsPercentage: number;
    averageCheck: number;
    conversionRate: number;
}

const DepartmentStats = ({ viewType, sortOption, filterOption, customPeriod, onLastSlide }: IDepartmentStatsProps) => {
    const [dataByTotalStats, setDataByTotalStats] = useState<{ [key: string]: number[] }>({});
    const [dataByDirection, setDataByDirection] = useState<CourseData>([]);
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

                const filteredDataDepartment = getDepartmentData(viewType, filterOption, customPeriod) as CourseData;
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

    // Настройки для столбчатой диаграммы
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

    const renderCourseCard = (course: Course) => {
        return (
            <div key={course.mainTitle} className="courses-cards">
                <h2 className="courses-cards__main-title">{course.mainTitle}</h2>
                {/* Перебор подкатегорий */}
                {course.subcategories &&
                    course.subcategories.map(subcategory => (
                        <div key={subcategory.levelTitle} className="courses-cards__level">
                            <h3 className="courses-cards__level-title">{subcategory.levelTitle}</h3>
                            {/* Перебор направлений */}
                            {subcategory.subcategories &&
                                subcategory.subcategories.map(direction => (
                                    <div key={direction.directionTitle} className="courses-cards__list-speciality">
                                        <span className="courses-cards__direction-title">{direction.directionTitle}</span>
                                        <div className="courses-cards__speciality-wrap">
                                            {/* Перебор специальностей */}
                                            {direction.subcategories &&
                                                direction.subcategories.map(speciality => (
                                                    <div key={speciality.specialityTitle} className="courses-cards__speciality-block">
                                                        <span className="courses-cards__speciality-title">{speciality.specialityTitle}</span>
                                                        <div className="courses-cards__speciality-info">
                                                            <span className="courses-cards__speciality-sales">Продажи: {speciality.sales} руб.</span>
                                                            <span className="courses-cards__speciality-percent">Процент: {speciality.percentage}%</span>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
            </div>
        );
    };

    return (
        <div className="diagrams-block">
            <h3 className="title">Статистика отдела - {viewType === 'total-stats' ? 'Общая статистика' : 'По направлению'}</h3>
            {viewType === 'total-stats' && <MetricsBlock metrics={metrics} />}
            <div className="chart-container">
                {viewType === 'total-stats' ? <Bar style={{ height: '896px' }} data={barChartData} options={barOptions} className="chart-container__block" /> : <Slides slides={dataByDirection.map(renderCourseCard)} onLastSlide={onLastSlide} />}
            </div>
        </div>
    );
};

export default DepartmentStats;
