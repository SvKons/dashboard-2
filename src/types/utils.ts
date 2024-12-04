import { IManagerTitle, UserRole } from './types';

// Функция для получения названия титула по продажам
export const getTitleBySales = (sales: number): string => {
    if (sales >= 8000000) return 'Космический Пришелец';
    if (sales >= 6800000) return 'Верховный Владыка';
    if (sales >= 5700000) return 'Грозный Зевс';
    if (sales >= 4700000) return 'Таинственный Юпитер';
    if (sales >= 3800000) return 'Великий Император';
    if (sales >= 3000000) return 'Великий Князь';
    if (sales >= 2300000) return 'Хитрый Боярин';
    if (sales >= 1700000) return 'Скромный Епископ';
    if (sales >= 1200000) return 'Веселый Чародей';
    if (sales >= 800000) return 'Дикий Кондотьер';
    if (sales >= 500000) return 'Влюблённый Зодчий';
    if (sales >= 300000) return 'Хитрый Купец';
    return 'Дикий Простолюдин';
};

// Данные для отображения в таблице менеджеров с титулами и достижениями
export const mockManagers: IManagerTitle[] = [
    { id: 1, name: 'Иванова Мария Ивановна', sales: 8500000, achievements: ['Лучший продажник'], userRole: UserRole.Manager },
    { id: 2, name: 'Петрова Мария Алексеевна', sales: 7200000, achievements: ['Закрыла 50 сделок'], userRole: UserRole.Manager },
    { id: 3, name: 'Смирнов Олег Дмитриевич', sales: 6000000, achievements: ['Превзошел план'], userRole: UserRole.Manager },
    { id: 4, name: 'Сидоров Алексей Антонович', sales: 4800000, achievements: [], userRole: UserRole.Manager },
    { id: 5, name: 'Фролова Наталья Олеговна', sales: 4000000, achievements: ['Лидер квартала'], userRole: UserRole.Manager },
    { id: 6, name: 'Кузнецов Дмитрий Александрович', sales: 3200000, achievements: [], userRole: UserRole.Manager },
    { id: 7, name: 'Романова Светлана Игоревна', sales: 2500000, achievements: ['Лучший по отзывам'], userRole: UserRole.Manager },
    { id: 8, name: 'Чернов Григорий Георгиевич', sales: 1800000, achievements: [], userRole: UserRole.Manager },
    { id: 9, name: 'Белова Анна Романовна', sales: 1400000, achievements: [], userRole: UserRole.Manager },
    { id: 10, name: 'Захаров Виктор Витальевич', sales: 750000, achievements: [], userRole: UserRole.Manager },
].map(manager => ({
    ...manager,
    title: getTitleBySales(manager.sales),
}));
