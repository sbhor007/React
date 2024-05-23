import React, { useId } from "react";

function InputBox({
  _label_,
  _amount_,
  _onAmountChange_, // Corrected spelling
  _onCurrencyChange_,
  _curruncyOptions_ = [],
  _selectCurrency_ = "usd",
  _amountDisable_ = false,
  _CurruncyDisable_ = false,
  _className_ = "",
}) {
  const amountInputId = useId(); // Generating unique IDs that can be passed to accessibility attributes

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${_className_}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {_label_}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={_amountDisable_}
          value={_amount_}
          onChange={(e) =>
            _onAmountChange_ && _onAmountChange_(Number(e.target.value))
          } // Corrected spelling and removed unnecessary comment
        />
      </div>
      
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={_selectCurrency_}
          onChange={(e) =>
            _onCurrencyChange_ && _onCurrencyChange_(e.target.value)
          }
          disabled={_CurruncyDisable_}
        >
          {/* Currency loop */}
          {/* key in loops in react */}
          {/* -- if use loops in react then remember to put keys to increase performance */}
          {_curruncyOptions_.map((currency) => {
            return (
              <option
                key={currency} // If use loops in react then remember to put keys to increase performance
                value={currency}
              >
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
