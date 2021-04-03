const React = require('react');
const { shallow } = require('enzyme');
const ProductInfo = require('../productInfo');

describe('productInfo Component', () => {
  const props = {
    title: 'title product',
    picture: 'https://http2.mlstatic.com/D_705684-MLA44922791090_022021-O.jpg',
    price: { currency: 'ARS', amount: '62,975', decimals: 0 },
    condition: 'new',
    sold_quantity: 5,
    description: 'una descripciom',
    breadcrumb: [
      { id: 'MLA1648', name: 'Computación' },
      { id: 'MLA430687', name: 'Laptops y Accesorios' },
      { id: 'MLA1652', name: 'Notebooks' }
    ]
  }

  it('render productInfo correctly', () => {
    const wrapper = shallow(<ProductInfo {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});
