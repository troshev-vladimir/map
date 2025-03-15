import express, { json } from 'express'

// /home/vladimir/Desktop/test/101-grooup/src/server/index.js
const store = [
  {
    id: 1,
    date: '2024-02-01',
    type: 'income',
    amount: 15000,
    description: 'Оплата за проект',
  },
  {
    id: 2,
    date: '2024-02-02',
    type: 'expense',
    amount: 5000,
    description: 'Оплата подрядчику',
  },
]
const app = express()
const PORT = process.env.PORT || 3000

app.use(json())
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/api/transactions', (req, res) => {
  res.json(store)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
