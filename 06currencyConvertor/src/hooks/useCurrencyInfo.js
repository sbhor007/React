import { useEffect, useState } from "react";

function useCurrencyInfo(currency = 'inr') {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/27a8cbbb57b94e220570e62a/latest/${currency}`
    )
      .then((response) => response.json())
      .then((response) => setData(response.conversion_rates))
      .catch((err) => {
        console.log("err", err);
      });
  }, [currency]);

  console.log(data); // This will log the data received from the API

  return data; // This returns the data state, which will be empty initially
}

export default useCurrencyInfo;
