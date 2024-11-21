import UserTasks from '../../UserTasks';

const mockTasks = [
    'Подготовить отчет по проекту A',
    'Провести встречу с клиентом',
    'Обновить статус задач в системе',
    'Проверить работу команды над проектом B',
    'Организовать план действий на следующую неделю',
    'Собрать обратную связь от клиентов',
    'Провести оценку рисков для проекта C',
];

const ManagerTasks = () => {
    return <UserTasks tasks={mockTasks} title="Задачи на сегодня" />;
};

export default ManagerTasks;
