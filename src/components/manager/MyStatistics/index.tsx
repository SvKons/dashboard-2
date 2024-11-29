import DailySales from '../DailySales';
import PercentStatsManager from '../PercentStatsManager';
import PlannedIndicators from '../PlannedIndicators';
import './MyStatistics.scss';

const MyStatistics = () => {
    return (
        <div className="stats-manager">
            <div className="stats-manager__top-block">
                <div className="stats-manager__block">
                    <DailySales />
                </div>
                <div className="stats-manager__block">
                    <PercentStatsManager />
                </div>
            </div>
            <div className="stats-manager__table-block">
                <PlannedIndicators />
            </div>
        </div>
    );
};

export default MyStatistics;
