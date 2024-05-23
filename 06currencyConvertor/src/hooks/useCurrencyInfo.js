import { useEffect, useState } from "react";

function useCurrencyInfo(currency = 'inr') {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/41ae3092a1fb46e60ac55853/latest/${currency}`
    )
      .then((response) => response.json())
      .then((response) => setData(response.conversion_rates))
      .catch((err) => {
        console.log("err", err);
      });
  }, [currency]);

  // console.log(data); // This will log the data received from the API
  // console.log('hii');

  return data; // This returns the data state, which will be empty initially
}

export default useCurrencyInfo;
