import Profile, { IProfile } from '../../Profile';

const mockProfileData: IProfile = {
    photo: 'https://picsum.photos/209/311',
    name: 'Иван Петров',
    position: 'Руководитель',
    achievements: [],
    tasks: [],
};

const LeaderProfile = () => {
    return <Profile profileData={mockProfileData} />;
};

export default LeaderProfile;
