import TasksBlock from '../../TasksBlock';

const mockLeaderTasks = [
    'Провести совещание с командой',
    'Обсудить стратегию на следующий квартал',
    'Проверить отчеты по проектам',
    'Организовать тренинг для сотрудников',
    'Провести оценку эффективности команды',
    'Собрать обратную связь от клиентов',
    'Провести оценку рисков для проекта D',
];

const LeaderTasks = () => {
    return <TasksBlock initialTasks={mockLeaderTasks} />;
};

export default LeaderTasks;
