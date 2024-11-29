import { UserRole } from '../../types/types';
import FulfillmentEmployeesPlan from '../public/FulfillmentEmployeesPlan';

import PopularCourses from '../public/PopularCourses';
import TopManagers from '../public/TopManagers';
import TotalStatsBlock from '../public/TotalStatsBlock';
import './Dashboard.scss';

interface IDashboardProps {
    salesData: { [key: string]: number[] };
    filterOption: string;
    userRole: UserRole;
}

const Dashboard = ({ filterOption }: IDashboardProps) => {
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
        </div>
    );
};

export default Dashboard;
