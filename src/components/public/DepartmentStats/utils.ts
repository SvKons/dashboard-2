export type Course = {
    mainTitle?: string;
    levelTitle?: string;
    directionTitle?: string;
    specialityTitle?: string;
    sales?: number;
    percentage?: number;
    subcategories?: Course[];
};

export type CourseData = Course[];

export const getDepartmentData = (viewType: 'total-stats' | 'direction', filterOption: string, customPeriod?: { startDate: Date | null; endDate: Date | null }): { [key: string]: number[] } | CourseData => {
    if (viewType === 'total-stats') {
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
        } else if (filterOption === 'customPeriod' && customPeriod?.startDate && customPeriod?.endDate) {
            const allData: { [key: string]: number[] } = {
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

            const startDateStr = customPeriod.startDate.toISOString().slice(0, 10);
            const endDateStr = customPeriod.endDate.toISOString().slice(0, 10);

            Object.keys(allData).forEach(date => {
                if (date >= startDateStr && date <= endDateStr) {
                    filteredDataDepartment[date] = allData[date];
                }
            });
        }
        return filteredDataDepartment;
    } else if (viewType === 'direction') {
        let filteredDataDepartment: CourseData = [];

        if (filterOption === 'prevMonth') {
            filteredDataDepartment = [
                {
                    mainTitle: 'Высшее',
                    subcategories: [
                        {
                            levelTitle: 'Бакалавриат',
                            subcategories: [
                                {
                                    directionTitle: 'Строительство',
                                    subcategories: [
                                        { specialityTitle: 'Автомобильные дороги', sales: 120000, percentage: 10 },
                                        { specialityTitle: 'Водоснабжение и водоотведение', sales: 150000, percentage: 15 },
                                        { specialityTitle: 'Городское строительство и хозяйство', sales: 80000, percentage: 15 },
                                        { specialityTitle: 'Производство строительных материатов, изделий и конструкций', sales: 1500000, percentage: 15 },
                                        { specialityTitle: 'Промышленное и гражданское строительство', sales: 900000, percentage: 15 },
                                        { specialityTitle: 'Теплоснабжение и вентиляция', sales: 1500000, percentage: 15 },
                                        { specialityTitle: 'Экспертиза и управление недвижимостью', sales: 2500000, percentage: 15 },
                                    ],
                                },
                                {
                                    directionTitle: 'Менеджмент',
                                    subcategories: [
                                        { specialityTitle: 'Антикризисное управление', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Государственная служба', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Интернет-маркетинг', sales: 1400000, percentage: 13 },
                                        { specialityTitle: 'Информационный менеджмент', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Логистика', sales: 1600000, percentage: 13 },
                                        { specialityTitle: 'Маркетинг', sales: 1700000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в гостиничном и ресторанном бизнесе', sales: 1800000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в здравоохранении', sales: 1900000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в машиностроении', sales: 2300000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в нефтегазовом комплексе', sales: 3300000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в образовании', sales: 2400000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в строительстве', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в энергетике', sales: 1799536, percentage: 13 },
                                        { specialityTitle: 'Предпринимательство', sales: 2333444, percentage: 13 },
                                        { specialityTitle: 'Спортивный менеджмент', sales: 5600700, percentage: 13 },
                                        { specialityTitle: 'Управление государственным и муниципальным сектором', sales: 4000000, percentage: 13 },
                                        { specialityTitle: 'Управление малым бизнесом', sales: 5000000, percentage: 13 },
                                        { specialityTitle: 'Управление проектами', sales: 4333999, percentage: 13 },
                                        { specialityTitle: 'Управление технологическими инновациями', sales: 4258369, percentage: 13 },
                                        { specialityTitle: 'Управление человечискими ресурсами', sales: 1478523, percentage: 13 },
                                        { specialityTitle: 'Финансовый менеджмент', sales: 3654987, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Электроэнергетика и электротехника',
                                    subcategories: [
                                        { specialityTitle: 'Электрооборудование и электрохозяйство предприятий', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Электрснабжение производственных объектов', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Электроэнергетические системы и сети', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Прикладная информатика',
                                    subcategories: [
                                        { specialityTitle: 'Электрооборудование и электрохозяйство предприятий', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Электрснабжение производственных объектов', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Электроэнергетические системы и сети', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Экономика',
                                    subcategories: [
                                        { specialityTitle: 'Банковское дело', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Бухгалтерский учет, анализ и аудит', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Мировая экономика', sales: 1400000, percentage: 13 },
                                        { specialityTitle: 'Налоги и налогообложение', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Финансы и кредит', sales: 2300000, percentage: 13 },
                                        { specialityTitle: 'Экономика горной промышленности', sales: 4300000, percentage: 13 },
                                        { specialityTitle: 'Экономика предприятий и организаций', sales: 3140000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Техносферная безопасность',
                                    subcategories: [
                                        { specialityTitle: 'Безопасность технологических процессов и производств', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Безопасность труда', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Пожарная безопасность', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Информационные системы и технологииь',
                                    subcategories: [
                                        { specialityTitle: 'Разработка и тестирование ПО', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Разработка, сопровождение и обеспечение безопасности информационных систем', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Технологии ИИ', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Теплоэнергетика и теплотехника',
                                    subcategories: [
                                        { specialityTitle: 'Автоматизация технологических процессов и производств в теплоэнергетике и теплотехнике', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Промышленная теплоэнергетика', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Управление в технических системах',
                                    subcategories: [
                                        { specialityTitle: 'Интеллектуальные сведства обработки информации', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Качество и управление в технических системах', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Комплексные системы безопасности', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Робототехника и ИИ', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Системы и средства автоматизации технологических процессов', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Педагогическое образование',
                                    subcategories: [
                                        { specialityTitle: 'Информатика и информационные технологии в образовании', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Педагогическое проектирование образовательного контента', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Психология и педагогика начального образования', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Экономическая безопасность',
                                    subcategories: [{ specialityTitle: 'Экономико-правовое обеспечение экономической безопасности', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Жилищное хозяйство и коммунальная инфраструктура',
                                    subcategories: [{ specialityTitle: 'Организация деятельности в жилищно-коммунальном комплексе', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Психология',
                                    subcategories: [{ specialityTitle: 'Практическая психология', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Технологические машины и оборудование',
                                    subcategories: [{ specialityTitle: 'Технологические машины и оборудование в промышленности', sales: 1200000, percentage: 12 }],
                                },
                            ],
                        },
                        {
                            levelTitle: 'Магистратура',
                            subcategories: [
                                {
                                    directionTitle: 'Строительство',
                                    subcategories: [{ specialityTitle: 'Информационное моделирование и строительство', sales: 210000, percentage: 21 }],
                                },
                                {
                                    directionTitle: 'Менеджмент',
                                    subcategories: [{ specialityTitle: 'Стратегический и финансовый менеджмент в современных организациях', sales: 260000, percentage: 26 }],
                                },
                                {
                                    directionTitle: 'Прикладная информатика',
                                    subcategories: [{ specialityTitle: 'Интеллектуальные встраиваемые системы', sales: 240000, percentage: 24 }],
                                },
                            ],
                        },
                    ],
                },
                {
                    mainTitle: 'Колледж',
                    subcategories: [
                        {
                            levelTitle: 'Специальности',
                            subcategories: [
                                {
                                    directionTitle: '',
                                    subcategories: [
                                        { specialityTitle: 'Оператор диспетчерской (производственно-диспетчерской) службы', sales: 310000, percentage: 31 },
                                        { specialityTitle: 'Информационные системы и программирование', sales: 320000, percentage: 32 },
                                        { specialityTitle: 'Строительство и эксплутация зданий и сооружений', sales: 450000, percentage: 32 },
                                        { specialityTitle: 'Экономика и бухгалтерский учет (по отраслям)', sales: 320000, percentage: 32 },
                                        { specialityTitle: 'Монтаж, наладка и эксплутация электрооборудования промышленных и гражданских зданий', sales: 890000, percentage: 32 },
                                        { specialityTitle: 'Торговое дело', sales: 220000, percentage: 32 },
                                        { specialityTitle: 'Банковское дело', sales: 920000, percentage: 32 },
                                        { specialityTitle: 'Оператор информационных систем и ресурсов', sales: 360000, percentage: 32 },
                                        { specialityTitle: 'Чертежник-конструктор', sales: 890000, percentage: 32 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    mainTitle: 'Курсы',
                    subcategories: [
                        {
                            levelTitle: 'Специальности',
                            subcategories: [
                                {
                                    directionTitle: '',
                                    subcategories: [
                                        { specialityTitle: 'Техника скорочтения (повышение квалификации)', sales: 410000, percentage: 41 },
                                        { specialityTitle: 'Графический дизайнер (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Семейная психологий (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Нейросети для карьера (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Бизнес-аналитик (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'AI product manager (проф.переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Excel для эффективной работы (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Информационные технологии в образовании', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление проектами в бизнесе (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Водоснабжение и водоотведение (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Основы SQL (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Городское строительство и хозяйство (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Безопасность строительства (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Эксплутация зданий и сооружений (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Ведение бухгалтерского учета в организации (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление в строительной организации ( проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Инженер производственно-технического отдела (ПТО) (профю переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Промышленное и гражданское строительство (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Эксплутация зданий и сооружений (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Энергетический менеджмент (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Безопасность строительства (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Сметное дело в строительстве (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Экономика предприятий и организаций (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Педагогическое образование (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление персоналом (проф. переподготовка)', sales: 420000, percentage: 42 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ];
        } else if (filterOption === 'currentMonth') {
            filteredDataDepartment = [
                {
                    mainTitle: 'Высшее',
                    subcategories: [
                        {
                            levelTitle: 'Бакалавриат',
                            subcategories: [
                                {
                                    directionTitle: 'Строительство',
                                    subcategories: [
                                        { specialityTitle: 'Автомобильные дороги', sales: 100000, percentage: 10 },
                                        { specialityTitle: 'Водоснабжение и водоотведение', sales: 150000, percentage: 15 },
                                        { specialityTitle: 'Городское строительство и хозяйство', sales: 80000, percentage: 15 },
                                        { specialityTitle: 'Производство строительных материатов, изделий и конструкций', sales: 1500000, percentage: 15 },
                                        { specialityTitle: 'Промышленное и гражданское строительство', sales: 900000, percentage: 15 },
                                        { specialityTitle: 'Теплоснабжение и вентиляция', sales: 1500000, percentage: 15 },
                                        { specialityTitle: 'Экспертиза и управление недвижимостью', sales: 2500000, percentage: 15 },
                                    ],
                                },
                                {
                                    directionTitle: 'Менеджмент',
                                    subcategories: [
                                        { specialityTitle: 'Антикризисное управление', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Государственная служба', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Интернет-маркетинг', sales: 1400000, percentage: 13 },
                                        { specialityTitle: 'Информационный менеджмент', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Логистика', sales: 1600000, percentage: 13 },
                                        { specialityTitle: 'Маркетинг', sales: 1700000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в гостиничном и ресторанном бизнесе', sales: 1800000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в здравоохранении', sales: 1900000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в машиностроении', sales: 2300000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в нефтегазовом комплексе', sales: 3300000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в образовании', sales: 2400000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в строительстве', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в энергетике', sales: 1799536, percentage: 13 },
                                        { specialityTitle: 'Предпринимательство', sales: 2333444, percentage: 13 },
                                        { specialityTitle: 'Спортивный менеджмент', sales: 5600700, percentage: 13 },
                                        { specialityTitle: 'Управление государственным и муниципальным сектором', sales: 4000000, percentage: 13 },
                                        { specialityTitle: 'Управление малым бизнесом', sales: 5000000, percentage: 13 },
                                        { specialityTitle: 'Управление проектами', sales: 4333999, percentage: 13 },
                                        { specialityTitle: 'Управление технологическими инновациями', sales: 4258369, percentage: 13 },
                                        { specialityTitle: 'Управление человечискими ресурсами', sales: 1478523, percentage: 13 },
                                        { specialityTitle: 'Финансовый менеджмент', sales: 3654987, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Электроэнергетика и электротехника',
                                    subcategories: [
                                        { specialityTitle: 'Электрооборудование и электрохозяйство предприятий', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Электрснабжение производственных объектов', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Электроэнергетические системы и сети', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Прикладная информатика',
                                    subcategories: [
                                        { specialityTitle: 'Электрооборудование и электрохозяйство предприятий', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Электрснабжение производственных объектов', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Электроэнергетические системы и сети', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Экономика',
                                    subcategories: [
                                        { specialityTitle: 'Банковское дело', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Бухгалтерский учет, анализ и аудит', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Мировая экономика', sales: 1400000, percentage: 13 },
                                        { specialityTitle: 'Налоги и налогообложение', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Финансы и кредит', sales: 2300000, percentage: 13 },
                                        { specialityTitle: 'Экономика горной промышленности', sales: 4300000, percentage: 13 },
                                        { specialityTitle: 'Экономика предприятий и организаций', sales: 3140000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Техносферная безопасность',
                                    subcategories: [
                                        { specialityTitle: 'Безопасность технологических процессов и производств', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Безопасность труда', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Пожарная безопасность', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Информационные системы и технологииь',
                                    subcategories: [
                                        { specialityTitle: 'Разработка и тестирование ПО', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Разработка, сопровождение и обеспечение безопасности информационных систем', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Технологии ИИ', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Теплоэнергетика и теплотехника',
                                    subcategories: [
                                        { specialityTitle: 'Автоматизация технологических процессов и производств в теплоэнергетике и теплотехнике', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Промышленная теплоэнергетика', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Управление в технических системах',
                                    subcategories: [
                                        { specialityTitle: 'Интеллектуальные сведства обработки информации', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Качество и управление в технических системах', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Комплексные системы безопасности', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Робототехника и ИИ', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Системы и средства автоматизации технологических процессов', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Педагогическое образование',
                                    subcategories: [
                                        { specialityTitle: 'Информатика и информационные технологии в образовании', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Педагогическое проектирование образовательного контента', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Психология и педагогика начального образования', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Экономическая безопасность',
                                    subcategories: [{ specialityTitle: 'Экономико-правовое обеспечение экономической безопасности', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Жилищное хозяйство и коммунальная инфраструктура',
                                    subcategories: [{ specialityTitle: 'Организация деятельности в жилищно-коммунальном комплексе', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Психология',
                                    subcategories: [{ specialityTitle: 'Практическая психология', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Технологические машины и оборудование',
                                    subcategories: [{ specialityTitle: 'Технологические машины и оборудование в промышленности', sales: 1200000, percentage: 12 }],
                                },
                            ],
                        },
                        {
                            levelTitle: 'Магистратура',
                            subcategories: [
                                {
                                    directionTitle: 'Строительство',
                                    subcategories: [{ specialityTitle: 'Информационное моделирование и строительство', sales: 210000, percentage: 21 }],
                                },
                                {
                                    directionTitle: 'Менеджмент',
                                    subcategories: [{ specialityTitle: 'Стратегический и финансовый менеджмент в современных организациях', sales: 260000, percentage: 26 }],
                                },
                                {
                                    directionTitle: 'Прикладная информатика',
                                    subcategories: [{ specialityTitle: 'Интеллектуальные встраиваемые системы', sales: 240000, percentage: 24 }],
                                },
                            ],
                        },
                    ],
                },
                {
                    mainTitle: 'Колледж',
                    subcategories: [
                        {
                            levelTitle: 'Специальности',
                            subcategories: [
                                {
                                    directionTitle: '',
                                    subcategories: [
                                        { specialityTitle: 'Оператор диспетчерской (производственно-диспетчерской) службы', sales: 310000, percentage: 31 },
                                        { specialityTitle: 'Информационные системы и программирование', sales: 320000, percentage: 32 },
                                        { specialityTitle: 'Строительство и эксплутация зданий и сооружений', sales: 450000, percentage: 32 },
                                        { specialityTitle: 'Экономика и бухгалтерский учет (по отраслям)', sales: 320000, percentage: 32 },
                                        { specialityTitle: 'Монтаж, наладка и эксплутация электрооборудования промышленных и гражданских зданий', sales: 890000, percentage: 32 },
                                        { specialityTitle: 'Торговое дело', sales: 220000, percentage: 32 },
                                        { specialityTitle: 'Банковское дело', sales: 920000, percentage: 32 },
                                        { specialityTitle: 'Оператор информационных систем и ресурсов', sales: 360000, percentage: 32 },
                                        { specialityTitle: 'Чертежник-конструктор', sales: 890000, percentage: 32 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    mainTitle: 'Курсы',
                    subcategories: [
                        {
                            levelTitle: 'Специальности',
                            subcategories: [
                                {
                                    directionTitle: '',
                                    subcategories: [
                                        { specialityTitle: 'Техника скорочтения (повышение квалификации)', sales: 410000, percentage: 41 },
                                        { specialityTitle: 'Графический дизайнер (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Семейная психологий (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Нейросети для карьера (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Бизнес-аналитик (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'AI product manager (проф.переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Excel для эффективной работы (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Информационные технологии в образовании', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление проектами в бизнесе (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Водоснабжение и водоотведение (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Основы SQL (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Городское строительство и хозяйство (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Безопасность строительства (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Эксплутация зданий и сооружений (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Ведение бухгалтерского учета в организации (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление в строительной организации ( проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Инженер производственно-технического отдела (ПТО) (профю переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Промышленное и гражданское строительство (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Эксплутация зданий и сооружений (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Энергетический менеджмент (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Безопасность строительства (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Сметное дело в строительстве (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Экономика предприятий и организаций (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Педагогическое образование (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление персоналом (проф. переподготовка)', sales: 420000, percentage: 42 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ];
        } else if (filterOption === 'nextMonth') {
            filteredDataDepartment = [
                {
                    mainTitle: 'Высшее',
                    subcategories: [
                        {
                            levelTitle: 'Бакалавриат',
                            subcategories: [
                                {
                                    directionTitle: 'Строительство',
                                    subcategories: [
                                        { specialityTitle: 'Автомобильные дороги', sales: 130000, percentage: 10 },
                                        { specialityTitle: 'Водоснабжение и водоотведение', sales: 150000, percentage: 15 },
                                        { specialityTitle: 'Городское строительство и хозяйство', sales: 80000, percentage: 15 },
                                        { specialityTitle: 'Производство строительных материатов, изделий и конструкций', sales: 1500000, percentage: 15 },
                                        { specialityTitle: 'Промышленное и гражданское строительство', sales: 900000, percentage: 15 },
                                        { specialityTitle: 'Теплоснабжение и вентиляция', sales: 1500000, percentage: 15 },
                                        { specialityTitle: 'Экспертиза и управление недвижимостью', sales: 2500000, percentage: 15 },
                                    ],
                                },
                                {
                                    directionTitle: 'Менеджмент',
                                    subcategories: [
                                        { specialityTitle: 'Антикризисное управление', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Государственная служба', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Интернет-маркетинг', sales: 1400000, percentage: 13 },
                                        { specialityTitle: 'Информационный менеджмент', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Логистика', sales: 1600000, percentage: 13 },
                                        { specialityTitle: 'Маркетинг', sales: 1700000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в гостиничном и ресторанном бизнесе', sales: 1800000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в здравоохранении', sales: 1900000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в машиностроении', sales: 2300000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в нефтегазовом комплексе', sales: 3300000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в образовании', sales: 2400000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в строительстве', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Менеджмент в энергетике', sales: 1799536, percentage: 13 },
                                        { specialityTitle: 'Предпринимательство', sales: 2333444, percentage: 13 },
                                        { specialityTitle: 'Спортивный менеджмент', sales: 5600700, percentage: 13 },
                                        { specialityTitle: 'Управление государственным и муниципальным сектором', sales: 4000000, percentage: 13 },
                                        { specialityTitle: 'Управление малым бизнесом', sales: 5000000, percentage: 13 },
                                        { specialityTitle: 'Управление проектами', sales: 4333999, percentage: 13 },
                                        { specialityTitle: 'Управление технологическими инновациями', sales: 4258369, percentage: 13 },
                                        { specialityTitle: 'Управление человечискими ресурсами', sales: 1478523, percentage: 13 },
                                        { specialityTitle: 'Финансовый менеджмент', sales: 3654987, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Электроэнергетика и электротехника',
                                    subcategories: [
                                        { specialityTitle: 'Электрооборудование и электрохозяйство предприятий', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Электрснабжение производственных объектов', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Электроэнергетические системы и сети', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Прикладная информатика',
                                    subcategories: [
                                        { specialityTitle: 'Электрооборудование и электрохозяйство предприятий', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Электрснабжение производственных объектов', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Электроэнергетические системы и сети', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Экономика',
                                    subcategories: [
                                        { specialityTitle: 'Банковское дело', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Бухгалтерский учет, анализ и аудит', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Мировая экономика', sales: 1400000, percentage: 13 },
                                        { specialityTitle: 'Налоги и налогообложение', sales: 1500000, percentage: 13 },
                                        { specialityTitle: 'Финансы и кредит', sales: 2300000, percentage: 13 },
                                        { specialityTitle: 'Экономика горной промышленности', sales: 4300000, percentage: 13 },
                                        { specialityTitle: 'Экономика предприятий и организаций', sales: 3140000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Техносферная безопасность',
                                    subcategories: [
                                        { specialityTitle: 'Безопасность технологических процессов и производств', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Безопасность труда', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Пожарная безопасность', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Информационные системы и технологииь',
                                    subcategories: [
                                        { specialityTitle: 'Разработка и тестирование ПО', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Разработка, сопровождение и обеспечение безопасности информационных систем', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Технологии ИИ', sales: 1400000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Теплоэнергетика и теплотехника',
                                    subcategories: [
                                        { specialityTitle: 'Автоматизация технологических процессов и производств в теплоэнергетике и теплотехнике', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Промышленная теплоэнергетика', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Управление в технических системах',
                                    subcategories: [
                                        { specialityTitle: 'Интеллектуальные сведства обработки информации', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Качество и управление в технических системах', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Комплексные системы безопасности', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Робототехника и ИИ', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Системы и средства автоматизации технологических процессов', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Педагогическое образование',
                                    subcategories: [
                                        { specialityTitle: 'Информатика и информационные технологии в образовании', sales: 1200000, percentage: 12 },
                                        { specialityTitle: 'Педагогическое проектирование образовательного контента', sales: 1300000, percentage: 13 },
                                        { specialityTitle: 'Психология и педагогика начального образования', sales: 1300000, percentage: 13 },
                                    ],
                                },
                                {
                                    directionTitle: 'Экономическая безопасность',
                                    subcategories: [{ specialityTitle: 'Экономико-правовое обеспечение экономической безопасности', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Жилищное хозяйство и коммунальная инфраструктура',
                                    subcategories: [{ specialityTitle: 'Организация деятельности в жилищно-коммунальном комплексе', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Психология',
                                    subcategories: [{ specialityTitle: 'Практическая психология', sales: 1200000, percentage: 12 }],
                                },
                                {
                                    directionTitle: 'Технологические машины и оборудование',
                                    subcategories: [{ specialityTitle: 'Технологические машины и оборудование в промышленности', sales: 1200000, percentage: 12 }],
                                },
                            ],
                        },
                        {
                            levelTitle: 'Магистратура',
                            subcategories: [
                                {
                                    directionTitle: 'Строительство',
                                    subcategories: [{ specialityTitle: 'Информационное моделирование и строительство', sales: 210000, percentage: 21 }],
                                },
                                {
                                    directionTitle: 'Менеджмент',
                                    subcategories: [{ specialityTitle: 'Стратегический и финансовый менеджмент в современных организациях', sales: 260000, percentage: 26 }],
                                },
                                {
                                    directionTitle: 'Прикладная информатика',
                                    subcategories: [{ specialityTitle: 'Интеллектуальные встраиваемые системы', sales: 240000, percentage: 24 }],
                                },
                            ],
                        },
                    ],
                },
                {
                    mainTitle: 'Колледж',
                    subcategories: [
                        {
                            levelTitle: 'Специальности',
                            subcategories: [
                                {
                                    directionTitle: '',
                                    subcategories: [
                                        { specialityTitle: 'Оператор диспетчерской (производственно-диспетчерской) службы', sales: 310000, percentage: 31 },
                                        { specialityTitle: 'Информационные системы и программирование', sales: 320000, percentage: 32 },
                                        { specialityTitle: 'Строительство и эксплутация зданий и сооружений', sales: 450000, percentage: 32 },
                                        { specialityTitle: 'Экономика и бухгалтерский учет (по отраслям)', sales: 320000, percentage: 32 },
                                        { specialityTitle: 'Монтаж, наладка и эксплутация электрооборудования промышленных и гражданских зданий', sales: 890000, percentage: 32 },
                                        { specialityTitle: 'Торговое дело', sales: 220000, percentage: 32 },
                                        { specialityTitle: 'Банковское дело', sales: 920000, percentage: 32 },
                                        { specialityTitle: 'Оператор информационных систем и ресурсов', sales: 360000, percentage: 32 },
                                        { specialityTitle: 'Чертежник-конструктор', sales: 890000, percentage: 32 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    mainTitle: 'Курсы',
                    subcategories: [
                        {
                            levelTitle: 'Специальности',
                            subcategories: [
                                {
                                    directionTitle: '',
                                    subcategories: [
                                        { specialityTitle: 'Техника скорочтения (повышение квалификации)', sales: 410000, percentage: 41 },
                                        { specialityTitle: 'Графический дизайнер (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Семейная психологий (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Нейросети для карьера (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Бизнес-аналитик (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'AI product manager (проф.переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Excel для эффективной работы (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Информационные технологии в образовании', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление проектами в бизнесе (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Водоснабжение и водоотведение (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Основы SQL (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Городское строительство и хозяйство (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Безопасность строительства (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Эксплутация зданий и сооружений (повышение квалификации)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Ведение бухгалтерского учета в организации (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление в строительной организации ( проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Инженер производственно-технического отдела (ПТО) (профю переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Промышленное и гражданское строительство (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Эксплутация зданий и сооружений (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Энергетический менеджмент (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Безопасность строительства (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Сметное дело в строительстве (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Экономика предприятий и организаций (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Педагогическое образование (проф. переподготовка)', sales: 420000, percentage: 42 },
                                        { specialityTitle: 'Управление персоналом (проф. переподготовка)', sales: 420000, percentage: 42 },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ];
        }

        return filteredDataDepartment;
    }
    return {};
};

// Моковые данные для расчетов метрик
export const mockMetricsData = {
    prevMonth: {
        totalPayments: 15000,
        yearlyPayments: 5000,
        totalTransactions: 100,
        leads: 1000,
    },
    currentMonth: {
        totalPayments: 20000,
        yearlyPayments: 6000,
        totalTransactions: 150,
        leads: 1200,
    },
    nextMonth: {
        totalPayments: 25000,
        yearlyPayments: 7000,
        totalTransactions: 200,
        leads: 1500,
    },
};
