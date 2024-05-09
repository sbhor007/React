import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/27a8cbbb57b94e220570e62a/latest/inr/${currency}`
    ).then((responce) => responce.json()).then((responce) => setData(responce.[currency]))
    console.log(data);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
