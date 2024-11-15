import { memo } from 'react';
import ManagerAchievements from '../ManagerAchievements';
import ManagerProfile from '../ManagerProfile';
import ManagerTasks from '../ManagerTasks';
import './ManagerBlock.scss';

const ManagerInfoBlock = memo(() => {
    return (
        <div className="manager-block">
            <ManagerProfile />
            <ManagerAchievements />
            <ManagerTasks />
        </div>
    );
});

export default ManagerInfoBlock;
