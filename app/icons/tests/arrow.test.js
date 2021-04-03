const React = require('react');
const { shallow } = require('enzyme');
const Arrow = require('../arrow');

describe('Arrow svg Component', () => {
  it('render Arrow correctly', () => {
    const wrapper = shallow(<Arrow />);
    expect(wrapper).toMatchSnapshot();
  })
});
