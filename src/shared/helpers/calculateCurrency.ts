import { CurrencyValue } from "@/entities/currency/model/types";

export const calculateCurrency = (currency: number, from: string, to: string, rates: CurrencyValue | null) => {
    if (from !== to && rates) {
        switch (to.toLocaleUpperCase()) {
            case "USD": {
                return currency * rates.USD;
            }
            case "GBP": {
                return currency * rates.GBP;
            }
            case "JPY": {
                return currency * rates.JPY;
            }
        }
    } else {
        return currency;
    }
};
