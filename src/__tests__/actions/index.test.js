import configureStore from "redux-mock-store";
import { createAccount, generateID } from "../../actions";
import { CREATE_ACCOUNT } from "../../actionTypes";

const mockStore = configureStore();
const store = mockStore();

describe("action creators", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("should create a new account", () => {
    const account = {
      name: "cash",
      balance: "43000"
    };
    const expectedAction = {
      type: CREATE_ACCOUNT,
      payload: {
        ...account,
        id: expect.any(Number)
      }
    };

    // store.dispatch(createAccount(account));
    // expect(store.getActions()).toEqual(
    //   expect.arrayContaining([expectedAction])
    // );
    expect(createAccount(account)).toMatchObject(expectedAction);
  });
});
