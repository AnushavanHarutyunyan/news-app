import { Button } from "@/shared/Button/Button";
import styles from "./calc.module.css";
import { calculateCurrency } from "@/shared/helpers/calculateCurrency";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRates } from "@/entities/currency/model/currencySlice";

export const Calculator = () => {
    const [currency, setCurrency] = useState(0);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [reslut, setResult] = useState<undefined | number>();
    const rates = useSelector(selectRates);

    const handleCalc = () => {
        const data = calculateCurrency(currency, from, to, rates);
        setResult(data);
    };

    return (
        <section className={styles.calc__section}>
            <h1>Calculator currency</h1>
            <div>
                <div>
                    <select value={from} onChange={(e) => setFrom(e.target.value)}>
                        <option value="">Select from currency</option>
                        <option>EUR</option>
                    </select>
                    <select value={to} onChange={(e) => setTo(e.target.value)}>
                        <option value="">Select to currency</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <div>
                    <input type="number" onChange={(e) => setCurrency(Number(e.target.value))} />
                    <p style={{ display: "inline-block" }}>Result: {reslut}</p>
                </div>
            </div>
            <Button value="calculate" handleClick={handleCalc} />
        </section>
    );
};
