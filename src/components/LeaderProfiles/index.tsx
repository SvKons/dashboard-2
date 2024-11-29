import { UserRole } from '../../types/types';
import UserInfoBlock from '../UserInfoBlock';

interface IUseLeaderProps {
    userRole: UserRole;
}

const LeaderProfile = ({ userRole }: IUseLeaderProps) => {
    return <UserInfoBlock userRole={userRole} />;
};

export default LeaderProfile;
