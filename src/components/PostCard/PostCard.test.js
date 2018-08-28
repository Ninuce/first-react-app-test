import React from "react"
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"
import PostCard, {sum} from "./index"

describe("testing postcard", () => {
  const wrapper = shallow(<PostCard/>)

  it('sums 2 numbers', () => {
    expect(sum(3, 5)).toEqual(8);
  });

  it('renders properly', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('renders snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})
