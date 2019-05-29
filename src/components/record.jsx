import React from 'react';
import propTypes from 'prop-types';
import './record.scss';

const CATEGORY_ICONS = [
  {
    icon: 'accessibility_new',
    name: 'clothes & shoes',
  },
  {
    icon: 'attach_money',
    name: 'income',
  },
  {
    icon: 'nature_people',
    name: 'life & entertainment',
  },
];

const getCategoryIcon = name => CATEGORY_ICONS.find(category => category.name === name).icon;

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

const formatDate = (date) => {
  const recordDate = new Date(date);
  const toDay = new Date(Date.now());
  if (
    recordDate.getDate() === toDay.getDate()
    && recordDate.getMonth() === toDay.getMonth()
    && recordDate.getFullYear() === toDay.getFullYear()
  ) {
    return 'today';
  }
  if (
    recordDate.getDate() + 1 === toDay.getDate()
    && recordDate.getMonth() === toDay.getMonth()
    && recordDate.getFullYear() === toDay.getFullYear()
  ) {
    return 'yesterday';
  }

  return date;
};

const Record = ({
  category, account, notes, amount, date, type, handler,
}) => {
  const formatedAmount = formatAmount(String(amount));
  return (
    <div className="record" role="button" tabIndex="0" onClick={handler}>
      <div className={`record-category-icon icon-${getCategoryIcon(category)}`}>
        <i className="material-icons">{getCategoryIcon(category)}</i>
      </div>
      <div className="record-description">
        <div className="record-description-left">
          <div className="record-category-name">{category}</div>
          <div className="record-account">{account}</div>
          <div className="record-notes">{`"${notes}"`}</div>
        </div>
        <div className="record-description-right">
          <div className={`record-amount record-type-${type}`}>
            {type === 'income' ? `RWF ${formatedAmount}` : `- RWF ${formatedAmount}`}
          </div>
          <div className="record-date">{formatDate(date)}</div>
        </div>
      </div>
    </div>
  );
};

Record.propTypes = {
  category: propTypes.string.isRequired,
  account: propTypes.string.isRequired,
  notes: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
};

export default Record;
