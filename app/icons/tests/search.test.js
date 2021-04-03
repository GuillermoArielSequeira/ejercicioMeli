const React = require('react');
const { shallow } = require('enzyme');
const Search = require('../serach');

describe('Search svg Component', () => {
  it('render Search correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  })
});
