import { tableHeadData, tableData } from './utils';
import './PlannedIndicators.scss';

const PlannedIndicators = () => {
    return (
        <div className="table-stats">
            <table className="table-stats__table">
                <thead className="table-stats__table-head">
                    <tr className="table-stats__table-row">
                        {tableHeadData.mainHeaders.map((header, index) => (
                            <th key={index} className="table-stats__cell" rowSpan={header.rowSpan} colSpan={header.colSpan}>
                                {header.text}
                            </th>
                        ))}
                    </tr>
                    <tr className="table-stats__table-row">
                        {tableHeadData.subHeaders.map((text, index) => (
                            <th key={index} className="table-stats__cell">
                                {text}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-stats__table-body">
                    {tableData.map(employee => (
                        <>
                            {employee.rows.map((row, rowIndex) => (
                                <tr className="table-stats__table-row" key={`${employee.employeeName}-${row.category}`}>
                                    {rowIndex === 0 && (
                                        <td className="table-stats__cell-body" rowSpan={employee.rows.length}>
                                            {employee.employeeName}
                                        </td>
                                    )}
                                    <td className="table-stats__cell-body">{row.category}</td>
                                    {row.values.map((value, valueIndex) => (
                                        <>
                                            <td className="table-stats__cell-body">{value.plan}</td>
                                            <td className="table-stats__cell-body">{value.fact}</td>
                                            <td className="table-stats__cell-body">{value.percent}</td>
                                        </>
                                    ))}
                                    {row.total &&
                                        row.total.map((totalValue, totalIndex) => (
                                            <td className="table-stats__cell-body" key={`total-${totalIndex}`}>
                                                {totalValue}
                                            </td>
                                        ))}
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlannedIndicators;
