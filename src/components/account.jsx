import React from 'react';
import propTypes from 'prop-types';
import './account.scss';

const formatAmount = (amount) => {
  const stringLength = amount.length;
  let parts = [];
  for (let i = stringLength; i > 0; i -= 3) {
    parts.push(amount.substring(i - 3, i));
  }
  parts = parts.reverse();
  const formatedAmount = parts.join(', ');
  return amount.length > 3 ? formatedAmount : amount;
};

const Account = ({ name, balance }) => (
  <div className="account">
    <span className="account-name">{name}</span>
    <span className="account-balance">{formatAmount(balance)}</span>
  </div>
);

Account.propTypes = {
  name: propTypes.string.isRequired,
  balance: propTypes.string.isRequired,
};

export default Account;
