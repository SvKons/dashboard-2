import { UserRole } from '../../../types/types';
import { mockManagers } from '../../public/ManagersTable/utils';
import ManagersTable from '../../public/ManagersTable';
import './AchievementManagement.scss';

interface IAchievementManagementProps {
    userRole: UserRole;
}

const AchievementManagement = ({ userRole }: IAchievementManagementProps) => {
    return (
        <>
            <h1 className="title">Управление достижениями</h1>
            <ManagersTable managers={mockManagers} userRole={userRole} />
        </>
    );
};

export default AchievementManagement;
