import { ReactNode, createContext, useState } from 'react';

export type contextValueType = {
  fromCurrency: string;
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  firstAmount: number;
  setFirstAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const CurrencyContext = createContext<contextValueType | null>(null);

const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [fromCurrency, setFromCurrency] = useState('🇺🇸 USD - United States');
  const [toCurrency, setToCurrency] = useState('🇦🇺 AUD - Australia');
  const [firstAmount, setFirstAmount] = useState(0);

  const value: contextValueType = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
