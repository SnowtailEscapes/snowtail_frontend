import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCurrency } from '../redux/slice/currencySlice';

const CurrencyDropdown = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);

  const handleCurrencyChange = (e) => {
    dispatch(setSelectedCurrency(e.target.value));
  };

  return (
    <div className='text-ligh2 bg-main-brand'>
      <label htmlFor="currency-select">Currency : </label>
      <select className='bg-color1 border-none' id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="inr">INR</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;