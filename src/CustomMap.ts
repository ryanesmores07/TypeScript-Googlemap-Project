export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      map: this.googleMap,
    });

    marker.addListener("click", () => {
      const contentString = mappable.markerContent();

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
