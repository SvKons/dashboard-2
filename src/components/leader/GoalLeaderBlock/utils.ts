export interface IGoal {
    id: string;
    text: string;
    managerId: string;
}

export interface IManager {
    id: string;
    name: string;
}

// Моковые данные
export const managers: IManager[] = [
    { id: '1', name: 'Менеджер 1' },
    { id: '2', name: 'Менеджер 2' },
    { id: '3', name: 'Менеджер 3' },
    { id: '4', name: 'Менеджер 4' },
    { id: '5', name: 'Менеджер 5' },
];

export const goalsList: IGoal[] = [
    { id: 'g1', text: 'Цель 1 для Менеджера 1', managerId: '1' },
    { id: 'g2', text: 'Цель 2 для Менеджера 1', managerId: '1' },
    { id: 'g3', text: 'Цель 1 для Менеджера 2', managerId: '2' },
    { id: 'g4', text: 'Цель 2 для Менеджера 2', managerId: '2' },
    { id: 'g5', text: 'Цель 1 для Менеджера 3', managerId: '3' },
    { id: 'g6', text: 'Цель 1 для Менеджера 4', managerId: '4' },
    { id: 'g7', text: 'Цель 1 для Менеджера 5', managerId: '5' },
    { id: 'g8', text: 'Цель 2 для Менеджера 5', managerId: '5' },
    { id: 'g9', text: 'Цель 3 для Менеджера 5', managerId: '5' },
];

export const commonGoalsList: IGoal[] = [
    { id: 'cg1', text: 'Общая цель 1', managerId: '' },
    { id: 'cg2', text: 'Общая цель 2', managerId: '' },
];

export interface IAddGoalProps {
    onSave: (goal: IGoal) => void;
    onCancel: () => void;
    initialValues: IGoal | null;
}
