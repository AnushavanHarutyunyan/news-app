import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyData, CurrencyState, CurrencyValue } from "./types";

const initialState: CurrencyState = {
    currency: [],
};

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action: PayloadAction<CurrencyData>) => {
            state.currency = [action.payload];
        },
    },
});

export const selectCurrency = (state: { currency: CurrencyState }) => state.currency.currency;
export const selectRates = (state: { currency: CurrencyState }): CurrencyValue | null => {
    if (state.currency.currency.length) {
        return state.currency.currency[0].rates;
    }
    return null;
};
export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
