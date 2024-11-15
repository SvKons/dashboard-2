export const getEmployeeData = (viewType: 'date' | 'direction', filterOption: string) => {
    if (viewType === 'date') {
        let filteredDataEmployee: { [key: string]: { [employee: string]: number } } = {};

        if (filterOption === 'prevMonth') {
            filteredDataEmployee = {
                '2024-10-01': { Иванов: 300, Петров: 200, Сидоров: 150 },
                '2024-10-02': { Иванов: 100, Петров: 150, Сидоров: 200 },
                '2024-10-03': { Иванов: 600, Петров: 159, Сидоров: 150 },
                '2024-10-04': { Иванов: 500, Петров: 369, Сидоров: 200 },
                '2024-10-05': { Иванов: 300, Петров: 958, Сидоров: 150 },
                '2024-10-06': { Иванов: 200, Петров: 753, Сидоров: 200 },
                '2024-10-07': { Иванов: 900, Петров: 147, Сидоров: 150 },
                '2024-10-08': { Иванов: 800, Петров: 852, Сидоров: 200 },
                '2024-10-09': { Иванов: 500, Петров: 258, Сидоров: 150 },
                '2024-10-10': { Иванов: 600, Петров: 963, Сидоров: 200 },
                '2024-10-11': { Иванов: 100, Петров: 369, Сидоров: 150 },
                '2024-10-12': { Иванов: 800, Петров: 789, Сидоров: 200 },
                '2024-10-13': { Иванов: 600, Петров: 456, Сидоров: 150 },
                '2024-10-14': { Иванов: 800, Петров: 123, Сидоров: 200 },
                '2024-10-15': { Иванов: 500, Петров: 321, Сидоров: 150 },
                '2024-10-16': { Иванов: 400, Петров: 654, Сидоров: 200 },
                '2024-10-17': { Иванов: 900, Петров: 987, Сидоров: 150 },
                '2024-10-18': { Иванов: 951, Петров: 159, Сидоров: 200 },
                '2024-10-19': { Иванов: 359, Петров: 753, Сидоров: 150 },
                '2024-10-20': { Иванов: 654, Петров: 963, Сидоров: 200 },
                '2024-10-21': { Иванов: 456, Петров: 852, Сидоров: 150 },
                '2024-10-22': { Иванов: 123, Петров: 157, Сидоров: 200 },
                '2024-10-23': { Иванов: 789, Петров: 563, Сидоров: 200 },
                '2024-10-24': { Иванов: 741, Петров: 279, Сидоров: 150 },
                '2024-10-25': { Иванов: 852, Петров: 397, Сидоров: 200 },
                '2024-10-26': { Иванов: 963, Петров: 798, Сидоров: 150 },
                '2024-10-27': { Иванов: 566, Петров: 656, Сидоров: 200 },
                '2024-10-28': { Иванов: 855, Петров: 555, Сидоров: 150 },
                '2024-10-29': { Иванов: 911, Петров: 444, Сидоров: 200 },
                '2024-10-30': { Иванов: 944, Петров: 945, Сидоров: 150 },
                '2024-10-31': { Иванов: 633, Петров: 123, Сидоров: 200 },
            };
        } else if (filterOption === 'currentMonth') {
            filteredDataEmployee = {
                '2024-10-01': { Иванов: 400, Петров: 654, Сидоров: 200 },
                '2024-10-02': { Иванов: 900, Петров: 987, Сидоров: 150 },
                '2024-10-03': { Иванов: 951, Петров: 159, Сидоров: 200 },
                '2024-10-04': { Иванов: 359, Петров: 753, Сидоров: 150 },
                '2024-10-05': { Иванов: 654, Петров: 963, Сидоров: 200 },
                '2024-10-06': { Иванов: 456, Петров: 852, Сидоров: 150 },
                '2024-10-07': { Иванов: 123, Петров: 157, Сидоров: 200 },
                '2024-10-08': { Иванов: 789, Петров: 563, Сидоров: 200 },
                '2024-10-09': { Иванов: 741, Петров: 279, Сидоров: 150 },
                '2024-10-10': { Иванов: 852, Петров: 397, Сидоров: 200 },
                '2024-10-11': { Иванов: 963, Петров: 798, Сидоров: 150 },
                '2024-10-12': { Иванов: 566, Петров: 656, Сидоров: 200 },
                '2024-10-13': { Иванов: 855, Петров: 555, Сидоров: 150 },
                '2024-10-14': { Иванов: 911, Петров: 444, Сидоров: 200 },
                '2024-10-15': { Иванов: 944, Петров: 945, Сидоров: 150 },
                '2024-10-16': { Иванов: 633, Петров: 123, Сидоров: 200 },
                '2024-10-17': { Иванов: 500, Петров: 369, Сидоров: 200 },
                '2024-10-18': { Иванов: 300, Петров: 958, Сидоров: 150 },
                '2024-10-19': { Иванов: 200, Петров: 753, Сидоров: 200 },
                '2024-10-20': { Иванов: 900, Петров: 147, Сидоров: 150 },
                '2024-10-21': { Иванов: 800, Петров: 852, Сидоров: 200 },
                '2024-10-22': { Иванов: 500, Петров: 258, Сидоров: 150 },
                '2024-10-23': { Иванов: 600, Петров: 963, Сидоров: 200 },
                '2024-10-24': { Иванов: 100, Петров: 369, Сидоров: 150 },
                '2024-10-25': { Иванов: 800, Петров: 789, Сидоров: 200 },
                '2024-10-26': { Иванов: 600, Петров: 456, Сидоров: 150 },
                '2024-10-27': { Иванов: 100, Петров: 369, Сидоров: 150 },
                '2024-10-28': { Иванов: 800, Петров: 789, Сидоров: 200 },
                '2024-10-29': { Иванов: 600, Петров: 456, Сидоров: 150 },
                '2024-10-30': { Иванов: 944, Петров: 945, Сидоров: 150 },
            };
        } else if (filterOption === 'nextMonth') {
            filteredDataEmployee = {
                '2024-10-01': { Иванов: 500, Петров: 369, Сидоров: 200 },
                '2024-10-02': { Иванов: 300, Петров: 958, Сидоров: 150 },
                '2024-10-03': { Иванов: 200, Петров: 753, Сидоров: 200 },
                '2024-10-04': { Иванов: 900, Петров: 147, Сидоров: 150 },
                '2024-10-05': { Иванов: 800, Петров: 852, Сидоров: 200 },
                '2024-10-06': { Иванов: 500, Петров: 258, Сидоров: 150 },
                '2024-10-07': { Иванов: 600, Петров: 963, Сидоров: 200 },
                '2024-10-08': { Иванов: 100, Петров: 369, Сидоров: 150 },
                '2024-10-09': { Иванов: 566, Петров: 656, Сидоров: 200 },
                '2024-10-10': { Иванов: 855, Петров: 555, Сидоров: 150 },
                '2024-10-11': { Иванов: 911, Петров: 444, Сидоров: 200 },
                '2024-10-12': { Иванов: 944, Петров: 945, Сидоров: 150 },
                '2024-10-13': { Иванов: 633, Петров: 123, Сидоров: 200 },
                '2024-10-14': { Иванов: 500, Петров: 258, Сидоров: 150 },
                '2024-10-15': { Иванов: 600, Петров: 963, Сидоров: 200 },
                '2024-10-16': { Иванов: 100, Петров: 369, Сидоров: 150 },
                '2024-10-17': { Иванов: 800, Петров: 789, Сидоров: 200 },
                '2024-10-18': { Иванов: 600, Петров: 456, Сидоров: 150 },
                '2024-10-19': { Иванов: 100, Петров: 369, Сидоров: 150 },
                '2024-10-20': { Иванов: 800, Петров: 789, Сидоров: 200 },
                '2024-10-21': { Иванов: 600, Петров: 456, Сидоров: 150 },
                '2024-10-22': { Иванов: 944, Петров: 945, Сидоров: 150 },
                '2024-10-23': { Иванов: 963, Петров: 798, Сидоров: 150 },
                '2024-10-24': { Иванов: 566, Петров: 656, Сидоров: 200 },
                '2024-10-25': { Иванов: 855, Петров: 555, Сидоров: 150 },
                '2024-10-26': { Иванов: 911, Петров: 444, Сидоров: 200 },
                '2024-10-27': { Иванов: 944, Петров: 945, Сидоров: 150 },
                '2024-10-28': { Иванов: 633, Петров: 123, Сидоров: 200 },
                '2024-10-29': { Иванов: 900, Петров: 147, Сидоров: 150 },
                '2024-10-30': { Иванов: 800, Петров: 852, Сидоров: 200 },
                '2024-10-31': { Иванов: 500, Петров: 258, Сидоров: 150 },
            };
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
