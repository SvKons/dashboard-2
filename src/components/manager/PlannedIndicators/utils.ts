export interface IDataRow {
    category: string;
    values: Array<{
        plan: string | number | null;
        fact: string | number | null;
        percent: string | number | null;
    }>;
    total?: Array<string | number | null>;
}

export interface IEmployeeData {
    employeeName: string;
    rows: IDataRow[];
}

export const tableData: IEmployeeData[] = [
    {
        employeeName: 'Иванова Мария Ивановна',
        rows: [
            {
                category: 'Сумма',
                values: [
                    { plan: '12 165 000', fact: '12 186 947', percent: '0%' },
                    { plan: '13 320 000', fact: '20 646 239', percent: '55%' },
                    { plan: '14 290 000', fact: '20 312 880', percent: '42%' },
                    { plan: '17 265 000', fact: '28 260 435', percent: '64%' },
                ],
                total: ['57 040 000', '81 406 501', '24 366 501', '43%'],
            },
            {
                category: 'Кол-во оплат',
                values: [
                    { plan: '221', fact: '216', percent: '-2%' },
                    { plan: '242', fact: '350', percent: '45%' },
                    { plan: '260', fact: '349', percent: '34%' },
                    { plan: '314', fact: '512', percent: '63%' },
                ],
                total: ['1 037', '1 427', '390', '4%'],
            },
            {
                category: 'Средний чек',
                values: [
                    { plan: '55 000', fact: '56 421', percent: '3%' },
                    { plan: '55 000', fact: '58 989', percent: '7%' },
                    { plan: '55 000', fact: '58 203', percent: '6%' },
                    { plan: '55 000', fact: '55 196', percent: '0%' },
                ],
                total: ['55 000', '57 047', '2 047', '4%'],
            },
            {
                category: 'Краткосрочные курсы',
                values: [
                    { plan: '0', fact: '0', percent: null },
                    { plan: '0', fact: '0', percent: null },
                    { plan: '0', fact: '0', percent: null },
                    { plan: '0', fact: '0', percent: null },
                ],
                total: ['0', '0', null, null],
            },
            {
                category: '% годовых оплат',
                values: [
                    { plan: null, fact: null, percent: null },
                    { plan: null, fact: null, percent: null },
                    { plan: null, fact: null, percent: null },
                    { plan: null, fact: null, percent: null },
                ],
                total: [null, null, '-6%', '-6%'],
            },
        ],
    },
];

export interface ITableHeadData {
    mainHeaders: IMainHeader[];
    subHeaders: string[];
}

export interface IMainHeader {
    text: string;
    rowSpan?: number;
    colSpan?: number;
}

export const tableHeadData: ITableHeadData = {
    mainHeaders: [
        { text: 'ФИО Сотрудника', rowSpan: 2 },
        { text: 'Показатель', rowSpan: 2 },
        { text: '01.07.- 11.07.', colSpan: 3 },
        { text: '12.07. - 18.07.', colSpan: 3 },
        { text: '19.07. - 25.07.', colSpan: 3 },
        { text: '26.07. - 30.07.', colSpan: 3 },
        { text: 'Итого, Июль', colSpan: 4 },
    ],
    subHeaders: ['План', 'Факт', '% выполнения', 'План', 'Факт', '% выполнения', 'План', 'Факт', '% выполнения', 'План', 'Факт', '% выполнения', 'План на месяц', 'Факт за месяц', 'Отклонение факта сбора', '% выполнения'],
};
