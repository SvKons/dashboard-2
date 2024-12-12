import { IManagerTitle, UserRole } from '../../../types/types';
import './ManagersTable.scss';

interface ManagersTableProps {
    managers: IManagerTitle[];
    userRole: UserRole;
}

const ManagersTable = ({ managers, userRole }: ManagersTableProps) => {
    const showNameColumn = userRole !== UserRole.Manager;

    return (
        <div className="table-mcard">
            <table className="table-mcard__table">
                <thead className="table-mcard__table-head">
                    <tr className="table-mcard__table-row">
                        {showNameColumn && <th className="table-mcard__cell">Имя</th>}
                        <th className="table-mcard__cell">Титул</th>
                        <th className="table-mcard__cell">Сумма продаж</th>
                        <th className="table-mcard__cell">Достижения</th>
                    </tr>
                </thead>
                <tbody className="table-mcard__table-body">
                    {managers.map(manager => {
                        return (
                            <tr className="table-mcard__table-row" key={manager.id}>
                                {showNameColumn && <td className="table-mcard__cell-body">{manager.name}</td>}
                                <td className="table-mcard__cell-body">
                                    <div className="table-mcard__title-wrap">
                                        <div>{manager.fullTitle}</div>
                                        <div className="table-mcard__img-wrap">
                                            <img src={manager.image} alt={manager.title} className="table-mcard__img" />
                                        </div>
                                    </div>
                                </td>
                                <td className="table-mcard__cell-body">{manager.sales.toLocaleString()} руб.</td>
                                <td className="table-mcard__cell-body">{manager.achievements.length ? manager.achievements.join(', ') : 'Нет достижений'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default ManagersTable;
