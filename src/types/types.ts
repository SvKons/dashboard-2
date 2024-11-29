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
