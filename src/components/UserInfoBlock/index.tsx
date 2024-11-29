import { memo } from 'react';
import ManagerAchievements from '../manager/ManagerAchievements';

import ManagerTasks from '../manager/ManagerTasks';
import { UserRole } from '../../types/types';

import './UserInfoBlock.scss';
import ManagerProfile from '../manager/ManagerProfile';
import LeaderTasks from '../leader/LeaderTasks';
import LeaderProfileInfo from '../leader/LeaderProfileInfo';

interface IUserInfoBlockProps {
    userRole: UserRole;
}

const UserInfoBlock = memo(({ userRole }: IUserInfoBlockProps) => {
    return (
        <div className="manager-info">
            <div className="manager-info__manager-block">
                {userRole === UserRole.Manager ? <ManagerProfile /> : <LeaderProfileInfo />}
                {userRole === UserRole.Manager && <ManagerAchievements />}
            </div>

            {userRole === UserRole.Manager ? <ManagerTasks /> : <LeaderTasks />}
        </div>
    );
});

export default UserInfoBlock;
