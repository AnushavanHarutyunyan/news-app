import { IProps } from "../model/types";
import styles from "./News.module.css";

export const NewsCard = ({ title, text, picture }: IProps) => {
    return (
        <div className={styles.news_card_container}>
            <div className={styles.container__container_img}>
                <img className={styles.news_card_container__img} src={picture} />
            </div>
            <div className={styles.news_card_container__title_block}>
                <h4 className={styles.news_card_container__title_block__title}>{title}</h4>
                <p className={styles.news_card_container__title_block_text}>{text}</p>
            </div>
        </div>
    );
};
