import { IdeaStatus } from '../../manager/OfferIdeas/utils';

export const LOCAL_STORAGE_KEY = 'ideasList';

export interface IIdeaWithStatus {
    id: string;
    offer: string;
    employeeName: string;
    status: IdeaStatus;
}

export const predefinedIdeas: IIdeaWithStatus[] = [
    { id: '1', offer: 'Идея 1', employeeName: 'Иван Иванов', status: IdeaStatus.Pending },
    { id: '2', offer: 'Идея 2', employeeName: 'Мария Смирнова', status: IdeaStatus.Approved },
];
