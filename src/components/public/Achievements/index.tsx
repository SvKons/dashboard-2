import { UserRole } from '../../../types/types';
import { mockManagers } from '../ManagersTable/utils';
import ManagersTable from '../ManagersTable';

interface IAchievementProps {
    userRole: UserRole;
}

const Achievements = ({ userRole }: IAchievementProps) => {
    return (
        <div>
            <h1 className="title">Достижения сотрудников</h1>
            <ManagersTable managers={mockManagers} userRole={userRole} />
        </div>
    );
};

export default Achievements;
