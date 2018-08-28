import React from "react"
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"
import UserCard from "./index"

describe("testing postcard", () => {
  const wrapper = shallow(<UserCard/>)

  it('renders properly', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it("changes state after modeal is shown", () => {
  //   expect(wrapper.state().isModalOpen).toEqual(false);
  //   wrapper.instance().showModal();
  //   expect(wrapper.state().isModalOpen).toEqual(true)
  // })
})
