import styles from "./button.module.css";

interface IProps {
    value: string;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Button = ({ value, handleClick }: IProps) => {
    return (
        <div className={styles.btn} onClick={handleClick}>
            {value}
        </div>
    );
};
