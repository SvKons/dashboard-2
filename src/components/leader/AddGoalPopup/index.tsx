import { useEffect, useState } from 'react';
import { IAddGoalProps, IGoal, managers } from '../GoalLeaderBlock/utils';
import Button from '../../Button';
import './AddGoalPopup.scss';

interface IAdditionalGoalProps {
    isCommonGoal: boolean;
    onCommonGoal: () => void;
    onEmployeeGoal: () => void;
}

const AddGoalPopup = ({ onSave, onCancel, initialValues, isCommonGoal, onCommonGoal, onEmployeeGoal }: IAddGoalProps & IAdditionalGoalProps) => {
    const [goalState, setGoalState] = useState<IGoal>({
        id: initialValues?.id || '',
        text: initialValues?.text || '',
        managerId: initialValues?.managerId || '',
    });

    useEffect(() => {
        if (initialValues) {
            setGoalState({
                id: initialValues.id || '',
                text: initialValues.text || '',
                managerId: initialValues.managerId || '',
            });
        } else {
            setGoalState({ id: '', text: '', managerId: '' });
        }
    }, [initialValues]);

    const handleChangeGoal = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setGoalState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(goalState);
    };

    return (
        <div className="add-goal">
            <div className="add-goal__container">
                <div className="add-goal__wrap">
                    {isCommonGoal ? (
                        <div className="add-goal__info">
                            <label className="add-goal__label">Общая цель</label>
                            <textarea className="add-goal__textarea" name="text" value={goalState.text} onChange={handleChangeGoal} placeholder="Цель" />
                        </div>
                    ) : (
                        <>
                            <div className="add-goal__info">
                                <label className="add-goal__label">Новая цель</label>
                                <textarea className="add-goal__textarea" name="text" value={goalState.text} onChange={handleChangeGoal} placeholder="Цель" />
                            </div>
                            <div className="add-goal__info">
                                <label className="add-goal__label">Выберите менеджера</label>
                                <select className="add-goal__select" name="managerId" value={goalState.managerId} onChange={handleChangeGoal}>
                                    <option value="">Выберите менеджера</option>
                                    {managers.map(manager => (
                                        <option key={manager.id} value={manager.id}>
                                            {manager.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="add-goal__buttons-wrap">
                {isCommonGoal ? (
                    <Button className="add-goal__button add-goal__button_employee-goal" label="Цель для сотрудника" onClick={onEmployeeGoal} />
                ) : (
                    <Button className="add-goal__button add-goal__button_common-goal" label="Общая цель" onClick={onCommonGoal} />
                )}
                <div className="add-goal__buttons">
                    <Button className="add-goal__button add-goal__button_save" label="Сохранить" onClick={handleSave} />
                    <Button className="add-goal__button add-goal__button_cancel" label="Отмена" onClick={onCancel} />
                </div>
            </div>
        </div>
    );
};
export default AddGoalPopup;
