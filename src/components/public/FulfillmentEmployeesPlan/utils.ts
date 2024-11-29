export interface IEmployee {
    id: string;
    name: string;
    fulfillmentPercentage: number;
}

export const employees: IEmployee[] = [
    { id: '1', name: 'Иван Иванов', fulfillmentPercentage: 75 },
    { id: '2', name: 'Мария Петрова', fulfillmentPercentage: 50 },
    { id: '3', name: 'Сергей Сергеев', fulfillmentPercentage: 100 },
    { id: '4', name: 'Анна Сидорова', fulfillmentPercentage: 30 },
    { id: '5', name: 'Дмитрий Кузнецов', fulfillmentPercentage: 90 },
    { id: '6', name: 'Елена Смирнова', fulfillmentPercentage: 60 },
    { id: '7', name: 'Алексей Федоров', fulfillmentPercentage: 80 },
    { id: '8', name: 'Ольга Васильева', fulfillmentPercentage: 40 },
    { id: '9', name: 'Виктория Николаева', fulfillmentPercentage: 20 },
    { id: '10', name: 'Григорий Григорьев', fulfillmentPercentage: 10 },
];
