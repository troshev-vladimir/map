import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PointApi } from '@/api/point/point.axios'
import type PointModel from '@/app/models/point.model'
import PointService from '@/app/services/point.service'

const pointService = new PointService(new PointApi())

export const useTransactionStore = defineStore('transaction', () => {
  const point = ref<PointModel>()

  function fetchPoint(id: ID) {
    return pointService.get(id).then((data) => {
      point.value = data
    })
  }

  return { fetchPoint, point }
})
