import { useEffect, useState } from 'react';
import { IMotivationalPhrase, motivationalPhrases } from './utils';
import './Profile.scss';

export interface IProfile {
    photo: string;
    name: string;
    position: string;
    achievements: string[];
    tasks: string[];
}

export interface ProfileProps {
    profileData: IProfile;
}

const Profile = ({ profileData }: ProfileProps) => {
    const [data, setData] = useState<IProfile | null>(null);
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
        setData(profileData);
    }, [profileData]);

    return (
        <div className="profile">
            <div className="profile__img-wrap">
                <img src={data?.photo} alt={data?.name} className="profile__img" width={200} height={200} />
            </div>

            <div className="profile__content">
                <div className="profile__top-info">
                    <h2 className="profile__name">{data?.name}</h2>
                    <span className="profile__position">{data?.position}</span>
                </div>

                <p className="profile__quote-block">
                    <span className="profile__quote">“{randomPhrase.quote}”</span> — <span className="profile__author">{randomPhrase.author}</span>
                </p>
            </div>
        </div>
    );
};

export default Profile;
