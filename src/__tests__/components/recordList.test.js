import React from "react";
import { shallow } from "enzyme";
import joJson, { toJson } from "enzyme-to-json";
import configureStore from "redux-mock-store";
import RecordList from "../../components/recordList";
import initialState from "../../reducers/initialState";

const mockStore = configureStore();
const store = mockStore(initialState);

describe("render()", () => {
  test("should render the component", () => {
    const wrapper = shallow(<RecordList records={initialState.records} />);
    // const component = wrapper.dive();
    expect(wrapper).toMatchSnapshot();
  });
});
