import * as React from "react";
import { shallow } from "enzyme";
import 'jest-extended';
import * as renderer from 'react-test-renderer';

import { Header } from "../";

it("Check hard coded heading", () => {
    expect(shallow(<Header />).text()).toEqualCaseInsensitive('BBC RADIO');
});

it('Snapshot testing for header component', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});