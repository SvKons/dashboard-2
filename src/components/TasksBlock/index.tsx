import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import './TasksBlock.scss';
import Button from '../Button';
import UserTasks from '../UserTasks';

interface ITasksBlockProps {
    initialTasks: string[];
}

const TasksBlock = ({ initialTasks }: ITasksBlockProps) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([newTask, ...tasks]);
            setNewTask('');
        }
    };

    return (
        <div className="tasks-block">
            <div className="tasks-block__wrap">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                    <DemoContainer components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}>
                        <DemoItem>
                            <DesktopDatePicker defaultValue={dayjs()} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <textarea className="tasks-block__textarea" placeholder="Введите задачу..." value={newTask} onChange={e => setNewTask(e.target.value)} rows={1} />
                <Button className="tasks-block__button" label="Добавить задачу" onClick={handleAddTask} />
                <UserTasks tasks={tasks} title="Задачи на сегодня" />
            </div>
        </div>
    );
};

export default TasksBlock;
