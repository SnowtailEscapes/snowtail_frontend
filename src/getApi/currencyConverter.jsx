import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const [multiple, setMultiple] = useState(1);

  useEffect(() => {
    if (currency.trim() === "") return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currency]);

  const handleMultipleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setMultiple(Number(value));
    }
  };

  return (
    <div className="m-5 p-10">
      <h1>Currency Converter</h1>
      <select
        className="border border-black"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="inr">INR</option>
        <option value="jpy">JPY</option>
        {/* Add more currency options as needed */}
      </select><br/>
      <input 
        value={multiple} 
        onChange={handleMultipleChange} 
        className="border border-black" 
      />
      {data && data[currency] ? (
        <>
          <div>
            {multiple} {currency.toUpperCase()} = {(multiple * data[currency].usd).toFixed(2)} USD
          </div>
          <div>
            {multiple} {currency.toUpperCase()} = {(multiple * data[currency].inr).toFixed(2)} INR
          </div>
        </>
      ) : (
        <div>Select a valid currency.</div>
      )}
    </div>
  );
};

export default CurrencyConverter;
