import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Tooltip, Legend, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getEmployeeData, IEmployee } from './utils';
import './EmployeeStats.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, ChartDataLabels);

interface IEmployeeStatsProps {
    viewType: 'total-stats' | 'direction';
    sortOption: string | null;
    filterOption: string;
}

const EmployeeStats = ({ sortOption, filterOption, viewType }: IEmployeeStatsProps) => {
    const [dataByDate, setDataByTotalStats] = useState<IEmployee[]>([]);
    const [dataByDirection, setDataByDirection] = useState<{ employee: string; direction: string; value: number }[]>([]);

    useEffect(() => {
        const fetchData = () => {
            if (viewType === 'total-stats') {
                setDataByDirection([]); // Очищаем данные По направлению, если выбрано Общая статистика
                const filteredDataEmployee = getEmployeeData(viewType, filterOption) as IEmployee[];
                setDataByTotalStats(filteredDataEmployee);
            } else if (viewType === 'direction') {
                setDataByTotalStats([]); // Очищаем данные Общая статистика, если выбрано По направлению
                const filteredDataEmployee = getEmployeeData(viewType, filterOption) as { employee: string; direction: string; value: number }[];
                setDataByDirection(filteredDataEmployee);
            }
        };
        fetchData();
    }, [viewType, filterOption, sortOption]);

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
    // Расчет общего плана выручки
    const totalRevenue = dataByDate.reduce((acc, employee) => acc + employee.revenue, 0);

    // Расчет вклада в факт. сбор для каждого сотрудника
    const employeesWithContribution = dataByDate.map(employee => ({
        ...employee,
        contributionToFact: (employee.revenue / totalRevenue) * 100,
    }));

    return (
        <div className="diagrams-block">
            <h1 className="diagrams-block__title">Статистика сотрудников - {viewType === 'total-stats' ? 'Общая статистика' : 'По направлению'}</h1>
            <div className="chart-container">
                {viewType === 'total-stats' ? (
                    <div className="employee-table">
                        <table className="employee-table__table">
                            <thead className="employee-table__table-head">
                                <tr className="employee-table__table-row">
                                    <th className="employee-table__cell" rowSpan={2}>
                                        №
                                    </th>
                                    <th className="employee-table__cell" rowSpan={2}>
                                        ФИО сотрудника
                                    </th>
                                    <th className="employee-table__cell" rowSpan={2}>
                                        Кол-во
                                    </th>
                                    <th className="employee-table__cell" rowSpan={2}>
                                        Выручка
                                    </th>
                                    <th className="employee-table__cell" rowSpan={2}>
                                        % годовых оплат
                                    </th>
                                    <th className="employee-table__cell" colSpan={2}>
                                        Доп. цели
                                    </th>
                                    <th className="employee-table__cell" rowSpan={2}>
                                        Конверсия лидов
                                    </th>
                                    <th className="employee-table__cell" rowSpan={2}>
                                        Вклад в факт. сбора
                                    </th>
                                </tr>
                                <tr className="employee-table__table-row">
                                    <th className="employee-table__cell">Кол-во</th>
                                    <th className="employee-table__cell">Выручка</th>
                                </tr>
                            </thead>
                            <tbody className="employee-table__table-body">
                                {employeesWithContribution.map((employee, index) => (
                                    <tr className="employee-table__table-row" key={employee.name}>
                                        <td className="employee-table__cell-body">{index + 1}</td>
                                        <td className="employee-table__cell-body">{employee.name}</td>
                                        <td className="employee-table__cell-body">{employee.salesCount}</td>
                                        <td className="employee-table__cell-body">{employee.revenue}</td>
                                        <td className="employee-table__cell-body">{employee.annualPaymentsPercentage}%</td>
                                        <td className="employee-table__cell-body">{employee.additionalGoals.salesCount}</td>
                                        <td className="employee-table__cell-body">{employee.additionalGoals.amount}</td>
                                        <td className="employee-table__cell-body">{employee.leadConversion}%</td>
                                        <td className="employee-table__cell-body">{employee.contributionToFact.toFixed(2)}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <Doughnut data={donutChartData} options={donutOptions} className="chart-container__block chart-container__block_donut" />
                )}
            </div>
        </div>
    );
};

export default EmployeeStats;
