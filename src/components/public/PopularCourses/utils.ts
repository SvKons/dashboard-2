export interface ICourse {
    title: string;
    sales: number;
}

export const courses: ICourse[] = [
    { title: 'Управление проектами', sales: Math.floor(Math.random() * 1000) },
    { title: 'Цифровой маркетинг', sales: Math.floor(Math.random() * 1000) },
    { title: 'Программирование на Python', sales: Math.floor(Math.random() * 1000) },
    { title: 'Дизайн пользовательского интерфейса', sales: Math.floor(Math.random() * 1000) },
    { title: 'Финансовый анализ', sales: Math.floor(Math.random() * 1000) },
    { title: 'Курсы по бухгалтерскому учету', sales: Math.floor(Math.random() * 1000) },
    { title: 'Иностранные языки', sales: Math.floor(Math.random() * 1000) },
    { title: 'Кулинарные мастер-классы', sales: Math.floor(Math.random() * 1000) },
    { title: 'Курсы по фотографии', sales: Math.floor(Math.random() * 1000) },
    { title: 'Кибербезопасность', sales: Math.floor(Math.random() * 1000) },
];
