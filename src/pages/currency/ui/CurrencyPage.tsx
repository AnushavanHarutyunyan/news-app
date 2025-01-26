import { useGetCurrencyQuery } from "@/entities/currency/api/currencyApi";
import styles from "./currency.module.css";
import { requestCurrency } from "@/entities/currency/const/const";
import { useSelector } from "react-redux";
import { selectCurrency } from "@/entities/currency/model/currencySlice";
import { CurrencyCard } from "@/entities/currency";
import { Calculator } from "@/features/Calc";

export const CurrencyPage = () => {
    const { isLoading, isError } = useGetCurrencyQuery(requestCurrency);
    const currency = useSelector(selectCurrency);

    return (
        <section className={styles.currency__section}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching weather data.</p>}
            <CurrencyCard currency={currency} />
            <Calculator />
        </section>
    );
};
