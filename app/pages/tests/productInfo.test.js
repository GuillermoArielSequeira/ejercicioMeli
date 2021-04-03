const React = require('react');
const { shallow } = require('enzyme');
const ProductInfo = require('../productInfo');

describe('ProductInfo Component', () => {
  it('render ProductInfo correctly', () => {
    const wrapper = shallow(<ProductInfo />);
    expect(wrapper).toMatchSnapshot();
  })
});
