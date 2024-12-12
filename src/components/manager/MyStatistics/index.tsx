import { mockManagers } from '../../public/ManagersTable/utils';
import DailySales from '../DailySales';
import ManagersListTitle from '../ManagerListTitle';
import PercentStatsManager from '../PercentStatsManager';
import PlannedIndicators from '../PlannedIndicators';
import './MyStatistics.scss';

const MyStatistics = () => {
    const currentUser = mockManagers[0];
    const userRole = currentUser.userRole;

    return (
        <div className="stats-manager">
            <div className="stats-manager__top-block">
                <div className="stats-manager__block">
                    <DailySales />
                </div>
                <div className="stats-manager__right-blocks">
                    <div className="stats-manager__block">
                        <PercentStatsManager />
                    </div>
                    <div className="stats-manager__block">
                        <ManagersListTitle managers={[currentUser]} userRole={userRole} />
                    </div>
                </div>
            </div>
            <div className="stats-manager__table-block">
                <PlannedIndicators />
            </div>
        </div>
    );
};

export default MyStatistics;
