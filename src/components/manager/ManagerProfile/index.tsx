import Profile, { IProfile } from '../../Profile';

const mockProfileData: IProfile = {
    photo: 'https://picsum.photos/209/311',
    name: 'Иванова Мария Ивановна',
    position: 'Менеджер',
    achievements: [],
    tasks: [],
};

const ManagerProfile = () => {
    return <Profile profileData={mockProfileData} />;
};

export default ManagerProfile;
