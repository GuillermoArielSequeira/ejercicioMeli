const axios = require('axios');

const getDecimalsFromPrice = amount => amount % 1 !== 0 // --> esta condicion es para chequear si un numero tiene decimales
  ? parseInt(amount.toString().split('.')[1]) : 0;

const getItem = async id => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}`)
    const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    console.log(response.data);
    const itemDto = {
      author: {
        name: 'Guille',
        lastName: 'Sequeira'
      },
      item: {
        id: response.data.id,
        title: response.data.title,
        price: {
          currency: response.data.currency_id,
          amount: new Intl.NumberFormat('de-DE').format(Math.trunc(response.data.price)), // -> le saca los decimales al amount
          decimals: getDecimalsFromPrice(response.data.price)
        },
        picture: response.data.pictures[0].secure_url,
        condition: response.data.condition,
        free_shipping: response.data.shipping.free_shipping,
        sold_quantity: response.data.sold_quantity,
        description: descriptionResponse ? descriptionResponse.data.plain_text : ''
      }
    };
    return itemDto;

  } catch (e) {
    console.log(e);
  }
}

const getItemListing = async q => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search`, {
      params: {
        q,
        limit: 4
      },
    });
    const items = [];
    response.data.results.forEach((item) => {
      const currentItem = {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: new Intl.NumberFormat('de-DE').format(Math.trunc(item.price)), // -> le saca los decimales al amount
          decimals: getDecimalsFromPrice(item.price)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        location: item.address.state_name,
        description: "description"
      }
      items.push(currentItem);
    })

    const listingDTO = {
      author: {
        name: 'Guille',
        lastName: 'Sequeira'
      },
      items,
      categories: response.data.results.map(item => item.category_id)
    };
    return listingDTO;

  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getItemListing,
  getItem
};
