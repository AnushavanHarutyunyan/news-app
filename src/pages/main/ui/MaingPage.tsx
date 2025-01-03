import styles from "./main.module.css";
import banner from "@/shared/assets/image.png";

export const MainPage = () => {
    return (
        <section className={styles.main}>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div>
                        <h1 className={styles.banner_title}>New episode available now</h1>
                    </div>
                </div>
                <div className={styles.banner_img_container}>
                    <img src={banner} alt="Full Width" className={styles.banner_img} />
                </div>
            </div>
        </section>
    );
};
