import { useEffect, useState } from 'react';
import './ManagerAchievements.scss';

export interface IManagerAchievements {
    id: number;
    imageUrl: string;
    description: string;
}

const mockAchievements: IManagerAchievements[] = [
    {
        id: 1,
        imageUrl: 'https://picsum.photos/200/300',
        description: 'Сертификат лучшего менеджера 2022',
    },
    {
        id: 2,
        imageUrl: 'https://picsum.photos/200/301',
        description: 'Успешное завершение 10 проектов',
    },
    {
        id: 3,
        imageUrl: 'https://picsum.photos/210/302',
        description: 'Повышение команды на 20%',
    },
    {
        id: 4,
        imageUrl: 'https://picsum.photos/250/310',
        description: 'Награда за лучший проект 2021',
    },
    {
        id: 5,
        imageUrl: 'https://picsum.photos/205/305',
        description: 'Сертификат по управлению Agile',
    },
    {
        id: 6,
        imageUrl: 'https://picsum.photos/200/311',
        description: 'Публикация статьи в специализированном журнале',
    },
    {
        id: 7,
        imageUrl: 'https://picsum.photos/200/323',
        description: 'Участие в конференции по менеджменту',
    },
];

const ManagerAchievements = () => {
    const [achievements, setAchievements] = useState<IManagerAchievements[]>([]);

    useEffect(() => {
        // Код для получения данных с бэка
        // const fetchAchievements = async () => {
        //     const response = await fetch('https://api.example');
        //     const data: IManagerAchievements[] = await response.json();
        //     setAchievements(data);
        // };

        // fetchAchievements();

        // Моковые данные
        setAchievements(mockAchievements);
    }, []);

    return (
        <div className="manager-achievements">
            <h3 className="manager-achievements__title">Достижения</h3>
            <div className="manager-achievements__list">
                {achievements.slice(-3).map(({ id, imageUrl, description }) => (
                    <div className="manager-achievements__item" key={id}>
                        <img src={imageUrl} alt={description} title={description} className="manager-achievements__img" width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerAchievements;
