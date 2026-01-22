import { useState } from "react";
import { Input as InputBox } from "./components";
import useCurrencyInfo from "./hooks/currencyinfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(4);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    const result = amount * currencyInfo[to];

    setFrom(to);
    setTo(from);
    setAmount(result);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white/30 p-5 rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyInfo={options}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
            selecteCurrency={from}
          />

          <div className="text-center my-3">
            <button className="bg-blue-500 text-black  rounded-sm" type="button" onClick={swap}>
              swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyInfo={options}
            onCurrencyChange={setTo}
            selecteCurrency={to}
            amountDisable
          />

          <button className="bg-blue-500 text-black mt-4 rounded-lg w-full" type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
