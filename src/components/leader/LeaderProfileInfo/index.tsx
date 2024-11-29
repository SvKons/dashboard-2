import Profile, { IProfile } from '../../Profile';

const mockProfileData: IProfile = {
    photo: 'https://picsum.photos/209/311',
    name: 'Сидоров Иван Петрович',
    position: 'Руководитель',
    achievements: [],
    tasks: [],
};

const LeaderProfileInfo = () => {
    return <Profile profileData={mockProfileData} />;
};

export default LeaderProfileInfo;
