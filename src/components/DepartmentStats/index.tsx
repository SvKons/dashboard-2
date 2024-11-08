import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { getDepartmentData } from './utils'; // Импортируем функцию из utils.ts

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
    const barChartOptions: ApexOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: true },
        },
        xaxis: {
            categories: Object.keys(dataByDate),
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '15%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#4CAF50'],
    };

    // Настройки для круговой диаграммы
    const donutChartOptions: ApexOptions = {
        chart: {
            type: 'donut',
            toolbar: { show: true },
        },
        labels: dataByDirection.map(item => item.direction),
        dataLabels: {
            enabled: true,
            formatter: (val: number) => val.toFixed(1), // Ограничиваем до одной цифры после точки
        },
        colors: ['#4CAF50', '#FF4560', '#00E396', '#775DD0'],
    };

    // Данные для столбчатой диаграммы
    const barChartSeries = [
        {
            name: 'Значение',
            data: Object.values(dataByDate).flat(),
        },
    ];

    // Данные для круговой диаграммы
    const donutChartSeries = dataByDirection.map(item => item.value);

    return (
        <div>
            <h1>Статистика департаментов - {viewType === 'date' ? 'По дате' : 'По направлению'}</h1>
            {viewType === 'date' ? <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} /> : <Chart options={donutChartOptions} series={donutChartSeries} type="donut" height={350} />}
        </div>
    );
};
export default DepartmentStats;
