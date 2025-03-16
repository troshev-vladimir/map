import express from 'express'

const router = express.Router()

// Mock data
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
  {
    id: 2,
    date: '2024-02-02',
    type: 'expense',
    amount: 5000,
    description: 'Оплата подрядчику',
  },
]

router.get('/', (req, res) => {
  res.json(store)
})

export default router
