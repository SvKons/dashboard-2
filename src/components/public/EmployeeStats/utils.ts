export interface IAdditionalGoals {
    salesCount: number;
    amount: number;
}

export interface IEmployee {
    name: string;
    salesCount: number;
    revenue: number;
    annualPaymentsPercentage: number;
    additionalGoals: IAdditionalGoals;
    leadConversion: number;
    contributionToFact?: number;
}

export const getEmployeeData = (viewType: 'total-stats' | 'direction', filterOption: string) => {
    if (viewType === 'total-stats') {
        let filteredDataEmployee: IEmployee[] = [];

        if (filterOption === 'prevMonth') {
            filteredDataEmployee = [
                { name: 'Иван Иванов', salesCount: 150, revenue: 150000, annualPaymentsPercentage: 10, additionalGoals: { salesCount: 20, amount: 2000 }, leadConversion: 20 },
                { name: 'Мария Петрова', salesCount: 120, revenue: 120000, annualPaymentsPercentage: 8, additionalGoals: { salesCount: 15, amount: 1500 }, leadConversion: 18 },
                { name: 'Сергей Сергеев', salesCount: 180, revenue: 180000, annualPaymentsPercentage: 12, additionalGoals: { salesCount: 25, amount: 2500 }, leadConversion: 22 },
                { name: 'Анна Сидорова', salesCount: 130, revenue: 130000, annualPaymentsPercentage: 9, additionalGoals: { salesCount: 18, amount: 1800 }, leadConversion: 19 },
                { name: 'Дмитрий Кузнецов', salesCount: 140, revenue: 140000, annualPaymentsPercentage: 11, additionalGoals: { salesCount: 22, amount: 2200 }, leadConversion: 21 },
                { name: 'Елена Смирнова', salesCount: 110, revenue: 110000, annualPaymentsPercentage: 7, additionalGoals: { salesCount: 12, amount: 1200 }, leadConversion: 17 },
                { name: 'Алексей Федоров', salesCount: 160, revenue: 160000, annualPaymentsPercentage: 13, additionalGoals: { salesCount: 28, amount: 2800 }, leadConversion: 23 },
                { name: 'Ольга Васильева', salesCount: 100, revenue: 100000, annualPaymentsPercentage: 6, additionalGoals: { salesCount: 10, amount: 1000 }, leadConversion: 16 },
                { name: 'Виктория Николаева', salesCount: 170, revenue: 170000, annualPaymentsPercentage: 14, additionalGoals: { salesCount: 30, amount: 3000 }, leadConversion: 24 },
                { name: 'Григорий Григорьев', salesCount: 190, revenue: 190000, annualPaymentsPercentage: 15, additionalGoals: { salesCount: 35, amount: 3500 }, leadConversion: 25 },
                { name: 'Андрей Андреев', salesCount: 125, revenue: 125000, annualPaymentsPercentage: 8.5, additionalGoals: { salesCount: 16, amount: 1600 }, leadConversion: 18.5 },
                { name: 'Юлия Юрьева', salesCount: 135, revenue: 135000, annualPaymentsPercentage: 9.5, additionalGoals: { salesCount: 19, amount: 1900 }, leadConversion: 19.5 },
                { name: 'Павел Павлов', salesCount: 145, revenue: 145000, annualPaymentsPercentage: 10.5, additionalGoals: { salesCount: 21, amount: 2100 }, leadConversion: 20.5 },
                { name: 'Наталья Наталова', salesCount: 155, revenue: 155000, annualPaymentsPercentage: 11.5, additionalGoals: { salesCount: 23, amount: 2300 }, leadConversion: 21.5 },
                { name: 'Борис Борисов', salesCount: 165, revenue: 165000, annualPaymentsPercentage: 12.5, additionalGoals: { salesCount: 26, amount: 2600 }, leadConversion: 22.5 },
                { name: 'Татьяна Татьянова', salesCount: 175, revenue: 175000, annualPaymentsPercentage: 13.5, additionalGoals: { salesCount: 27, amount: 2700 }, leadConversion: 23.5 },
                { name: 'Владимир Владимиров', salesCount: 185, revenue: 185000, annualPaymentsPercentage: 14.5, additionalGoals: { salesCount: 29, amount: 2900 }, leadConversion: 24.5 },
                { name: 'Екатерина Екатеринова', salesCount: 195, revenue: 195000, annualPaymentsPercentage: 15.5, additionalGoals: { salesCount: 31, amount: 3100 }, leadConversion: 25.5 },
                { name: 'Константин Константинов', salesCount: 200, revenue: 200000, annualPaymentsPercentage: 16, additionalGoals: { salesCount: 33, amount: 3300 }, leadConversion: 26 },
                { name: 'Людмила Людмилова', salesCount: 205, revenue: 205000, annualPaymentsPercentage: 16.5, additionalGoals: { salesCount: 34, amount: 3400 }, leadConversion: 26.5 },
                { name: 'Михаил Михайлов', salesCount: 210, revenue: 210000, annualPaymentsPercentage: 17, additionalGoals: { salesCount: 36, amount: 3600 }, leadConversion: 27 },
            ];
        } else if (filterOption === 'currentMonth') {
            filteredDataEmployee = [
                { name: 'Иван Иванов', salesCount: 160, revenue: 160000, annualPaymentsPercentage: 11, additionalGoals: { salesCount: 23, amount: 2300 }, leadConversion: 21 },
                { name: 'Мария Петрова', salesCount: 130, revenue: 130000, annualPaymentsPercentage: 9, additionalGoals: { salesCount: 18, amount: 1800 }, leadConversion: 19 },
                { name: 'Сергей Сергеев', salesCount: 190, revenue: 190000, annualPaymentsPercentage: 13, additionalGoals: { salesCount: 27, amount: 2700 }, leadConversion: 23 },
                { name: 'Анна Сидорова', salesCount: 140, revenue: 140000, annualPaymentsPercentage: 10, additionalGoals: { salesCount: 21, amount: 2100 }, leadConversion: 20 },
                { name: 'Дмитрий Кузнецов', salesCount: 150, revenue: 150000, annualPaymentsPercentage: 12, additionalGoals: { salesCount: 24, amount: 2400 }, leadConversion: 22 },
                { name: 'Елена Смирнова', salesCount: 120, revenue: 120000, annualPaymentsPercentage: 8, additionalGoals: { salesCount: 15, amount: 1500 }, leadConversion: 18 },
                { name: 'Алексей Федоров', salesCount: 170, revenue: 170000, annualPaymentsPercentage: 14, additionalGoals: { salesCount: 29, amount: 2900 }, leadConversion: 24 },
                { name: 'Ольга Васильева', salesCount: 110, revenue: 110000, annualPaymentsPercentage: 7, additionalGoals: { salesCount: 13, amount: 1300 }, leadConversion: 17 },
                { name: 'Виктория Николаева', salesCount: 180, revenue: 180000, annualPaymentsPercentage: 15, additionalGoals: { salesCount: 31, amount: 3100 }, leadConversion: 25 },
                { name: 'Григорий Григорьев', salesCount: 200, revenue: 200000, annualPaymentsPercentage: 16, additionalGoals: { salesCount: 34, amount: 3400 }, leadConversion: 26 },
                { name: 'Андрей Андреев', salesCount: 135, revenue: 135000, annualPaymentsPercentage: 9.5, additionalGoals: { salesCount: 19, amount: 1900 }, leadConversion: 19.5 },
                { name: 'Юлия Юрьева', salesCount: 145, revenue: 145000, annualPaymentsPercentage: 10.5, additionalGoals: { salesCount: 21, amount: 2100 }, leadConversion: 20.5 },
                { name: 'Павел Павлов', salesCount: 155, revenue: 155000, annualPaymentsPercentage: 11.5, additionalGoals: { salesCount: 23, amount: 2300 }, leadConversion: 21.5 },
                { name: 'Наталья Наталова', salesCount: 165, revenue: 165000, annualPaymentsPercentage: 12.5, additionalGoals: { salesCount: 26, amount: 2600 }, leadConversion: 22.5 },
                { name: 'Борис Борисов', salesCount: 175, revenue: 175000, annualPaymentsPercentage: 13.5, additionalGoals: { salesCount: 27, amount: 2700 }, leadConversion: 23.5 },
                { name: 'Татьяна Татьянова', salesCount: 185, revenue: 185000, annualPaymentsPercentage: 14.5, additionalGoals: { salesCount: 29, amount: 2900 }, leadConversion: 24.5 },
                { name: 'Владимир Владимиров', salesCount: 195, revenue: 195000, annualPaymentsPercentage: 15.5, additionalGoals: { salesCount: 31, amount: 3100 }, leadConversion: 25.5 },
                { name: 'Екатерина Екатеринова', salesCount: 205, revenue: 205000, annualPaymentsPercentage: 16.5, additionalGoals: { salesCount: 34, amount: 3400 }, leadConversion: 26.5 },
                { name: 'Константин Константинов', salesCount: 210, revenue: 210000, annualPaymentsPercentage: 17, additionalGoals: { salesCount: 36, amount: 3600 }, leadConversion: 27 },
                { name: 'Людмила Людмилова', salesCount: 215, revenue: 215000, annualPaymentsPercentage: 17.5, additionalGoals: { salesCount: 37, amount: 3700 }, leadConversion: 27.5 },
                { name: 'Михаил Михайлов', salesCount: 220, revenue: 220000, annualPaymentsPercentage: 18, additionalGoals: { salesCount: 38, amount: 3800 }, leadConversion: 28 },
            ];
        } else if (filterOption === 'nextMonth') {
            filteredDataEmployee = [
                { name: 'Иван Иванов', salesCount: 170, revenue: 170000, annualPaymentsPercentage: 12, additionalGoals: { salesCount: 25, amount: 2500 }, leadConversion: 22 },
                { name: 'Мария Петрова', salesCount: 140, revenue: 140000, annualPaymentsPercentage: 10, additionalGoals: { salesCount: 20, amount: 2000 }, leadConversion: 20 },
                { name: 'Сергей Сергеев', salesCount: 200, revenue: 200000, annualPaymentsPercentage: 14, additionalGoals: { salesCount: 30, amount: 3000 }, leadConversion: 24 },
                { name: 'Анна Сидорова', salesCount: 150, revenue: 150000, annualPaymentsPercentage: 11, additionalGoals: { salesCount: 23, amount: 2300 }, leadConversion: 21 },
                { name: 'Дмитрий Кузнецов', salesCount: 160, revenue: 160000, annualPaymentsPercentage: 13, additionalGoals: { salesCount: 25, amount: 2500 }, leadConversion: 23 },
                { name: 'Елена Смирнова', salesCount: 130, revenue: 130000, annualPaymentsPercentage: 9, additionalGoals: { salesCount: 18, amount: 1800 }, leadConversion: 19 },
                { name: 'Алексей Федоров', salesCount: 180, revenue: 180000, annualPaymentsPercentage: 15, additionalGoals: { salesCount: 29, amount: 2900 }, leadConversion: 25 },
                { name: 'Ольга Васильева', salesCount: 120, revenue: 120000, annualPaymentsPercentage: 8, additionalGoals: { salesCount: 15, amount: 1500 }, leadConversion: 18 },
                { name: 'Виктория Николаева', salesCount: 190, revenue: 190000, annualPaymentsPercentage: 16, additionalGoals: { salesCount: 31, amount: 3100 }, leadConversion: 26 },
                { name: 'Григорий Григорьев', salesCount: 210, revenue: 210000, annualPaymentsPercentage: 17, additionalGoals: { salesCount: 34, amount: 3400 }, leadConversion: 27 },
                { name: 'Андрей Андреев', salesCount: 145, revenue: 145000, annualPaymentsPercentage: 10.5, additionalGoals: { salesCount: 21, amount: 2100 }, leadConversion: 20.5 },
                { name: 'Юлия Юрьева', salesCount: 155, revenue: 155000, annualPaymentsPercentage: 11.5, additionalGoals: { salesCount: 23, amount: 2300 }, leadConversion: 21.5 },
                { name: 'Павел Павлов', salesCount: 165, revenue: 165000, annualPaymentsPercentage: 12.5, additionalGoals: { salesCount: 26, amount: 2600 }, leadConversion: 22.5 },
                { name: 'Наталья Наталова', salesCount: 175, revenue: 175000, annualPaymentsPercentage: 13.5, additionalGoals: { salesCount: 27, amount: 2700 }, leadConversion: 23.5 },
                { name: 'Борис Борисов', salesCount: 185, revenue: 185000, annualPaymentsPercentage: 14.5, additionalGoals: { salesCount: 29, amount: 2900 }, leadConversion: 24.5 },
                { name: 'Татьяна Татьянова', salesCount: 195, revenue: 195000, annualPaymentsPercentage: 15.5, additionalGoals: { salesCount: 31, amount: 3100 }, leadConversion: 25.5 },
                { name: 'Владимир Владимиров', salesCount: 205, revenue: 205000, annualPaymentsPercentage: 16.5, additionalGoals: { salesCount: 34, amount: 3400 }, leadConversion: 26.5 },
                { name: 'Екатерина Екатеринова', salesCount: 215, revenue: 215000, annualPaymentsPercentage: 17.5, additionalGoals: { salesCount: 37, amount: 3700 }, leadConversion: 27.5 },
                { name: 'Константин Константинов', salesCount: 220, revenue: 220000, annualPaymentsPercentage: 18, additionalGoals: { salesCount: 38, amount: 3800 }, leadConversion: 28 },
                { name: 'Людмила Людмилова', salesCount: 225, revenue: 225000, annualPaymentsPercentage: 18.5, additionalGoals: { salesCount: 39, amount: 3900 }, leadConversion: 28.5 },
                { name: 'Михаил Михайлов', salesCount: 230, revenue: 230000, annualPaymentsPercentage: 19, additionalGoals: { salesCount: 40, amount: 4000 }, leadConversion: 29 },
            ];
        }

        return filteredDataEmployee;
    } else if (viewType === 'direction') {
        let filteredDataEmployee: { employee: string; direction: string; value: number }[] = [];

        if (filterOption === 'prevMonth') {
            filteredDataEmployee = [
                { employee: 'Иванов', direction: 'PR', value: 100 },
                { employee: 'Петров', direction: 'HR', value: 30 },
                { employee: 'Сидоров', direction: 'IT', value: 50 },
                { employee: 'Иванов', direction: 'Marketing', value: 70 },
                { employee: 'Петров', direction: 'Finance', value: 40 },
            ];
        } else if (filterOption === 'currentMonth') {
            filteredDataEmployee = [
                { employee: 'Иванов', direction: 'PR', value: 120 },
                { employee: 'Жуков', direction: 'PR', value: 150 },
                { employee: 'Петров', direction: 'HR', value: 30 },
                { employee: 'Сидоров', direction: 'IT', value: 55 },
                { employee: 'Иванов', direction: 'Marketing', value: 75 },
                { employee: 'Петров', direction: 'Finance', value: 45 },
            ];
        } else if (filterOption === 'nextMonth') {
            filteredDataEmployee = [
                { employee: 'Иванов', direction: 'PR', value: 100 },
                { employee: 'Петров', direction: 'HR', value: 30 },
                { employee: 'Сидоров', direction: 'IT', value: 60 },
                { employee: 'Иванов', direction: 'Marketing', value: 80 },
                { employee: 'Петров', direction: 'Finance', value: 50 },
            ];
        }

        return filteredDataEmployee;
    }

    return [];
};
