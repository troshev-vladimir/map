export interface LatLng {
  lat: number
  lng: number
}

export abstract class IMapRepository {
  abstract addMarker(coordinates: LatLng, popupText: string | unknown): unknown
  abstract addPolygon(points: LatLng[], polygonText?: string): void
  abstract addClickHandler(callBack?: (coordinates: LatLng) => void): void
  abstract selectMarker(marker: unknown): void
  abstract removeMarkers(): void
}
