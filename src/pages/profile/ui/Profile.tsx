import { useGetUserByIdQuery } from "@/entities/user/api/userApi";
import styles from "./Profile.module.css";

export const ProfilePage = () => {
  const { isSuccess, isLoading, data } = useGetUserByIdQuery("id=1");

  const user = data && data[0];

  if (isSuccess) {
    const { id } = data[0];
    localStorage.setItem("id", id);
  }

  if (isLoading) {
    return <div>Loading data</div>;
  }

  return (
    <section className={styles.container}>
      <div>
        <h1>Profile Page</h1>
        <ul>
          <li>User Id - {user?.id}</li>
          <li>First Name - Vladimir</li>
          <li>Last Name - Jukovski</li>
        </ul>
      </div>
    </section>
  );
};
