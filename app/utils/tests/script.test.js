const React = require('react');
const { shallow } = require('enzyme');
const Script = require('../script');

describe('Script Component', () => {
  it('render Script correctly', () => {
    const wrapper = shallow(<Script />);
    expect(wrapper).toMatchSnapshot();
  })
});
