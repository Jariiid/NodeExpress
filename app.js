import express from 'express'
const app = express()
const port = 3000

import { products } from './data.js';

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})