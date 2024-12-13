import { IManagerTitle, UserRole } from '../../../types/types';
import './ManagersTable.scss';

interface ManagersTableProps {
    managers: IManagerTitle[];
    userRole: UserRole;
}

const ManagersTable = ({ managers, userRole }: ManagersTableProps) => {
    const showNameColumn = userRole !== UserRole.Manager;

    return (
        <div className="achievements-block">
            <div className="achievements-block__list">
                {managers.map(manager => (
                    <div className="achievements-block__card" key={manager.id}>
                        <div className="achievements-block__info">
                            {showNameColumn && <div className="achievements-block__name">{manager.name}</div>}
                            <div className="achievements-block__title">{manager.fullTitle}</div>
                            <div className="achievements-block__sales">{manager.sales.toLocaleString()} руб.</div>
                            <div className="achievements-block__achievements">{manager.achievements.length ? manager.achievements.join(', ') : 'Нет достижений'}</div>
                        </div>
                        <div className="achievements-block__img-wrap">
                            <img src={manager.image} alt={manager.title} className="achievements-block__img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ManagersTable;
