import TasksBlock from '../../TasksBlock';

const mockManagerTasks = [
    'Подготовить отчет по проекту A',
    'Провести встречу с клиентом',
    'Обновить статус задач в системе',
    'Проверить работу команды над проектом B',
    'Организовать план действий на следующую неделю',
    'Собрать обратную связь от клиентов',
    'Провести оценку рисков для проекта C',
];

const ManagerTasks = () => {
    return <TasksBlock initialTasks={mockManagerTasks} />;
};

export default ManagerTasks;
