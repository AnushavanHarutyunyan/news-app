import { useGetUserByIdQuery } from "@/entities/user/api/userApi";
import styles from "./Profile.module.css";
import { ProfileCard } from "@/entities/profile/ui/ProfileCard";

export const ProfilePage = () => {
    const { isSuccess, isLoading, data } = useGetUserByIdQuery(1);

    const user = data && data[0];

    if (isSuccess) {
        const { id } = data[0];
        localStorage.setItem("id", id);
    }

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <section className={styles.container}>
            <div>
                <h1>Profile Page</h1>
                <ul>
                    <ProfileCard user={user} />
                </ul>
            </div>
        </section>
    );
};
