const axios = require('axios');
const ItemService = require('../item-services');

jest.mock('axios');

describe('test item-services.js', () => {

  // test('test getItem fails', async () => {
  //   const resp_descrip = { data: {} };
  //   const resp_breadCrumb = { data: {} };
  //   axios.get
  //     .mockReturnValueOnce(Promise.reject({ error: 'error' }))
  //     .mockReturnValueOnce(Promise.resolve(resp_descrip))
  //     .mockReturnValueOnce(Promise.resolve(resp_breadCrumb));
  //   const resp_item_service = await ItemService.getItem('query');
  //   expect(resp_item_service).toEqual({});

  // });


  test('test getItem', async () => {
    const resultsItem = {
      id: 'MLA885158557',
      site_id: 'MLA',
      title: 'iPhone 11 64 Gb Negro',
      price: 129990,
      category_id: 'MLA1055',
      condition: 'new',
      currency_id: 'ARS',
      sold_quantity: 5,
      shipping: { free_shipping: true },
      address: { state_name: 'buenos aires' }
    };

    const resp_item = { data: resultsItem };
    const resp_descrip = { data: {} };
    const resp_breadCrumb = { data: {} };
    axios.get
      .mockReturnValueOnce(Promise.resolve(resp_item))
      .mockReturnValueOnce(Promise.resolve(resp_descrip))
      .mockReturnValueOnce(Promise.resolve(resp_breadCrumb));
    const resp_item_service = await ItemService.getItem('query');
    expect(resp_item_service).toEqual({
      "author": {
        "lastName": "Sequeira",
        "name": "Guille",
      },
      "item": {
        "breadcrumb": undefined,
        "condition": "new",
        "description": undefined,
        "free_shipping": true,
        "id": "MLA885158557",
        "picture": undefined,
        "price": {
          "amount": "129,990",
          "currency": "ARS",
          "decimals": 0,
        },
        "sold_quantity": 5,
        "title": "iPhone 11 64 Gb Negro",
      },
    });

  });
  test('test getItemListing', async () => {
    const resultsResponse = {
      results: [{
        id: 'MLA885158557',
        site_id: 'MLA',
        title: 'iPhone 11 64 Gb Negro',
        price: 129990,
        category_id: 'MLA1055',
        condition: 'new',
        currency_id: 'ARS',
        sold_quantity: 5,
        shipping: { free_shipping: true },
        address: { state_name: 'buenos aires' }
      },
      {
        id: 'MLA909924920',
        site_id: 'MLA',
        title: 'iPhone 11 128 Gb Negro',
        price: 150995,
        category_id: 'MLA1055',
        condition: 'new',
        currency_id: 'ARS',
        sold_quantity: 5,
        shipping: { free_shipping: true },
        address: { state_name: 'buenos aires' }
      }]
    };
    const resp_item = { data: resultsResponse };
    const resp_breadCrumb = { data: {} };
    axios.get.mockReturnValueOnce(Promise.resolve(resp_item)).mockReturnValueOnce(Promise.resolve(resp_breadCrumb));
    const resp_items = await ItemService.getItemListing('query');
    expect(resp_items).toEqual({
      "author": { "lastName": "Sequeira", "name": "Guille" },
      "breadcrumb": undefined,
      "categories": ["MLA1055", "MLA1055"],
      "items": [{
        "condition": "new",
        "free_shipping": true,
        "id": "MLA885158557",
        "location": "buenos aires",
        "picture": undefined,
        "price": {
          "amount": "129,990",
          "currency": "ARS",
          "decimals": 0
        },
        "sold_quantity": 5,
        "title": "iPhone 11 64 Gb Negro"
      },
      {
        "condition": "new",
        "free_shipping": true,
        "id": "MLA909924920",
        "location": "buenos aires",
        "picture": undefined,
        "price": {
          "amount": "150,995",
          "currency": "ARS", "decimals": 0
        },
        "sold_quantity": 5,
        "title": "iPhone 11 128 Gb Negro"
      }]
    });
  })

})
