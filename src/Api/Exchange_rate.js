import axois from "axios";

const url_api = "https://api.exchangerate-api.com/v4/latest/";

export const GetExchangeRate = async (currency) => {
  if (!currency) {
    currency = "USD";
  }
  let changeableUrl = `https://api.exchangerate-api.com/v4/latest/${currency}`;

  try {
    const { data } = await axois.get(changeableUrl);

    return data;
  } catch (error) {
    return "Line 14 Exchange_rate.GetExchangeRate() , " + error;
  }
};
