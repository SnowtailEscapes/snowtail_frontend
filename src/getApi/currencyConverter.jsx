
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CurrencyConverter = ({ price }) => {
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const conversionRates = useSelector((state) => state.currency.conversionRates);

  const convertedPrice = (price * conversionRates[selectedCurrency]).toFixed(0);

  return (
    <div>
      <p className='text-nowrap font-ligh2'>{convertedPrice} {selectedCurrency.toUpperCase()}</p>
    </div>
  );
};

CurrencyConverter.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CurrencyConverter;
