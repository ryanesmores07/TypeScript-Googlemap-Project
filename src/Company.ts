import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company name: ${this.name}</h1> 
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
            `;
  }
}
