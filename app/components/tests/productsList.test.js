const React = require('react');
const { shallow } = require('enzyme');
const ProductList = require('../productsList');

describe('productList Component', () => {
  const props = {
    items: [
      {
        id: 'MLA914195606',
        title: 'Notebook Hp 240 G7 14 , Intel Celeron N4000 8…l Uhd Graphics 600 1366x768px Windows 10 Home',
        price: {},
        picture: 'http://http2.mlstatic.com/D_705684-MLA44922791090_022021-I.jpg',
        condition: 'new'
      },
      {
        id: 'MLA914113787',
        title: 'Notebook Exo Smart C25 Plus Gris 14 , Intel C… Intel Hd Graphics 1366x768px Windows 10 Home',
        price: {},
        picture: 'http://http2.mlstatic.com/D_784460-MLA45377134319_032021-I.jpg',
        condition: 'new'
      },
      {
        id: 'MLA914119829',
        title: 'Notebook Hp Pavilion X360 15-dq1003la Plata T…os Intel Uhd 60 Hz 1366x768px Windows 10 Home',
        price: {},
        picture: 'http://http2.mlstatic.com/D_744701-MLA45001860222_022021-I.jpg',
        condition: 'new'
      },
      {
        id: 'MLA913648131',
        title: 'Notebook Banghó Max L4 I1 Negra 14 , Intel Ce…sd, Amd Radeon 530 1366x768px Windows 10 Home',
        price: {},
        picture: 'http://http2.mlstatic.com/D_925102-MLA44939831146_022021-I.jpg',
        condition: 'new'
      },
    ],
    breadcrumb: [
      { id: 'MLA1648', name: 'Computación' },
      { id: 'MLA430687', name: 'Laptops y Accesorios' },
      { id: 'MLA1652', name: 'Notebooks' }
    ]
  }

  it('render productList correctly', () => {
    const wrapper = shallow(<ProductList {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});
