import { UserRole } from '../../types/types';
import FulfillmentEmployeesPlan from '../FulfillmentEmployeesPlan';

import PopularCourses from '../PopularCourses';
import TopManagers from '../TopManagers';
import TotalStatsBlock from '../TotalStatsBlock';
import UserInfoBlock from '../UserInfoBlock';
import './Dashboard.scss';

interface DashboardProps {
    salesData: { [key: string]: number[] }; // Интерфейс для пропсов Dashboard
    filterOption: string; // Добавим filterOption
    userRole: UserRole;
}

const Dashboard = ({ userRole, salesData, filterOption }: DashboardProps) => {
    return (
        <div className="main-block">
            <div className="main-block__right">
                <TotalStatsBlock filterOption={filterOption} />
                <div className="main-block__content">
                    <TopManagers />
                    <PopularCourses />
                </div>
                <FulfillmentEmployeesPlan />
            </div>

            {(userRole === UserRole.Manager || userRole === UserRole.Leader) && <UserInfoBlock userRole={userRole} />}
        </div>
    );
};

export default Dashboard;
