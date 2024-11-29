import { UserRole } from '../../../types/types';
import UserInfoBlock from '../../UserInfoBlock';

interface IUserProps {
    userRole: UserRole;
}

const MyProfile = ({ userRole }: IUserProps) => {
    return <UserInfoBlock userRole={userRole} />;
};

export default MyProfile;
