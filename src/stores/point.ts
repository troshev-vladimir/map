import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PointMockApi } from '@/api/point/point.mock'
import type PointModel from '@/app/models/point.model'
import PointService from '@/app/services/point.service'
import useSystemData from './composables/useSystemData'

const pointService = new PointService(new PointMockApi())

export const usePointStore = defineStore('point', () => {
  const point = ref<PointModel>()
  const { isActual, isLoadding } = useSystemData()

  function fetchPoint(id: ID) {
    isLoadding.value = true

    if (isActual.value) {
      return new Promise((resolve) => {
        resolve(point.value)
        isLoadding.value = false
      })
    }

    return pointService.get(id).then((data) => {
      point.value = data
      isActual.value = true
      isLoadding.value = false
    })
  }

  return { fetchPoint, point, isLoadding }
})
