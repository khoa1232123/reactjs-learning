const bcrypt = require('bcrypt');

const data = {
  users: [
    {
      name: 'Khoi',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt test',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      priceSale: 119,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      shortDec: 'high quality',
      description: 'high quality product',
    },
  ],
};

module.exports = { data };
