export const getDepartmentData = (viewType: 'date' | 'direction', filterOption: string): { [key: string]: number[] } | { direction: string; value: number }[] => {
    if (viewType === 'date') {
        let filteredDataDepartment: { [key: string]: number[] } = {};

        if (filterOption === 'prevMonth') {
            filteredDataDepartment = {
                '2024-10-01': [130],
                '2024-10-02': [40],
                '2024-10-03': [150],
                '2024-10-04': [160],
                '2024-10-05': [170],
                '2024-10-06': [180],
                '2024-10-07': [190],
                '2024-10-08': [200],
                '2024-10-09': [210],
                '2024-10-10': [220],
                '2024-10-11': [230],
                '2024-10-12': [240],
                '2024-10-13': [250],
                '2024-10-14': [260],
                '2024-10-15': [270],
                '2024-10-16': [280],
                '2024-10-17': [290],
                '2024-10-18': [300],
                '2024-10-19': [310],
                '2024-10-20': [320],
                '2024-10-21': [330],
                '2024-10-22': [340],
                '2024-10-23': [350],
                '2024-10-24': [360],
                '2024-10-25': [370],
                '2024-10-26': [380],
                '2024-10-27': [390],
                '2024-10-28': [400],
                '2024-10-29': [410],
                '2024-10-30': [420],
                '2024-10-31': [430],
            };
        } else if (filterOption === 'currentMonth') {
            filteredDataDepartment = {
                '2024-11-01': [120],
                '2024-11-02': [60],
                '2024-11-03': [140],
                '2024-11-04': [150],
                '2024-11-05': [160],
                '2024-11-06': [170],
                '2024-11-07': [180],
                '2024-11-08': [190],
                '2024-11-09': [200],
                '2024-11-10': [210],
                '2024-11-11': [220],
                '2024-11-12': [230],
                '2024-11-13': [240],
                '2024-11-14': [250],
                '2024-11-15': [260],
                '2024-11-16': [270],
                '2024-11-17': [280],
                '2024-11-18': [290],
                '2024-11-19': [300],
                '2024-11-20': [310],
                '2024-11-21': [320],
                '2024-11-22': [330],
                '2024-11-23': [340],
                '2024-11-24': [350],
                '2024-11-25': [360],
                '2024-11-26': [370],
                '2024-11-27': [380],
                '2024-11-28': [390],
                '2024-11-29': [400],
                '2024-11-30': [410],
            };
        } else if (filterOption === 'nextMonth') {
            filteredDataDepartment = {
                '2024-12-01': [110],
                '2024-12-02': [50],
                '2024-12-03': [130],
                '2024-12-04': [140],
                '2024-12-05': [150],
                '2024-12-06': [160],
                '2024-12-07': [170],
                '2024-12-08': [180],
                '2024-12-09': [190],
                '2024-12-10': [200],
                '2024-12-11': [210],
                '2024-12-12': [220],
                '2024-12-13': [230],
                '2024-12-14': [240],
                '2024-12-15': [250],
                '2024-12-16': [260],
                '2024-12-17': [270],
                '2024-12-18': [280],
                '2024-12-19': [290],
                '2024-12-20': [300],
                '2024-12-21': [310],
                '2024-12-22': [320],
                '2024-12-23': [330],
                '2024-12-24': [340],
                '2024-12-25': [350],
                '2024-12-26': [360],
                '2024-12-27': [370],
                '2024-12-28': [380],
                '2024-12-29': [390],
                '2024-12-30': [400],
                '2024-12-31': [410],
            };
        }

        return filteredDataDepartment;
    } else if (viewType === 'direction') {
        let filteredDataDepartment: { direction: string; value: number }[] = [];

        if (filterOption === 'prevMonth') {
            filteredDataDepartment = [
                { direction: 'PR', value: 100 },
                { direction: 'HR', value: 30 },
                { direction: 'IT', value: 50 },
                { direction: 'Marketing', value: 70 },
                { direction: 'Finance', value: 40 },
                { direction: 'Sales', value: 60 },
            ];
        } else if (filterOption === 'currentMonth') {
            filteredDataDepartment = [
                { direction: 'PR', value: 120 },
                { direction: 'HR', value: 30 },
                { direction: 'IT', value: 55 },
                { direction: 'Marketing', value: 75 },
                { direction: 'Finance', value: 45 },
                { direction: 'Sales', value: 65 },
            ];
        } else if (filterOption === 'nextMonth') {
            filteredDataDepartment = [
                { direction: 'PR', value: 100 },
                { direction: 'HR', value: 30 },
                { direction: 'IT', value: 60 },
                { direction: 'Marketing', value: 80 },
                { direction: 'Finance', value: 50 },
                { direction: 'Sales', value: 70 },
            ];
        }

        return filteredDataDepartment;
    }

    return [];
};
