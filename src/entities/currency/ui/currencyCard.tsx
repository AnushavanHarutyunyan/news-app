import { CurrencyState } from "../model/types";
import styles from "./currency.module.css";

export const CurrencyCard = ({ currency }: CurrencyState) => {
    return (
        <div className={styles.currency__block}>
            {currency.map((item, key) => (
                <ul key={key} className={styles.currency__block_ul}>
                    {Object.entries(item.rates).map(([currency, rate]) => (
                        <li
                            key={currency}
                            className={styles.currency__block_li}
                        >
                            {currency}: {rate}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};
