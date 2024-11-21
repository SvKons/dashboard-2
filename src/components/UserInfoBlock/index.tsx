import { memo } from 'react';
import ManagerAchievements from '../manager/ManagerAchievements';

import ManagerTasks from '../manager/ManagerTasks';
import { UserRole } from '../../types/types';

import './UserInfoBlock.scss';
import ManagerProfile from '../manager/ManagerProfile';
import LeaderProfile from '../leader/LeaderProfile';
import LeaderTasks from '../leader/LeaderTasks';

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
