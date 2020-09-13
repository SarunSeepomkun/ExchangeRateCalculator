import React, { useState, useEffect } from "react";
import { GetExchangeRate } from "./Api/Exchange_rate";
import "./App.css";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

function App() {
  let [FromCurrency, setFromCurrency] = useState("USD");
  let [ToCurrency, setToCurrency] = useState("THB");
  let [rate, setRate] = useState();
  let [fromValue, setFromValue] = useState(1);
  let [result, setResult] = useState(0);

  // const GetExchange = async () => {
  //   let data = await GetExchangeRate(FromCurrency);
  //   setRate(() => (rate = data.rates[ToCurrency].toFixed(2)));
  //   setResult(() => (result = (rate * fromValue).toFixed(2)));
  // };

  useEffect(() => {
    async function Exchange() {
      const data = await GetExchangeRate(FromCurrency);
      const fetchRate = data.rates[ToCurrency].toFixed(2);
      const fetchResult = (fetchRate * fromValue).toFixed(2);

      setRate(fetchRate);
      setResult(fetchResult);
    };
    Exchange();
  }, [FromCurrency, ToCurrency, fromValue]);

  const GetSwap = () => {
    const fromC = FromCurrency;
    const toC = ToCurrency;

    setFromCurrency(toC);
    setToCurrency(fromC);
  };

  return (
    <div className="container">
      <Card className="container__card">
        <CardContent>
          <div className="header">
            <p className="textPrimary">Exhange Rate</p>
          </div>
          {/* From Currency */}
          <div>
            <Typography variant="body2" component="p">
              <Select
                id="FromCurrency"
                defaultValue="USD"
                value={FromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="dropdown"
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
                className="text"
                onChange={(e) => setFromValue(e.target.value)}
              />
            </Typography>
          </div>
          {/* To Currency */}
          <div>
            <Typography variant="body2" component="p">
              <Select
                id="ToCurrency"
                defaultValue="THB"
                value={ToCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="dropdown"
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
                value={result}
                className="text"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Typography>
          </div>
          {/* Exchange */}
          <div className="control">
            <TextField
              id="swap_rate"
              className="textRate"
              label="Rate"
              value={rate}
              defaultValue="0.00"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <Button
              id="btnSwap"
              variant="contained"
              color="primary"
              onClick={GetSwap}
              className="swapButton"
            >
              Swap
            </Button>
            {/* <Button
              id="btnExchange"
              variant="contained"
              color="primary"
              className="exchangeButton"
              onClick={GetExchange}
            >
              Exchange
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
