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

export interface IManagerTitle {
    id: number;
    name: string;
    sales: number;
    achievements: string[];
    title: string;
    userRole: UserRole;
}
