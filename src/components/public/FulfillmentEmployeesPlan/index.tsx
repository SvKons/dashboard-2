import './FulfillmentEmployeesPlan.scss';
import { employees } from './utils';

// Функция для получения цвета прогресс-бара в зависимости от процента выполнения
const getProgressBarColor = (percentage: number): string => {
    if (percentage >= 75) return 'linear-gradient(90deg, rgba(0,232,255,1) 34%, rgba(0,65,237,1) 70%)';
    if (percentage >= 50) return 'linear-gradient(90deg, rgba(98,255,105,1) 34%, rgba(98,86,202,1) 70%)';
    return 'linear-gradient(90deg, rgba(242, 68, 15, 1) 7%, rgba(126, 24, 145, 1) 70%)';
};

// Функция для получения данных с бэка
// export const fetchEmployees = async (): Promise<Employee[]> => {
//   try {
//     const response = await fetch('https://api.example');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     return [];
//   } finally {

//   }
// }

const FulfillmentEmployeesPlan = () => {
    return (
        <div className="fulfillment">
            <div className="fulfillment__wrap">
                <h2 className="fulfillment__title">Выполнение плана всех сотрудников</h2>
                <div className="fulfillment__scroll-container">
                    <ul className="fulfillment__list">
                        {employees.map((employee, index) => (
                            <li key={employee.id} className="fulfillment__item">
                                <span className="fulfillment__name">
                                    {index + 1}. {employee.name}
                                </span>
                                <div className="fulfillment__bar-container">
                                    <div
                                        className="fulfillment__progress-bar"
                                        style={{
                                            width: `${employee.fulfillmentPercentage}%`,
                                            background: getProgressBarColor(employee.fulfillmentPercentage),
                                        }}
                                    >
                                        {employee.fulfillmentPercentage}%
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FulfillmentEmployeesPlan;
