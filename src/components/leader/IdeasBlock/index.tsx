import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';
import { Idea, ideas as initialIdeas } from './utils';
import Button from '../../Button';
import './IdeasBlock.scss';
import { useState, useEffect } from 'react';

interface IdeaWithStatus extends Idea {
    status: 'pending' | 'approved' | 'rejected'; // Добавляем статус
}

const IdeasBlock = () => {
    // Загружаем данные из localStorage или инициализируем с начальным статусом
    const [ideas, setIdeas] = useState<IdeaWithStatus[]>(() => {
        const savedIdeas = localStorage.getItem('ideas');
        if (savedIdeas) {
            return JSON.parse(savedIdeas) as IdeaWithStatus[]; // Используем сохраненные данные
        }
        // Если данных нет, добавляем статус к начальным идеям
        return initialIdeas.map(idea => ({
            ...idea,
            status: 'pending',
        }));
    });

    const [filter, setFilter] = useState<'all' | 'approved' | 'rejected'>('all'); // Фильтрация по типу идеи

    // Сохраняем данные в localStorage при изменении состояния идей
    useEffect(() => {
        localStorage.setItem('ideas', JSON.stringify(ideas));
    }, [ideas]);

    // Функция для обработки изменения статуса идеи
    const handleStatusChange = (id: number, status: 'approved' | 'rejected') => {
        const updatedIdeas = ideas.map(idea => (idea.id === id ? { ...idea, status } : idea));
        setIdeas(updatedIdeas); // Обновляем состояние идей
    };

    // Фильтрация идей в зависимости от выбранного фильтра
    const filteredIdeas = ideas.filter(idea => {
        if (filter === 'all') return true;
        return idea.status === filter;
    });

    // Обработчики для кнопок фильтрации
    const handleFilterChange = (newFilter: 'all' | 'approved' | 'rejected') => {
        setFilter(newFilter);
    };

    return (
        <>
            <h3 className="ideas-title">Идеи сотрудников</h3>
            <div className="table-ideas">
                <div className="table-ideas__buttons">
                    <Button className="table-ideas__button" label="Все идеи" onClick={() => handleFilterChange('all')} />
                    <Button className="table-ideas__button" label="Одобренные идеи" onClick={() => handleFilterChange('approved')} />
                    <Button className="table-ideas__button" label="Отклоненные идеи" onClick={() => handleFilterChange('rejected')} />
                </div>
                <table className="table-ideas__table">
                    <thead className="table-ideas__table-head">
                        <tr className="table-ideas__table-row">
                            <th className="table-ideas__cell">№</th>
                            <th className="table-ideas__cell">Идея</th>
                            <th className="table-ideas__cell">Автор идеи</th>
                        </tr>
                    </thead>
                    <tbody className="table-ideas__table-body">
                        {filteredIdeas.map((idea, index) => (
                            <tr className="table-ideas__table-row" key={idea.id}>
                                <td className="table-ideas__cell-body">{index + 1}</td>
                                <td className="table-ideas__cell-body">{idea.idea}</td>
                                <td className="table-ideas__cell-body">
                                    <div className="table-ideas__wrap-content">
                                        {idea.employeeName}
                                        <div className="table-ideas__icon-idea">
                                            <IconButton onClick={() => handleStatusChange(idea.id, 'approved')}>
                                                <CheckCircleIcon aria-label="CheckCircle" color="success" />
                                            </IconButton>
                                            <IconButton onClick={() => handleStatusChange(idea.id, 'rejected')}>
                                                <BlockIcon aria-label="Block" color="error" />
                                            </IconButton>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default IdeasBlock;
