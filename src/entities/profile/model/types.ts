export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
}

export interface IProfileCardProps {
    user: IUser;
}
