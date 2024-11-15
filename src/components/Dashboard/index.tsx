import FulfillmentEmployeesPlan from '../FulfillmentEmployeesPlan';
import ManagerInfoBlock from '../ManagerInfoBlock';
import PopularCourses from '../PopularCourses';
import TopManagers from '../TopManagers';
import TotalStatsBlock from '../TotalStatsBlock';
import './Dashboard.scss';

interface DashboardProps {
    salesData: { [key: string]: number[] }; // Интерфейс для пропсов Dashboard
    filterOption: string; // Добавим filterOption
}

const Dashboard = ({ salesData, filterOption }: DashboardProps) => {
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

            <ManagerInfoBlock />
        </div>
    );
};

export default Dashboard;
