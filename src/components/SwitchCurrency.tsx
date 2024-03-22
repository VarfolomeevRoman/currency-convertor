import { Button, Grid } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useContext } from 'react';
import { CurrencyContext, contextValueType } from '../context/CurrencyContext';

const SwitchCurrency = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext) as contextValueType;

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <Grid item xs={12} md="auto">
      <Button
        onClick={handleSwitch}
        sx={{
          borderRadius: 1,
          height: '100%',
        }}
      >
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
