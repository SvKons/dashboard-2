export enum UserRole {
    Manager = 'manager',
    Leader = 'leader',
    Public = 'public',
}

export interface INavItem {
    path: string;
    icon: string;
    alt: string;
    label: string;
}

export interface IMember {
    id: string;
    name: string;
    position: string;
    email: string;
    phone: string;
}

export interface IManagerTitle {
    id: string;
    name: string;
    sales: number;
    achievements: string[];
    title: string;
    fullTitle: string;
    image: string;
    userRole: UserRole;
}

export interface TitlesWithAdjectives {
    [title: string]: string[];
}

export interface ImagesByTitleAndAdjective {
    [title: string]: {
        [adjective: string]: string[];
    };
}
