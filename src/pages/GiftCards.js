import React, { useState } from 'react';
import './Promotions.css';

const GiftCards = () => {
  const [amount, setAmount] = useState('50');

  const amounts = ['25','50','75','100'];

  const onPurchase = (e) => {
    e.preventDefault();
    alert(`Gift card purchase: $${amount}. (Stripe integration placeholder)`);
  };

  return (
    <div className="promotions-page">
      <div className="container">
        <h1>Gift Cards & E‑Vouchers</h1>
        <p>Send the perfect gift instantly via email. Redeemable in‑store for any service.</p>
        <form className="gift-card-form" onSubmit={onPurchase}>
          <label htmlFor="amount">Amount</label>
          <div className="amounts">
            {amounts.map(a => (
              <button type="button" key={a} className={`amount ${amount===a?'active':''}`} onClick={()=>setAmount(a)}>${a}</button>
            ))}
          </div>
          <button type="submit" className="btn btn-primary" aria-label={`Purchase $${amount} gift card`}>Purchase with Stripe</button>
        </form>
      </div>
    </div>
  );
};

export default GiftCards;
