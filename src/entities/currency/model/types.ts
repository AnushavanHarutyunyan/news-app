export interface CurrencyValue {
    USD: number;
    GBP: number;
    JPY: number;
    AUD: number;
    CAD: number;
    PLN: number;
    MXN: number;
}

export interface CurrencyData {
    base: string;
    date: string;
    rates: CurrencyValue;
    success: boolean;
    timestamp: number;
}

export interface CurrencyState {
    currency: CurrencyData[];
}
