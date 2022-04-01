interface Car {
  id: number;
  hostUserId: number;
  make: string;
  model: string;
  type: string;
  year: number;
  images: Images[];
  details: Details;
  features: string[];
  description: string;
  guidelines: string[];
  ratings: Ratings[];
  pricePerDay: number;
  distancePerDay: number;
  bookings: Bookings[];
  address: Address;
}

interface Images {
  id: number;
  contentType: string;
  content: Content
}

interface Content {
  type: number;
  data: string
}

interface Details {
  fuelType: string;
  seats: number;
  doors: number;
  hp: number;
  transmission: string;
}

interface Ratings {
  author: string;
  date: Date;
  rating: number;
  text: string;
}

interface Bookings {
  user: string;
  from: string;
  until: string;
}

interface Address {
  street: string;
  number: string;
  city: string;
  zip: number;
}

export default Car;
