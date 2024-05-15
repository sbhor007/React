import React, { useId } from "react";

function InputBox(
  {
  label,
  amount,
  onAmmountChange,
  onCurrencyChange,
  curruncyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  CurruncyDisable = false,
  className = ""
  }
) {
  const amountInputId = useId(); //genarating unique IDs that can pass can be password to accessibility attributes

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label} 
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmmountChange && onAmmountChange(Number(e.target.value))
          } // && --> check amount enter or not
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Typr</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          // disabled={CurruncyDisable}
        >
          {/* 
            Curruncy loop--
            key in loops in react
            -- if use loops in react then remember to put keys to increase performance
            
            */}
          {curruncyOption.map((currency) => {
            return (
              <option
                key={currency} // if use loops in react then remember to put keys to increase performance
                value={currency}
              >
                {currency}k
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
