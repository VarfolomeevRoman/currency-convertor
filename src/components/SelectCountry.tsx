import { Autocomplete, Grid, TextField, Skeleton } from '@mui/material';
import React from 'react';
import useAxios from '../hooks/useAxios';

interface CountryData {
  flag: string;
  currencies: { [key: string]: string };
  name: { common: string };
}
interface SelectCountryProps {
  value: string;
  setValue: (newValue: string) => void;
  label: string;
}

const SelectCountry: React.FC<SelectCountryProps> = (props) => {
  const { value, setValue, label } = props;
  const [data, loaded, error] = useAxios<CountryData>(
    'https://restcountries.com/v3.1/all'
  );
  const dataFilter = data.filter((item) => 'currencies' in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  console.log(dataCountries);
  if (loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }
  if (error) {
    return 'Something went wrong!';
  }

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
