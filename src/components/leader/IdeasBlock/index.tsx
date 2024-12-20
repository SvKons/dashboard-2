import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { IdeaStatus, IIdeasForm } from '../../manager/OfferIdeas/utils';
import { predefinedIdeas, IIdeaWithStatus, LOCAL_STORAGE_KEY } from './utils';
import Button from '../../Button';
import './IdeasBlock.scss';

interface IIdeaButton {
    label: string;
    filter: 'all' | IdeaStatus;
}

const buttonsIdeaList: IIdeaButton[] = [
    { label: 'Все идеи', filter: 'all' },
    { label: 'Новые идеи', filter: IdeaStatus.Pending },
    { label: 'Одобренные', filter: IdeaStatus.Approved },
    { label: 'Отклоненные', filter: IdeaStatus.Rejected },
];

const IdeasBlock = () => {
    const [ideas, setIdeas] = useState<IIdeaWithStatus[]>([]);
    const [filter, setFilter] = useState<IdeaStatus | 'all'>('all');

    useEffect(() => {
        const storedIdeas = localStorage.getItem(LOCAL_STORAGE_KEY);
        const localIdeas: IIdeasForm[] = storedIdeas ? JSON.parse(storedIdeas) : [];

        const mergedIdeas: IIdeaWithStatus[] = [
            ...predefinedIdeas,
            ...localIdeas.map((idea: IIdeasForm) => ({
                id: idea.id.toString(),
                offer: idea.offer,
                employeeName: 'Менеджер',
                status: idea.status,
            })),
        ];

        setIdeas(mergedIdeas);
    }, []);

    const handleStatusChange = (id: string, status: IdeaStatus) => {
        const updatedIdeas = ideas.map(idea => (idea.id === id ? { ...idea, status } : idea));
        setIdeas(updatedIdeas);

        const localIdeas = updatedIdeas.filter(idea => !predefinedIdeas.some(predefined => predefined.id === idea.id));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localIdeas));
    };

    const filteredIdeas = ideas.filter(idea => (filter === 'all' ? true : idea.status === filter));

    return (
        <div className="ideas-block">
            <h3 className="title">Идеи сотрудников</h3>
            <div className="table-ideas">
                <div className="table-ideas__buttons">
                    {buttonsIdeaList.map(({ label, filter: buttonFilter }) => (
                        <Button key={buttonFilter} label={label} onClick={() => setFilter(buttonFilter)} className={`table-ideas__button ${filter === buttonFilter ? 'table-ideas__button_active' : ''}`} />
                    ))}
                </div>

                <table className="table-ideas__table">
                    <thead className="table-ideas__table-head">
                        <tr className="table-ideas__table-row">
                            <th className="table-ideas__cell">№</th>
                            <th className="table-ideas__cell">Идея</th>
                            <th className="table-ideas__cell">Автор идеи</th>
                            <th className="table-ideas__cell">Статус</th>
                        </tr>
                    </thead>
                    <tbody className="table-ideas__table-body">
                        {filteredIdeas.map((idea, index) => (
                            <tr className="table-ideas__table-row" key={idea.id}>
                                <td className="table-ideas__cell-body">{index + 1}</td>
                                <td className="table-ideas__cell-body">{idea.offer}</td>
                                <td className="table-ideas__cell-body">{idea.employeeName}</td>
                                <td className="table-ideas__cell-body">
                                    <span>
                                        <div className="table-ideas__wrap-content">
                                            {idea.status === IdeaStatus.Pending ? 'Новая' : idea.status === IdeaStatus.Approved ? 'Одобрена' : 'Отклонена'}
                                            <div className="table-ideas__icon-idea">
                                                <IconButton onClick={() => handleStatusChange(idea.id, IdeaStatus.Approved)}>
                                                    <CheckCircleIcon aria-label="CheckCircle" color="success" />
                                                </IconButton>
                                                <IconButton onClick={() => handleStatusChange(idea.id, IdeaStatus.Rejected)}>
                                                    <BlockIcon aria-label="Block" color="error" />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IdeasBlock;
