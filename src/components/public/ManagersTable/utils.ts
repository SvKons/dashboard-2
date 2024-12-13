import { ImagesByTitleAndAdjective, IManagerTitle, TitlesWithAdjectives, UserRole } from '../../../types/types';

const alienImages = [
    require('./img/alien/img13-1.png'),
    require('./img/alien/img13-10.png'),
    require('./img/alien/img13-11.png'),
    require('./img/alien/img13-12.png'),
    require('./img/alien/img13-13.png'),
    require('./img/alien/img13-14.png'),
    require('./img/alien/img13-15.png'),
    require('./img/alien/img13-16.png'),
    require('./img/alien/img13-2.png'),
    require('./img/alien/img13-3.png'),
    require('./img/alien/img13-4.png'),
    require('./img/alien/img13-5.png'),
    require('./img/alien/img13-6.png'),
    require('./img/alien/img13-7.png'),
    require('./img/alien/img13-8.png'),
    require('./img/alien/img13-9.png'),
];

const architect = [
    require('./img/architect/img3-1.png'),
    require('./img/architect/img3-2.png'),
    require('./img/architect/img3-3.png'),
    require('./img/architect/img3-4.png'),
    require('./img/architect/img3-5.png'),
    require('./img/architect/img3-6.png'),
    require('./img/architect/img3-7.png'),
    require('./img/architect/img3-8.png'),
    require('./img/architect/img3-9.png'),
    require('./img/architect/img3-10.png'),
    require('./img/architect/img3-11.png'),
    require('./img/architect/img3-12.png'),
];

const tradesman = [
    require('./img/tradesman/img2-1.png'),
    require('./img/tradesman/img2-2.png'),
    require('./img/tradesman/img2-3.png'),
    require('./img/tradesman/img2-4.png'),
    require('./img/tradesman/img2-5.png'),
    require('./img/tradesman/img2-6.png'),
    require('./img/tradesman/img2-7.png'),
    require('./img/tradesman/img2-8.png'),
    require('./img/tradesman/img2-9.png'),
    require('./img/tradesman/img2-10.png'),
    require('./img/tradesman/img2-11.png'),
    require('./img/tradesman/img2-12.png'),
    require('./img/tradesman/img2-13.png'),
    require('./img/tradesman/img2-14.png'),
    require('./img/tradesman/img2-15.png'),
    require('./img/tradesman/img2-16.png'),
    require('./img/tradesman/img2-17.png'),
    require('./img/tradesman/img2-18.png'),
    require('./img/tradesman/img2-19.png'),
    require('./img/tradesman/img2-20.png'),
];

// Объявление изображений для каждого титула и прилагательного
const imagesByTitleAndAdjective: ImagesByTitleAndAdjective = {
    Пришелец: {
        Космический: alienImages,
        Загадочный: alienImages,
    },
    Владыка: {
        Верховный: [
            require('./img/lord/img12-1.png'),
            require('./img/lord/img12-2.png'),
            require('./img/lord/img12-3.png'),
            require('./img/lord/img12-4.png'),
            require('./img/lord/img12-9.png'),
            require('./img/lord/img12-10.png'),
            require('./img/lord/img12-13.png'),
        ],
        Небесный: [
            require('./img/lord/img12-5.png'),
            require('./img/lord/img12-6.png'),
            require('./img/lord/img12-7.png'),
            require('./img/lord/img12-8.png'),
            require('./img/lord/img12-11.png'),
            require('./img/lord/img12-12.png'),
            require('./img/lord/img12-14.jpg'),
            require('./img/lord/img12-15.png'),
        ],
    },
    Зевс: {
        Грозный: [require('./img/Zeus/img11-2.jpg'), require('./img/Zeus/img11-3.png'), require('./img/Zeus/img11-7.png'), require('./img/Zeus/img11-8.png'), require('./img/Zeus/img11-10.png'), require('./img/Zeus/img11-12.png')],
        Всемогущий: [
            require('./img/Zeus/img11-1.png'),
            require('./img/Zeus/img11-4.png'),
            require('./img/Zeus/img11-5.png'),
            require('./img/Zeus/img11-6.png'),
            require('./img/Zeus/img11-9.png'),
            require('./img/Zeus/img11-11.png'),
            require('./img/Zeus/img11-13.png'),
        ],
    },
    Юпитер: {
        Таинственный: [
            require('./img/Jupiter/img10-4.png'),
            require('./img/Jupiter/img10-5.png'),
            require('./img/Jupiter/img10-9.png'),
            require('./img/Jupiter/img10-10.png'),
            require('./img/Jupiter/img10-11.png'),
            require('./img/Jupiter/img10-14.png'),
            require('./img/Jupiter/img10-18.png'),
        ],
        Неведомый: [require('./img/Jupiter/img10-1.png'), require('./img/Jupiter/img10-2.png'), require('./img/Jupiter/img10-3.png'), require('./img/Jupiter/img10-6.png'), require('./img/Jupiter/img10-17.png')],
        Вездесущий: [require('./img/Jupiter/img10-7.png'), require('./img/Jupiter/img10-8.png'), require('./img/Jupiter/img10-12.png'), require('./img/Jupiter/img10-13.png'), require('./img/Jupiter/img10-15.png'), require('./img/Jupiter/img10-16.png')],
    },
    Император: {
        Великий: [require('./img/emperor/img9-4.png'), require('./img/emperor/img9-5.png'), require('./img/emperor/img9-6.png')],
        Легендарный: [require('./img/emperor/img9-1.png'), require('./img/emperor/img9-2.png'), require('./img/emperor/img9-3.png')],
        Последний: [require('./img/emperor/img9-7.png'), require('./img/emperor/img9-8.png'), require('./img/emperor/img9-9.png')],
    },
    Князь: {
        Великий: [require('./img/prince/img8-1.png'), require('./img/prince/img8-2.png'), require('./img/prince/img8-8.png'), require('./img/prince/img8-9.png')],
        Веселый: [require('./img/prince/img8-3.png'), require('./img/prince/img8-4.png'), require('./img/prince/img8-5.png')],
        Благородный: [require('./img/prince/img8-11.png'), require('./img/prince/img8-12.png'), require('./img/prince/img8-13.png'), require('./img/prince/img8-14.png')],
        Светлый: [require('./img/prince/img8-6.png'), require('./img/prince/img8-7.png'), require('./img/prince/img8-10.png')],
    },
    Боярин: {
        Хитрый: [require('./img/boyar/img7-1.png'), require('./img/boyar/img7-3.png'), require('./img/boyar/img7-4.png')],
        Влиятельный: [require('./img/boyar/img7-5.png'), require('./img/boyar/img7-6.png')],
        Зажиточный: [require('./img/boyar/img7-2.png'), require('./img/boyar/img7-10.png')],
        Знатный: [require('./img/boyar/img7-7.png'), require('./img/boyar/img7-8.png'), require('./img/boyar/img7-9.png')],
    },
    Епископ: {
        Скромный: [require('./img/bishop/img6-2.png'), require('./img/bishop/img6-4.png'), require('./img/bishop/img6-5.png')],
        Величественный: [require('./img/bishop/img6-8.png'), require('./img/bishop/img6-6.png')],
        Уважаемый: [require('./img/bishop/img6-1.png'), require('./img/bishop/img6-3.png'), require('./img/bishop/img6-7.png')],
        Умиротворённый: [require('./img/bishop/img6-11.png'), require('./img/bishop/img6-13.png')],
        Просветлённый: [require('./img/bishop/img6-9.png'), require('./img/bishop/img6-10.png'), require('./img/bishop/img6-12.png')],
    },
    Чародей: {
        Веселый: [require('./img/wizard/img5-1.png'), require('./img/wizard/img5-2.png'), require('./img/wizard/img5-3.png'), require('./img/wizard/img5-4.png')],
        Хитрый: [require('./img/wizard/img5-7.png')],
        Могущественный: [require('./img/wizard/img5-12.png'), require('./img/wizard/img5-13.png'), require('./img/wizard/img5-14.png')],
        Чудесный: [require('./img/wizard/img5-5.png'), require('./img/wizard/img5-6.png')],
        Тёмный: [require('./img/wizard/img5-8.png'), require('./img/wizard/img5-9.png'), require('./img/wizard/img5-10.png'), require('./img/wizard/img5-11.png')],
        Искромётный: [require('./img/wizard/img5-15.png')],
    },
    Кондотьер: {
        Дикий: [require('./img/condottiere/img4-12.png'), require('./img/condottiere/img4-16.png'), require('./img/condottiere/img4-17.png'), require('./img/condottiere/img4-20.png')],
        Хитрый: [require('./img/condottiere/img4-6.png'), require('./img/condottiere/img4-18.png'), require('./img/condottiere/img4-23.png')],
        Благородный: [require('./img/condottiere/img4-1.png'), require('./img/condottiere/img4-3.png'), require('./img/condottiere/img4-10.png'), require('./img/condottiere/img4-11.png')],
        Воинственный: [require('./img/condottiere/img4-2.png'), require('./img/condottiere/img4-13.png'), require('./img/condottiere/img4-19.png'), require('./img/condottiere/img4-22.png')],
        Смелый: [require('./img/condottiere/img4-5.png'), require('./img/condottiere/img4-14.png'), require('./img/condottiere/img4-15.png')],
        Хмурый: [require('./img/condottiere/img4-4.png'), require('./img/condottiere/img4-8.png'), require('./img/condottiere/img4-25.png'), require('./img/condottiere/img4-26.png')],
        Отчаянный: [require('./img/condottiere/img4-7.png'), require('./img/condottiere/img4-9.png'), require('./img/condottiere/img4-21.png'), require('./img/condottiere/img4-24.png')],
    },
    Зодчий: {
        Влюблённый: architect,
        Усердный: architect,
        Почётный: architect,
        Прославленный: architect,
        Расчётливый: architect,
        Умелый: architect,
        Остроумный: architect,
        Опытный: architect,
    },
    Купец: {
        Хитрый: tradesman,
        Прозорливый: tradesman,
        Знатный: tradesman,
        Находчивый: tradesman,
        Смелый: tradesman,
        Предприимчивый: tradesman,
        Выдающийся: tradesman,
        Заморский: tradesman,
        Состоятельный: tradesman,
    },
    Простолюдин: {
        Дикий: [require('./img/pleb/img1-5.png'), require('./img/pleb/img1-6.png'), require('./img/pleb/img1-7.png'), require('./img/pleb/img1-31.png')],
        Хитрый: [require('./img/pleb/img1-4.png'), require('./img/pleb/img1-33.png'), require('./img/pleb/img1-34.png'), require('./img/pleb/img1-35.png')],
        Влюблённый: [require('./img/pleb/img1-8.png'), require('./img/pleb/img1-21.png')],
        Грустный: [require('./img/pleb/img1-3.png'), require('./img/pleb/img1-28.png'), require('./img/pleb/img1-29.png'), require('./img/pleb/img1-30.png')],
        Скромный: [require('./img/pleb/img1-15.png'), require('./img/pleb/img1-32.png')],
        Усердный: [require('./img/pleb/img1-12.png'), require('./img/pleb/img1-13.png'), require('./img/pleb/img1-14.png')],
        Веселый: [require('./img/pleb/img1-23.png'), require('./img/pleb/img1-24.png'), require('./img/pleb/img1-25.png'), require('./img/pleb/img1-27.png')],
        Обычный: [require('./img/pleb/img1-2.png'), require('./img/pleb/img1-17.png'), require('./img/pleb/img1-36.png')],
        Добродушный: [require('./img/pleb/img1-1.png'), require('./img/pleb/img1-10.png'), require('./img/pleb/img1-11.png'), require('./img/pleb/img1-22.png'), require('./img/pleb/img1-26.png')],
        Наивный: [require('./img/pleb/img1-9.png'), require('./img/pleb/img1-16.png'), require('./img/pleb/img1-18.png'), require('./img/pleb/img1-19.png'), require('./img/pleb/img1-20.png')],
    },
};

export const titlesWithAdjectives: TitlesWithAdjectives = {
    Пришелец: ['Космический', 'Загадочный'],
    Владыка: ['Верховный', 'Небесный'],
    Зевс: ['Грозный', 'Всемогущий'],
    Юпитер: ['Таинственный', 'Неведомый', 'Вездесущий'],
    Император: ['Великий', 'Легендарный', 'Последний'],
    Князь: ['Великий', 'Веселый', 'Благородный', 'Светлый'],
    Боярин: ['Хитрый', 'Влиятельный', 'Зажиточный', 'Знатный'],
    Епископ: ['Скромный', 'Величественный', 'Уважаемый', 'Умиротворённый', 'Просветлённый'],
    Чародей: ['Веселый', 'Хитрый', 'Могущественный', 'Чудесный', 'Тёмный', 'Искромётный'],
    Кондотьер: ['Дикий', 'Хитрый', 'Благородный', 'Воинственный', 'Смелый', 'Хмурый', 'Отчаянный'],
    Зодчий: ['Влюблённый', 'Усердный', 'Почётный', 'Прославленный', 'Расчётливый', 'Умелый', 'Остроумный', 'Опытный'],
    Купец: ['Хитрый', 'Прозорливый', 'Знатный', 'Находчивый', 'Смелый', 'Предприимчивый', 'Выдающийся', 'Заморский', 'Состоятельный'],
    Простолюдин: ['Дикий', 'Хитрый', 'Влюблённый', 'Грустный', 'Скромный', 'Усердный', 'Веселый', 'Обычный', 'Добродушный', 'Наивный'],
};

// Функция для получения названия титула по продажам
export const getTitleBySales = (sales: number): string => {
    let title = 'Простолюдин'; // Значение по умолчанию

    if (sales >= 8000000) title = 'Пришелец';
    else if (sales >= 6800000) title = 'Владыка';
    else if (sales >= 5700000) title = 'Зевс';
    else if (sales >= 4700000) title = 'Юпитер';
    else if (sales >= 3800000) title = 'Император';
    else if (sales >= 3000000) title = 'Князь';
    else if (sales >= 2300000) title = 'Боярин';
    else if (sales >= 1700000) title = 'Епископ';
    else if (sales >= 1200000) title = 'Чародей';
    else if (sales >= 800000) title = 'Кондотьер';
    else if (sales >= 500000) title = 'Зодчий';
    else if (sales >= 300000) title = 'Купец';

    return title; // Возвращаем только титул
};

// Получение случайного элемента из массива
const getRandomElement = (array: string[]): string => {
    return array[Math.floor(Math.random() * array.length)];
};

// Получение случайного прилагательного
const getRandomAdjective = (title: string): string => {
    const adjectives = titlesWithAdjectives[title];
    const currentTime = new Date().getTime();
    const storedData = localStorage.getItem(`adjective_${title}`);

    if (storedData) {
        const { adjective, timestamp } = JSON.parse(storedData);
        if (currentTime - timestamp < 24 * 60 * 60 * 1000) {
            return adjective; // Возврат сохраненного прилагательного, если прошло меньше 24 часов
        }
    }

    const randomAdjective = getRandomElement(adjectives);
    localStorage.setItem(`adjective_${title}`, JSON.stringify({ adjective: randomAdjective, timestamp: currentTime }));
    return randomAdjective; // Возврат нового прилагательного
};

// // Получение случайного изображения
const getRandomImage = (title: string, adjective: string): string => {
    const images = imagesByTitleAndAdjective[title]?.[adjective];

    // Проверяем наличие изображений
    // if (!images || images.length === 0) {
    //     console.error(`No images found for title ${title} and adjective ${adjective}`);
    //     return require('./img/lord/img12-14.jpg'); // Возвращаем изображение-заглушку
    // }

    const currentTime = new Date().getTime();
    const storageKey = `image_${title}_${adjective}`;
    const storedData = localStorage.getItem(storageKey);

    // Проверяем, есть ли сохраненные данные
    if (storedData) {
        const { image, timestamp } = JSON.parse(storedData);
        // Если прошло меньше 24 часов, возвращаем сохраненное изображение
        if (currentTime - timestamp < 24 * 60 * 60 * 1000) {
            return image;
        }
    }

    // Выбираем новое случайное изображение
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Сохраняем новое изображение и временную метку в localStorage
    localStorage.setItem(storageKey, JSON.stringify({ image: randomImage, timestamp: currentTime }));

    return randomImage;
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
].map(manager => {
    const title = getTitleBySales(manager.sales);
    const randomAdjective = getRandomAdjective(title);
    const randomImage = getRandomImage(title, randomAdjective);
    return {
        ...manager,
        title,
        fullTitle: `${randomAdjective} ${title}`,
        image: randomImage,
    };
});
