import { NewsCard } from "@/entities/news";
import styles from "./newsList.module.css";
import nextSvg from "@/shared/assets/next.svg";
import { useSelector } from "react-redux";
import { INewsProps, IState } from "./types";

export const NewsList = ({ isLoading }: INewsProps) => {
    const { news } = useSelector((state: IState) => state?.news);

    if (isLoading) return <p>Loading</p>;

    return (
        <section className={styles.news_section}>
            <div className={styles.news_container}>
                <div className={styles.news_container__head}>
                    <h1 className={styles.news_container__title}>News List</h1>
                    <div className={styles.news_container__viewAllbtn}>
                        <a
                            href="#"
                            className={styles.news_container__viewAllbtn__text}
                        >
                            View all episodes
                        </a>
                        <img src={nextSvg} />
                    </div>
                </div>
                {news?.map((item) => (
                    <NewsCard
                        title={item.author}
                        picture={item.urlToImage}
                        text={item.content}
                        key={item.publishedAt}
                    />
                ))}
            </div>
        </section>
    );
};
