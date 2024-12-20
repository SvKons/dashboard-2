export interface IRunningLineItem {
    title: string;
    leftCount: string;
    rightCount?: string;
}

// Дублирование массива
export const duplicateRunningLineData = (data: IRunningLineItem[]): IRunningLineItem[] => {
    return [...data, ...data, ...data];
};

export const runningLineData: IRunningLineItem[] = [
    { title: 'Сумма выполнения плана', leftCount: '50 000', rightCount: '100 000' },
    { title: 'Прогноз достижения плана', leftCount: '89 000', rightCount: '100 000' },
    { title: 'Процент выполнения плана', leftCount: '50%' },
];

export interface IEmployeeSales {
    name: string;
    salesAmount: string;
    countTransactions: string;
}

// Дублирование массива для данных сотрудников
export const duplicateEmployeeData = (data: IEmployeeSales[]): IEmployeeSales[] => {
    return [...data, ...data, ...data];
};

export const employeeData: IEmployeeSales[] = [
    { name: 'Иван Иванов', salesAmount: '12000 РУБ.', countTransactions: '18 шт.' },
    { name: 'Ольга Петрова', salesAmount: '15000 РУБ.', countTransactions: '10 шт.' },
    { name: 'Алексей Сидоров', salesAmount: '18000 РУБ.', countTransactions: '25 шт.' },
    { name: 'Мария Смирнова', salesAmount: '13500 РУБ.', countTransactions: '16 шт.' },
    { name: 'Николай Кузнецов', salesAmount: '20000 РУБ.', countTransactions: '8 шт.' },
    { name: 'Сергей Попов', salesAmount: '17500 РУБ.', countTransactions: '36 шт.' },
    { name: 'Дмитрий Орлов', salesAmount: '19000 РУБ.', countTransactions: '30 шт.' },
    { name: 'Анна Зайцева', salesAmount: '14000 РУБ.', countTransactions: '28 шт.' },
    { name: 'Елена Морозова', salesAmount: '16000 РУБ.', countTransactions: '22 шт.' },
    { name: 'Владимир Воронин', salesAmount: '14500 РУБ.', countTransactions: '12 шт.' },
    { name: 'Татьяна Крылова', salesAmount: '15500 РУБ.', countTransactions: '19 шт.' },
    { name: 'Юлия Семенова', salesAmount: '17000 РУБ.', countTransactions: '27 шт.' },
    { name: 'Александр Михайлов', salesAmount: '18500 РУБ.', countTransactions: '31 шт.' },
    { name: 'Екатерина Федорова', salesAmount: '12500 РУБ.', countTransactions: '17 шт.' },
    { name: 'Павел Никитин', salesAmount: '13000 РУБ.', countTransactions: '15 шт.' },
    { name: 'Валентина Рогова', salesAmount: '15500 РУБ.', countTransactions: '5 шт.' },
    { name: 'Кирилл Лебедев', salesAmount: '16500 РУБ.', countTransactions: '21 шт.' },
    { name: 'Игорь Абрамов', salesAmount: '21000 РУБ.', countTransactions: '39 шт.' },
    { name: 'Наталья Васильева', salesAmount: '19500 РУБ.', countTransactions: '23 шт.' },
    { name: 'Елена Егорова', salesAmount: '18000 РУБ.', countTransactions: '19 шт.' },
];

export interface IManagerData {
    name: string;
    salesAmount: string; // Сумма продаж
    countTransactions: string; // Количество сделок
}

// Функция для дублирования данных
export const duplicateEmployeeManagerData = (data: IManagerData[]): IManagerData[] => {
    return [...data, ...data, ...data];
};

// Данные для менеджера
export const managerData: IManagerData[] = [
    { name: 'Январь', salesAmount: '1 000 000 ₽', countTransactions: '200 шт.' },
    { name: 'Февраль', salesAmount: '850 000 ₽', countTransactions: '180 шт.' },
    { name: 'Март', salesAmount: '1 200 000 ₽', countTransactions: '250 шт.' },
    { name: 'Апрель', salesAmount: '950 000 ₽', countTransactions: '210 шт.' },
    { name: 'Май', salesAmount: '1 100 000 ₽', countTransactions: '230 шт.' },
    { name: 'Июнь', salesAmount: '980 000 ₽', countTransactions: '190 шт.' },
    { name: 'Июль', salesAmount: '1 050 000 ₽', countTransactions: '220 шт.' },
    { name: 'Август', salesAmount: '1 000 000 ₽', countTransactions: '200 шт.' },
    { name: 'Сентябрь', salesAmount: '1 300 000 ₽', countTransactions: '270 шт.' },
    { name: 'Октябрь', salesAmount: '1 100 000 ₽', countTransactions: '230 шт.' },
    { name: 'Ноябрь', salesAmount: '900 000 ₽', countTransactions: '210 шт.' },
    { name: 'Декабрь', salesAmount: '1 500 000 ₽', countTransactions: '300 шт.' },
];
