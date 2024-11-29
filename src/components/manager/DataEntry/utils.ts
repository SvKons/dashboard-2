export interface IDataForm {
    payment: string;
    annualPayment: boolean;
    capital: boolean;
    data: string;
    url: string;
    direction: string;
}

export const dataList: IDataForm[] = [
    {
        payment: '100 000',
        annualPayment: false,
        capital: false,
        data: '01.12.2024',
        url: 'https://www.mti.edu.ru',
        direction: 'Направление 1',
    },
];

export interface ITableHeader {
    id: string;
    label: string;
}

export const tableHeaders: ITableHeader[] = [
    { id: 'number', label: '№' },
    { id: 'payment', label: 'Выручка' },
    { id: 'direction', label: 'Направление' },
    { id: 'annualPayment', label: 'Годовая оплата' },
    { id: 'capital', label: 'Мой капитал' },
    { id: 'data', label: 'Дата' },
    { id: 'crmLink', label: 'CRM (ссылка)' },
];
