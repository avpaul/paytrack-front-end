import initialState from './initialState';
import * as types from '../actionTypes';

export default function accounts(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ACCOUNT:
      return { ...state, accounts: state.accounts.concat(action.payload) };

    case types.CREATE_NEW_RECORD:
      return { ...state, records: state.records.concat(action.payload) };
    default:
      return state;
  }
}
