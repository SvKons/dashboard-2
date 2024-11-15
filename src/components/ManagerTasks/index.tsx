import { useEffect, useState } from 'react';
import './ManagerTasks.scss';

export interface IManagerTasks {
    tasks: string[];
}

const mockTasks: IManagerTasks = {
    tasks: [
        'Подготовить отчет по проекту A',
        'Провести встречу с клиентом',
        'Обновить статус задач в системе',
        'Проверить работу команды над проектом B',
        'Организовать план действий на следующую неделю',
        'Собрать обратную связь от клиентов',
        'Провести оценку рисков для проекта C',
    ],
};

const ManagerTasks = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        // Код для получения данных с бэка
        // const fetchTasks = async () => {
        //     const response = await fetch('https://api.example');
        //     const data: IManagerTasks = await response.json();
        //     setTasks(data.tasks);
        // };

        // fetchTasks();

        // Моковые данные
        setTasks(mockTasks.tasks);
    }, []);

    return (
        <div className="manager-tasks">
            <h3 className="manager-tasks__title">Задачи на сегодня</h3>
            <ul className="manager-tasks__list">
                {tasks.slice(0, 3).map((task, index) => (
                    <li key={index} className="manager-tasks__item">
                        {index + 1}. {task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManagerTasks;
