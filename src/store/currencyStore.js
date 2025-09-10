import { create } from "zustand";
import { persist } from "zustand/middleware";

const rates = {
  USD: 0.0000416,
  EUR: 0.0000383,
  VND: 1,
  XOF: 0.0254,
};
const CURRENCY_KEY = "selectedCurrency";

export const useCurrencyStore = create(
  persist(
    (set, get) => ({
      currency: localStorage.getItem(CURRENCY_KEY) || "VND",
      setCurrency: (code) => {
        set({ currency: code });
        localStorage.setItem(CURRENCY_KEY, code);
      },
      getCurrency: () => get().currency,
      convertAmount: (amount) => {
        const currentCurrency = get().currency;
        const rate = rates[currentCurrency] || 1;
        return {
          price: (amount * rate).toFixed(2),
          currency: currentCurrency,
        };
      },
      getRates: () => rates,
    }),
    {
      name: "selectedCurrency",
    }
  )
);

// SUPPRIMER le hook personnalisé problématique et utiliser directement le store
// export const useCurrency = () => {
//   const currency = useCurrencyStore((state) => state.currency);
//   const setCurrency = useCurrencyStore((state) => state.setCurrency);
//   const convertAmount = useCurrencyStore((state) => state.convertAmount);
//
//   return { currency, setCurrency, convertAmount };
// };
