import React, { useContext, ChangeEvent } from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';
import { CurrencyContext, contextValueType } from '../context/CurrencyContext';

function InputAmount() {
  const { firstAmount, setFirstAmount } = useContext(
    CurrencyContext
  ) as contextValueType;

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstAmount(parseFloat(e.target.value));
  };

  return (
    <Grid item xs={12} md>
      <TextField
        value={firstAmount}
        onChange={handleAmountChange}
        label="Amount"
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
    </Grid>
  );
}

export default InputAmount;
