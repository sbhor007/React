import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertdAmmount, setconvertdAmmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  // console.log(options);

  //swap to variables
  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertdAmmount(amount);
    setAmount(convertdAmmount);
  };

  const convert = () => {
    setconvertdAmmount(amount * currencyInfo[to]);
  };

  const background = `https://img.freepik.com/free-vector/digital-rupee-concept-background-with-rupee-symbol_1017-36812.jpg?t=st=1715279275~exp=1715282875~hmac=2f4073e3f5e4177554af05e366bbd56f22e22b3817a554f244aa36edb5a78ae7&w=1060`;

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${background}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                labele={from}
                amount={convertdAmmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                amountDisable={amount}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                labele={to}
                amount={convertdAmmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable={amount}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
