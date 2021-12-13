import React, { useState } from 'react';
import { render } from 'react-dom';
import Rate from './components/Rate';
import './style.css';

const App = () => {
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container">
      <h1>Exchange rate</h1>
      <div className="currency-info">
        <form>
          <div className="form-field">
            <label htmlFor="currency-select">Currency:</label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">American dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British pound</option>
            </select>
          </div>
        </form>
        <Rate />
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
