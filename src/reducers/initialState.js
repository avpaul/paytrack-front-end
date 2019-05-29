import { generateID } from '../actions';

export default {
  accounts: [
    {
      id: generateID(),
      name: 'cash',
      balance: '43000',
    },
    {
      id: generateID(),
      name: 'bk',
      balance: '340200',
    },
    {
      id: generateID(),
      name: 'momo',
      balance: '43500',
    },
  ],
  records: [
    {
      id: generateID(),
      category: 'clothes & shoes',
      account: 'cash',
      notes: 'Bought a new pair of shoes for the coming party',
      amount: 38000,
      date: '05/28/2019',
      type: 'expense',
    },
    {
      id: generateID(),
      category: 'income',
      account: 'bk',
      notes: 'May 2019 salary',
      amount: 285499,
      date: '05/27/2019',
      type: 'income',
    },
    {
      id: generateID(),
      category: 'life & entertainment',
      account: 'cash',
      notes: "Celebrate Patrick's BD",
      amount: 20000,
      date: '05/06/2019',
      type: 'expense',
    },
  ],
};
