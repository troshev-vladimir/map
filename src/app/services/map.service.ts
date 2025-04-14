import LeafletRepository from '@/libraries/Leaflet'
import { type LatLngLiteral } from 'leaflet'
import type PointModel from '../models/point.model'
import L from 'leaflet'

export default class MapService {
  constructor() {
    this.initInCurrentLocation()
  }

  private mapInstance: LeafletRepository | null = null

  public showTrip(points: PointModel[]) {
    this.mapInstance?.removeMarkers()

    points.forEach((point: PointModel) => {
      const coordinates: LatLngLiteral = {
        lat: point.coordinates[0],
        lng: point.coordinates[1],
      }

      this.mapInstance?.addMarker(
        coordinates,
        this.makePopupWithImage(point.name, point.description, point.photos[0], point.id),
      )
    })
  }

  private makePopupWithImage(name: string, description: string, image: string, id: ID) {
    return L.popup({
      minWidth: 300,
      maxWidth: 500,
      className: 'popup',
      autoClose: false,
      closeOnClick: false,
      autoPan: true,
    }).setContent(`
        <div class="popup">
          <h3 class="text-3xl font-bold underline">${name}</h3>
          <p>${description}</p>

          <img src="${image}" class="w100" alt="${name}" />
          <a href="/point/${id}">Подробнее</a>
        </div>
      `)
  }

  initInCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const currentCoordinates = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }

        this.mapInstance = new LeafletRepository('map', currentCoordinates)

        // const cb = (coordinates: LatLngLiteral) => {
        //   this.mapInstance?.addMarker(coordinates, 'coordinates')

        //   const markers = this.mapInstance?.getMarkers() ?? []
        //   const someMarker = markers[1]
        //   someMarker.getElement()?.classList.add('selected')
        // }

        // this.mapInstance.addClickHandler(cb)

        // setTimeout(() => {
        //   const newCoordinates: LatLngLiteral = {
        //     lat: currentCoordinates.lat + 0.01,
        //     lng: currentCoordinates.lng + 0.01,
        //   }
        //   this.mapInstance?.addMarker(newCoordinates, 'as2312312dasd')
        // }, 2000)
      },
      () => {
        console.error('Error getting location')
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    )
  }
}
