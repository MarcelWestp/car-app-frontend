interface Car {
  id: number;
  hostUserId: number;
  make: string;
  model: string;
  type: string;
  year: number;
  images: images[];
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

interface images {
  id: number;
  contentType: string;
  content: content
}

interface content {
  type: number;
  data: string
}

interface details {
  fuelType: string;
  seats: number;
  doors: number;
  hp: number;
  transmission: string;
}

interface ratings {
  author: string;
  date: Date;
  rating: number;
  text: string;
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
