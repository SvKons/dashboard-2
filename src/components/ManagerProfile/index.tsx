import { useEffect, useState } from 'react';
import './ManagerProfile.scss';
import { IMotivationalPhrase, motivationalPhrases } from './utils';

export interface IProfile {
    photo: string;
    name: string;
    position: string;
    achievements: string[];
    tasks: string[];
}

const mockProfileData: IProfile = {
    photo: 'https://picsum.photos/209/311',
    name: 'Мария Иванов',
    position: 'Менеджер',
    achievements: [],
    tasks: [],
};

const ManagerProfile = () => {
    const [profileData, setProfileData] = useState<IProfile | null>(null);

    const randomPhrase: IMotivationalPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

    useEffect(() => {
        // Код для получения данных с бэкда
        // const fetchProfileData = async () => {
        //     const response = await fetch('https://api.example');
        //     const data: IProfile = await response.json();
        //     setProfileData(data);
        // };

        // fetchProfileData();

        // Моковые данные
        setProfileData(mockProfileData);
    }, []);

    return (
        <div className="manager-profile">
            <div className="manager-profile__img-wrap">
                <img src={profileData?.photo} alt={profileData?.name} className="manager-profile__img" width={200} height={200} />
            </div>

            <div className="manager-profile__content">
                <div className="manager-profile__top-info">
                    <h2 className="manager-profile__name">{profileData?.name}</h2>
                    <span className="manager-profile__position">{profileData?.position}</span>
                </div>

                <p className="manager-profile__quote-block">
                    <span className="manager-profile__quote">“{randomPhrase.quote}”</span> — <span className="manager-profile__author">{randomPhrase.author}</span>
                </p>
            </div>
        </div>
    );
};
export default ManagerProfile;
