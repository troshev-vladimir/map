import L, { type LatLngLiteral } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default class LeafletRepository {
  private map: L.Map | null = null
  private markers: L.Marker[] = []

  constructor(id: string, coordinates: LatLngLiteral) {
    this.initMap(id, coordinates)
  }

  private initMap(id: string, coordinates: LatLngLiteral) {
    const map = L.map(id).setView([coordinates.lat, coordinates.lng], 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    this.map = map
  }

  public addMarker(coordinates: LatLngLiteral, popupText: string | L.Popup) {
    if (!this.map) return

    const options = {
      riseOnHover: true,
      pane: 'markerPane',
      autoPanOnFocus: true,
    }

    const marker = L.marker([coordinates.lat, coordinates.lng], options).addTo(this.map)
    // marker.bindTooltip('my tooltip text').openTooltip()
    marker.bindPopup(popupText)
    this.markers.push(marker)
    return marker
  }

  public addPolygon(points: LatLngLiteral[], polygonText?: string) {
    if (!this.map) return
    const polygon = L.polygon(points).addTo(this.map)

    if (polygonText) {
      polygon.bindPopup(polygonText)
    }
  }

  public addClickHandler(callBack?: (coordinates: LatLngLiteral) => void) {
    if (!this.map) return

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      if (callBack) {
        callBack(e.latlng)
      }
    })
  }

  public selectMarker(marker: L.Marker) {
    if (!this.map) return
    this.map.setView(marker.getLatLng(), 13)
    marker.openPopup()
  }

  public getMarkers() {
    if (!this.map) return
    return this.markers
  }

  public removeMarkers() {
    if (!this.map) return
    this.markers.forEach((marker) => {
      this.map?.removeLayer(marker)
    })

    this.markers = []
  }
}
