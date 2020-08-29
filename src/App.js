import React, { useState } from "react";
import { GetExchangeRate } from "./Api/Exchange_rate";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

function App() {
  const classes = useStyles();
  let [FromCurrency, setFromCurrency] = useState("");
  let [ToCurrency, setToCurrency] = useState("");
  let [rate, setRate] = useState(0.0);
  let [fromValue, setFromValue] = useState(1);
  let [result, setResult] = useState(0);

  const GetExchange = async () => {
    let data = await GetExchangeRate(FromCurrency);

    // console.log(data);

    if (!ToCurrency) {
      ToCurrency = "THB";
    }

    setRate(() => (rate = data.rates[ToCurrency].toFixed(2)));

    setResult(() => (result = (rate * fromValue).toFixed(2)));

    console.log(result);
  };

  return (
    <Box display="flex" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="center">
      <Card className={classes.root}>
        <CardContent>
          <Box m={1}>
            <Typography variant="h5" component="h2">
              Exhange Rate Calculator
            </Typography>
            <Typography color="textSecondary">
              Choose the currency and the amounts to get the exchange rate
            </Typography>
          </Box>
          {/* From Currency */}
          <Box m={1}>
            <Typography variant="body2" component="p">
              <Select
                id="FromCurrency" defaultValue="USD"
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <MenuItem value="AED">AED</MenuItem>
                <MenuItem value="ARS">ARS</MenuItem>
                <MenuItem value="AUD">AUD</MenuItem>
                <MenuItem value="BGN">BGN</MenuItem>
                <MenuItem value="BRL">BRL</MenuItem>
                <MenuItem value="BSD">BSD</MenuItem>
                <MenuItem value="CAD">CAD</MenuItem>
                <MenuItem value="CHF">CHF</MenuItem>
                <MenuItem value="CLP">CLP</MenuItem>
                <MenuItem value="CNY">CNY</MenuItem>
                <MenuItem value="COP">COP</MenuItem>
                <MenuItem value="CZK">CZK</MenuItem>
                <MenuItem value="DKK">DKK</MenuItem>
                <MenuItem value="DOP">DOP</MenuItem>
                <MenuItem value="EGP">EGP</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="FJD">FJD</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="GTQ">GTQ</MenuItem>
                <MenuItem value="HKD">HKD</MenuItem>
                <MenuItem value="HRK">HRK</MenuItem>
                <MenuItem value="HUF">HUF</MenuItem>
                <MenuItem value="IDR">IDR</MenuItem>
                <MenuItem value="ILS">ILS</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="ISK">ISK</MenuItem>
                <MenuItem value="JPY">JPY</MenuItem>
                <MenuItem value="KRW">KRW</MenuItem>
                <MenuItem value="KZT">KZT</MenuItem>
                <MenuItem value="MXN">MXN</MenuItem>
                <MenuItem value="MYR">MYR</MenuItem>
                <MenuItem value="NOK">NOK</MenuItem>
                <MenuItem value="NZD">NZD</MenuItem>
                <MenuItem value="PAB">PAB</MenuItem>
                <MenuItem value="PEN">PEN</MenuItem>
                <MenuItem value="PHP">PHP</MenuItem>
                <MenuItem value="PKR">PKR</MenuItem>
                <MenuItem value="PLN">PLN</MenuItem>
                <MenuItem value="PYG">PYG</MenuItem>
                <MenuItem value="RON">RON</MenuItem>
                <MenuItem value="RUB">RUB</MenuItem>
                <MenuItem value="SAR">SAR</MenuItem>
                <MenuItem value="SEK">SEK</MenuItem>
                <MenuItem value="SGD">SGD</MenuItem>
                <MenuItem value="THB">THB</MenuItem>
                <MenuItem value="TRY">TRY</MenuItem>
                <MenuItem value="TWD">TWD</MenuItem>
                <MenuItem value="UAH">UAH</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="UYU">UYU</MenuItem>
                <MenuItem value="VND">VND</MenuItem>
                <MenuItem value="ZAR">ZAR</MenuItem>
              </Select>
              <TextField
                placeholder="0"
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
              />
            </Typography>
          </Box>
          {/* Exchange */}
          <Box m={1} display="flex" justifyContent="flex-end">
            <Typography variant="body2" component="div">
              <Button
                id="btnExchange"
                variant="contained"
                color="primary"
                onClick={GetExchange}
              >
                Exchange
              </Button>
              <label id="swap_rate">{rate}</label> Rate
            </Typography>
          </Box>
          {/* To Currency */}
          <Box m={1}>
            <Typography variant="body2" component="p">
              <Select
                id="ToCurrency" defaultValue="THB"
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <MenuItem value="AED">AED</MenuItem>
                <MenuItem value="ARS">ARS</MenuItem>
                <MenuItem value="AUD">AUD</MenuItem>
                <MenuItem value="BGN">BGN</MenuItem>
                <MenuItem value="BRL">BRL</MenuItem>
                <MenuItem value="BSD">BSD</MenuItem>
                <MenuItem value="CAD">CAD</MenuItem>
                <MenuItem value="CHF">CHF</MenuItem>
                <MenuItem value="CLP">CLP</MenuItem>
                <MenuItem value="CNY">CNY</MenuItem>
                <MenuItem value="COP">COP</MenuItem>
                <MenuItem value="CZK">CZK</MenuItem>
                <MenuItem value="DKK">DKK</MenuItem>
                <MenuItem value="DOP">DOP</MenuItem>
                <MenuItem value="EGP">EGP</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="FJD">FJD</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="GTQ">GTQ</MenuItem>
                <MenuItem value="HKD">HKD</MenuItem>
                <MenuItem value="HRK">HRK</MenuItem>
                <MenuItem value="HUF">HUF</MenuItem>
                <MenuItem value="IDR">IDR</MenuItem>
                <MenuItem value="ILS">ILS</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="ISK">ISK</MenuItem>
                <MenuItem value="JPY">JPY</MenuItem>
                <MenuItem value="KRW">KRW</MenuItem>
                <MenuItem value="KZT">KZT</MenuItem>
                <MenuItem value="MXN">MXN</MenuItem>
                <MenuItem value="MYR">MYR</MenuItem>
                <MenuItem value="NOK">NOK</MenuItem>
                <MenuItem value="NZD">NZD</MenuItem>
                <MenuItem value="PAB">PAB</MenuItem>
                <MenuItem value="PEN">PEN</MenuItem>
                <MenuItem value="PHP">PHP</MenuItem>
                <MenuItem value="PKR">PKR</MenuItem>
                <MenuItem value="PLN">PLN</MenuItem>
                <MenuItem value="PYG">PYG</MenuItem>
                <MenuItem value="RON">RON</MenuItem>
                <MenuItem value="RUB">RUB</MenuItem>
                <MenuItem value="SAR">SAR</MenuItem>
                <MenuItem value="SEK">SEK</MenuItem>
                <MenuItem value="SGD">SGD</MenuItem>
                <MenuItem value="THB">THB</MenuItem>
                <MenuItem value="TRY">TRY</MenuItem>
                <MenuItem value="TWD">TWD</MenuItem>
                <MenuItem value="UAH">UAH</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="UYU">UYU</MenuItem>
                <MenuItem value="VND">VND</MenuItem>
                <MenuItem value="ZAR">ZAR</MenuItem>
              </Select>
              <TextField placeholder="0" type="number" value={result} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
