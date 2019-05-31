import reducers from "../../reducers";
import InitialState from "../../reducers/initialState";
import * as types from "../../actionTypes";

const initialState = {
  records: [],
  accounts: []
};

describe("reducers", () => {
  test("should return the initial test", () => {
    expect(reducers(undefined, {})).toEqual(InitialState);
  });

  test("should add a new account", () => {
    const account = {
      id: 3,
      name: "cash",
      balance: "43000"
    };
    const expectedState = {
      records: [],
      accounts: [account]
    };

    expect(
      reducers(initialState, { type: types.CREATE_ACCOUNT, payload: account })
    ).toEqual(expectedState);
  });
});
