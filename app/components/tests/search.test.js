const React = require('react');
const { shallow } = require('enzyme');
const Search = require('../search');

describe('search Component', () => {
  it('render search correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  })
  it('simulate onChange', () => {

    const event = {
      preventDefault: () => { },
      target: { value: 'the-value' }
    };

    const wrapper = shallow(<Search />);
    wrapper.find('input').at(0).simulate('change', event);
    expect(wrapper.find('input').at(1).prop('value')).toBe('the-value');

  })
});
