const React = require('react');
const { shallow } = require('enzyme');
const Home = require('../home');

describe('Home Component', () => {
  it('render Home correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  })
});
