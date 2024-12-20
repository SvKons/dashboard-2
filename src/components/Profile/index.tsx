import { useMemo, useState } from 'react';
import { IMotivationalPhrase, motivationalPhrases } from './utils';
import './Profile.scss';
import { Edit } from '@mui/icons-material';
export interface IProfile {
    photo: string;
    name: string;
    position: string;
    achievements: string[];
    tasks: string[];
}

export interface IProfileProps {
    profileData: IProfile;
    onNameChange?: (newName: string) => void;
}

const Profile = ({ profileData, onNameChange }: IProfileProps) => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [name, setName] = useState<string>(profileData.name);

    const randomPhrase: IMotivationalPhrase = useMemo(() => {
        return motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    }, []);

    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleNameBlur = () => {
        setIsEditingName(false);
        if (onNameChange) {
            onNameChange(name);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleNameBlur();
        }
    };

    return (
        <div className="profile">
            <div className="profile__img-wrap">
                <img src={profileData.photo} alt={profileData.name} className="profile__img" width={200} height={200} />
            </div>

            <div className="profile__content">
                <div className="profile__top-info">
                    <div className="profile__name-wrap">
                        {isEditingName ? (
                            <input value={name} onChange={handleNameChange} onBlur={handleNameBlur} onKeyDown={handleKeyDown} autoFocus className="profile__name-edit" />
                        ) : (
                            <>
                                <h2 className="profile__name">{name}</h2>
                                <Edit className="profile__edit-icon" onClick={handleEditName} sx={{ cursor: 'pointer', marginLeft: '10px' }} />
                            </>
                        )}
                    </div>
                    <span className="profile__position">{profileData.position}</span>
                </div>

                <p className="profile__quote-block">
                    <span className="profile__quote">“{randomPhrase.quote}”</span> — <span className="profile__author">{randomPhrase.author}</span>
                </p>
            </div>
        </div>
    );
};
export default Profile;
