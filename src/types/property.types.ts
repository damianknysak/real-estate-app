export interface Occupancy {
  minValue: number;
  maxValue: number;
}
export interface Property {
  type:
    | "Single-Family Home"
    | "Apartment"
    | "Condominium"
    | "Townhouse"
    | "Multi-Family Home";
  name: string;
  description: string;
  images: string[] | undefined;
  numberOfRooms: number;
  occupancy: Occupancy;
  floorSize: number;
  cardType: "sell" | "lease";
  leaseLength?: number;
  leasePrice?: number;
  sellPrice?: number;
  numberOfBathroomsTotal: number;
  numberOfBedrooms: number;
  permittedUsage: string;
  petsAllowed: string;
  yearBuilt: number;
  address: string;
  telephone: string;
}
