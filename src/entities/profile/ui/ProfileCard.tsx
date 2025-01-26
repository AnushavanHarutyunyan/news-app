import { IProfileCardProps } from "../model/types";

export const ProfileCard = ({ user }: IProfileCardProps) => {
    return (
        <>
            <li>User Id - {user?.id}</li>
            <li>First Name - Vladimir</li>
            <li>Last Name - Jukovski</li>
        </>
    );
};
