const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

// environment variable or you can say constants
env.config();

// mongodb connection

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: false,
  })
  .then(() => {
    console.log('Database connected');
  });

app.use(cors());
app.use(express.json());
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
