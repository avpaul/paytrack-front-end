import { CREATE_ACCOUNT, CREATE_NEW_RECORD } from '../actionTypes';

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
let id = 1;

export function generateID() {
  id += 1;
  return id;
}

export function createAccount({ name, balance }) {
  return {
    type: CREATE_ACCOUNT,
    payload: {
      id: generateID(),
      name,
      balance,
    },
  };
}

export function createRecord({
  category, account, notes, amount, type,
}) {
  const recordDate = new Date();
  const date = `${recordDate.getMonth() + 1}/${recordDate.getDate()}/${recordDate.getFullYear()}`;
  return {
    type: CREATE_NEW_RECORD,
    payload: {
      id: generateID(),
      category,
      account,
      notes,
      amount: parseInt(amount, 10),
      date,
      type,
    },
  };
}
