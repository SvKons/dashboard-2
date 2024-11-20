import { memo } from 'react';
import ManagerAchievements from '../ManagerAchievements';
import ManagerProfile from '../ManagerProfile';
import ManagerTasks from '../ManagerTasks';
import { UserRole } from '../../types/types';
import LeaderTasks from '../LeaderTasks';
import LeaderProfile from '../LeaderProfile';
import './UserInfoBlock.scss';

interface UserInfoBlockProps {
    userRole: UserRole;
}

const UserInfoBlock = memo(({ userRole }: UserInfoBlockProps) => {
    return (
        <div className="manager-block">
            {userRole === UserRole.Manager ? <ManagerProfile /> : <LeaderProfile />}
            {userRole === UserRole.Manager && <ManagerAchievements />}
            {userRole === UserRole.Manager ? <ManagerTasks /> : <LeaderTasks />}
        </div>
    );
});

export default UserInfoBlock;
