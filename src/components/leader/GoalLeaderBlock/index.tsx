import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

import Button from '../../Button';
import { managers, goalsList, IGoal, commonGoalsList } from './utils';
import './GoalManagment.scss';
import EditDeleteIcons from '../../EditDeleteIcons';
import Popup from '../../Popup';
import AddGoalPopup from '../AddGoalPopup';

const LOCAL_STORAGE_KEY = 'goalsList';

const GoalLeaderBlock = () => {
    const [allGoals, setAllGoals] = useState<IGoal[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [goalState, setGoalState] = useState<IGoal | null>(null);
    const [isCommonGoal, setIsCommonGoal] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const initialGoals = [...commonGoalsList, ...goalsList];

        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                if (Array.isArray(parsedData) && parsedData.every(goal => goal.id && goal.text)) {
                    setAllGoals(parsedData);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                console.error('Failed to parse stored goals, using initial goals instead:', error);
                setAllGoals(initialGoals);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialGoals));
            }
        } else {
            setAllGoals(initialGoals);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialGoals));
        }
    }, []);

    const handleSaveGoal = (newGoal: IGoal) => {
        let updatedGoals;

        if (goalState) {
            updatedGoals = allGoals.map(item => (item.id === goalState.id ? newGoal : item));
        } else {
            // Генерация уникального ID с помощью uuid
            const newGoalWithId = { ...newGoal, id: uuidv4() };
            updatedGoals = [...allGoals, newGoalWithId];
        }

        setAllGoals(updatedGoals);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedGoals));
        handleClosePopup();
    };

    const handleEditGoal = (goal: IGoal) => {
        setGoalState(goal);
        setIsCommonGoal(goal.managerId === '');
        setIsPopupOpen(true);
    };

    const handleDeleteGoal = (goal: IGoal) => {
        const updatedGoals = allGoals.filter(g => g.id !== goal.id);
        setAllGoals(updatedGoals);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedGoals));
    };

    const handleAddGoal = () => {
        setGoalState(null);
        setIsCommonGoal(false);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setGoalState(null);
    };

    const handleCommonGoal = () => {
        setIsCommonGoal(true);
    };

    const handleEmployeeGoal = () => {
        setIsCommonGoal(false);
    };

    return (
        <>
            <div className="goals-block">
                <Button className="goals-block__button" label="Назначить цель" onClick={handleAddGoal} />
                <div className="table-goals">
                    <table className="table-goals__table">
                        <thead className="table-goals__table-head">
                            <tr className="table-goals__table-row">
                                <th className="table-goals__cell">Менеджер</th>
                                <th className="table-goals__cell">Цели</th>
                            </tr>
                        </thead>
                        <tbody className="table-goals__table-body">
                            {/* Отображение общих целей */}
                            <tr className="table-goals__table-row">
                                <td className="table-goals__cell-body">Общие цели</td>
                                <td className="table-goals__cell-body">
                                    {allGoals.filter(goal => goal.managerId === '').length > 0 ? (
                                        <ul className="table-goals__list">
                                            {allGoals
                                                .filter(goal => goal.managerId === '')
                                                .map(goal => (
                                                    <li className="table-goals__item" key={goal.id}>
                                                        {goal.text}
                                                        <EditDeleteIcons<IGoal> onEdit={handleEditGoal} onDelete={handleDeleteGoal} data={goal} />
                                                    </li>
                                                ))}
                                        </ul>
                                    ) : (
                                        'Нет общих целей'
                                    )}
                                </td>
                            </tr>

                            {/* Отображение целей менеджеров */}
                            {managers.map(manager => (
                                <tr className="table-goals__table-row" key={manager.id}>
                                    <td className="table-goals__cell-body">{manager.name}</td>
                                    <td className="table-goals__cell-body">
                                        {allGoals.filter(goal => goal.managerId === manager.id).length > 0 ? (
                                            <ul className="table-goals__list">
                                                {allGoals
                                                    .filter(goal => goal.managerId === manager.id)
                                                    .map(goal => (
                                                        <li className="table-goals__item" key={goal.id}>
                                                            {goal.text}
                                                            <EditDeleteIcons<IGoal> onEdit={handleEditGoal} onDelete={handleDeleteGoal} data={goal} />
                                                        </li>
                                                    ))}
                                            </ul>
                                        ) : (
                                            'Нет целей'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isPopupOpen && (
                <Popup onClose={handleClosePopup} title={goalState ? 'Редактировать цель' : 'Новая цель'}>
                    <AddGoalPopup onSave={handleSaveGoal} onCancel={handleClosePopup} initialValues={goalState} isCommonGoal={isCommonGoal} onCommonGoal={handleCommonGoal} onEmployeeGoal={handleEmployeeGoal} />
                </Popup>
            )}
        </>
    );
};
export default GoalLeaderBlock;
