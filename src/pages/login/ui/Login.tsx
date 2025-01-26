import bgImg from "@/shared/assets/bgimg.png";
import styles from "./Login.module.css";
import { Form } from "@/features/Form";

export const LoginPage = () => {
    return (
        <section className={styles.login_section}>
            <div className={styles.img_container}>
                <img
                    src={bgImg}
                    alt="bgImage"
                    className={styles.img_container__img}
                />
            </div>
            <Form />
        </section>
    );
};
