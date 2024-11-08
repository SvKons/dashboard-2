// import { ApexOptions } from 'apexcharts';
// import { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts';
// import { getEmployeeData } from './utils';

// interface EmployeeStatsProps {
//     viewType: 'date' | 'direction';
//     sortOption: string | null;
//     filterOption: string;
// }

// const EmployeeStats = ({ sortOption, filterOption, viewType }: EmployeeStatsProps) => {
//     const [dataByDate, setDataByDate] = useState<{ [key: string]: number[] }>({});
//     const [dataByDirection, setDataByDirection] = useState<{ direction: string; value: number }[]>([]);

//     useEffect(() => {
//         const fetchData = () => {
//             if (viewType === 'date') {
//                 setDataByDirection([]); // Очищаем данные По направлению, если выбрано По дате
//                 const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { [key: string]: number[] };
//                 setDataByDate(filteredDataEmployee);
//             } else if (viewType === 'direction') {
//                 setDataByDate({}); // Очищаем данные По дате, если выбрано По направлению
//                 const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { direction: string; value: number }[];
//                 setDataByDirection(filteredDataEmployee);
//             }
//         };
//         fetchData();
//     }, [viewType, filterOption, sortOption]);

//     // Получение данных с API
//     /*
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let response;
//                 if (viewType === 'date') {
//                     setDataByDirection([]); // Очищаем данные По направлению, если выбрано По дате
//                     response = await fetch(`ссылка`);
//                 } else if (viewType === 'direction') {
//                     setDataByDate({}); // Очищаем данные По дате, если выбрано По направлению
//                     response = await fetch(`ссылка`);
//                 }

//                 const data = await response.json();
//                 if (viewType === 'date') {
//                     setDataByDate(data); // Предполагается, что данные приходят в нужном формате
//                 } else if (viewType === 'direction') {
//                     setDataByDirection(data);
//                 }
//             } catch (error) {
//                 console.error('Ошибка при получении данных сотрудников:', error);
//             }
//         };
//         fetchData();
//     }, [viewType, filterOption, sortOption]);
//     */

//     // Настройки для столбчатой диаграммы
//     const barChartOptions: ApexOptions = {
//         chart: {
//             type: 'bar',
//             toolbar: {
//                 show: true,
//             },
//         },
//         xaxis: {
//             categories: Object.keys(dataByDate),
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: '15%',
//             },
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         colors: ['#008FFB', '#00E396'],
//     };

//     // Настройки для круговой диаграммы
//     const donutChartOptions: ApexOptions = {
//         chart: {
//             type: 'donut',
//             toolbar: {
//                 show: true,
//             },
//         },
//         labels: dataByDirection.map(item => item.direction),
//         dataLabels: {
//             enabled: true,
//             formatter: (val: number) => val.toFixed(1), // Ограничиваем до одной цифры после точки
//         },
//         colors: ['#008FFB', '#00E396', '#FF4560', '#775DD0'],
//     };

//     // Данные для столбчатой диаграммы
//     const barChartSeries = [{ name: 'Значение', data: Object.values(dataByDate).flat() }];

//     // Данные для круговой диаграммы
//     const donutChartSeries = dataByDirection.map(item => item.value);

//     return (
//         <div>
//             <h1>Статистика сотрудников - {viewType === 'date' ? 'По дате' : 'По направлению'}</h1>
//             {viewType === 'date' ? <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} /> : <Chart options={donutChartOptions} series={donutChartSeries} type="donut" height={350} />}
//         </div>
//     );
// };
// export default EmployeeStats;

// import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts';
// import { Bar, Doughnut } from 'react-chartjs-2';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Doughnut } from 'react-chartjs-2';
import './styles.scss';
import { getEmployeeData } from './utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, ChartDataLabels);

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
                label: `Направлений: ${dataByDirection.length}`, // Лейбл с количеством направлений
                data: dataByDirection.map(item => item.value),
                backgroundColor: ['#008FFB', '#00E396', '#FF4560', '#775DD0', '#FEB019'],
                hoverOffset: 4,
            },
        ],
    };

    const donutOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top', // Это значение уже корректное
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
            {viewType === 'date' ? <Bar data={barChartData} options={{ responsive: true }} /> : <Doughnut data={donutChartData} options={donutOptions} />}
        </div>
    );
};

export default EmployeeStats;
