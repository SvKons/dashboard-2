export enum IdeaStatus {
    Pending = 'На рассмотрении',
    Approved = 'Одобрена',
    Rejected = 'Отклонена',
}

export interface IIdeasForm {
    id: string;
    offer: string;
    status: IdeaStatus;
}

export const ideasList: IIdeasForm[] = [{ id: '1', offer: 'Идея №1', status: IdeaStatus.Pending }];
