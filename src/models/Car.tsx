interface Car {
  carid: number;
  hostUserId: number;
  make: string;
  model: string;
  type: string;
  year: number;
  images: string[];
  details: details;
  features: string[];
  description: string;
  guidelines: string[];
  ratings: ratings[];
  pricePerDay: number;
  distancePerDay: number;
  bookings: bookings[];
  address: address;
}

interface details {
  fueltype: string;
  seats: number;
  doors: number;
  hp: number;
  transmission: string;
}

interface ratings {
  rating: number;
  author: string;
  date: string;
  content: string;
}

interface bookings {
  user: string;
  from: string;
  until: string;
}

interface address {
  street: string;
  number: string;
  city: string;
  zip: number;
}

export default Car;
