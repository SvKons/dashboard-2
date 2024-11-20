export interface IManagerData {
    name: string;
    salesAmount: string; // Сумма продаж
    countTransactions: string; // Количество сделок
}

// Функция для дублирования данных
export const duplicateEmployeeManagerData = (data: IManagerData[]): IManagerData[] => {
    return [...data, ...data];
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
