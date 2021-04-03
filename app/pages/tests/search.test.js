const React = require('react');
const { shallow } = require('enzyme');
const Search = require('../search');

describe('ProductInfo Component', () => {
  it('render ProductInfo correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  })
});
