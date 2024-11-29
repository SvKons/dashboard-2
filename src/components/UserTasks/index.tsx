import { useState, useEffect } from 'react';
import './UserTasks.scss';

interface ITasksProps {
    tasks: string[];
    title: string;
}

const UserTasks = ({ tasks, title }: ITasksProps) => {
    const [taskList, setTaskList] = useState<string[]>([]);

    useEffect(() => {
        setTaskList(tasks);
    }, [tasks]);

    return (
        <div className="tasks">
            <h3 className="tasks__title">{title}</h3>
            <ul className="tasks__list">
                {taskList.slice(0, 3).map((task, index) => (
                    <li key={index} className="tasks__item">
                        {index + 1}. {task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserTasks;
