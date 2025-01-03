import { NewsList } from "@/widgets/news";
import styles from "./news.module.css";
import { useGetNewsQuery } from "@/entities/news/api/newApi";

export const NewsPage = () => {
  const { isError, isLoading } = useGetNewsQuery("");

  return (
    <section className={styles.news_section}>
      <div className={styles.container}>
        <NewsList isError={isError} isLoading={isLoading} />
      </div>
    </section>
  );
};
