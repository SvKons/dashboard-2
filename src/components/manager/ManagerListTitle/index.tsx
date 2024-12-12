import { IManagerTitle, UserRole } from '../../../types/types';
import ManagerCardTitle from '../../public/ManagersTable';
import './ManagerListTitle.scss';

interface ManagersListProps {
    managers: IManagerTitle[];
    userRole: UserRole;
}

const ManagersListTitle = ({ managers, userRole }: ManagersListProps) => (
    <div className="managers-table">
        {managers.map(manager => (
            <ManagerCardTitle key={manager.id} managers={[manager]} userRole={userRole} />
        ))}
    </div>
);

export default ManagersListTitle;
