import type { IMapRepository } from '@/app/repositories/Map.interface'
import L, { type LatLngLiteral } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default class LeafletRepository implements IMapRepository {
  public map: L.Map | null = null
  public markers: L.Marker[] = []
  private layerControl: L.Control.Layers | null = null

  constructor(id: string, coordinates?: LatLngLiteral) {
    this.initMap(id, coordinates)
  }

  private initMap(id: string, coordinates?: LatLngLiteral) {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    })

    const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France',
    })

    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)',
    })

    const baseMaps = {
      OpenStreetMap: osm,
      '<span>OpenStreetMap.HOT</span>': osmHOT,
      OpenTopoMap: openTopoMap,
    }

    const map = L.map(id, {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [osm],
    })

    if (coordinates) map.setView([coordinates.lat, coordinates.lng], 13)
    else map.locate({ setView: true, maxZoom: 13 })

    this.layerControl = L.control.layers(baseMaps).addTo(map)

    this.map = map
  }

  private createMarker(coordinates: LatLngLiteral, popupText: string | L.Popup): L.Marker {
    const options = {
      riseOnHover: true,
      pane: 'markerPane',
      autoPanOnFocus: true,
    }

    const marker = L.marker([coordinates.lat, coordinates.lng], options)
    marker.bindPopup(popupText)
    // marker.bindTooltip('my tooltip text').openTooltip()
    this.markers.push(marker)

    return marker
  }

  public addMarkerToMap(coordinates: LatLngLiteral, popupText: string | L.Popup) {
    if (!this.map) return

    const marker = this.createMarker(coordinates, popupText)
    marker.addTo(this.map)
  }

  public addMarkerToLayer(coordinates: LatLngLiteral, popupText: string | L.Popup) {
    if (!this.map) return
    this.createMarker(coordinates, popupText)
    const trip = L.layerGroup(this.markers)
    this.layerControl?.addOverlay(trip, 'trip')
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
    L.layerGroup(this.markers)
    this.markers.forEach((marker) => {
      this.map?.removeLayer(marker)
      this.layerControl?.removeLayer(marker)
    })

    this.markers = []
  }
}
