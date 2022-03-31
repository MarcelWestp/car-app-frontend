import CarDetails from "./../components/car/car";


const fetchCar = () => ({
  carid: 1,
  hostUserId: 1,
  make: "Volkswagen",
  model: "ID.Buzz",
  type: "Van",
  year: 2022,
  images: [
    "https://cdn.pixabay.com/photo/2017/04/27/18/37/combi-2266348_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/09/19/59/vwbus-2615580_1280.jpg",
  ],
  details: {
    fueltype: "Gas",
    seats: 5,
    doors: 2,
    hp: 110,
    transmission: "automatic",
  },
  features: ["doors", "trunk", "engine", "navi"],
  description: "this car is awesome",
  guidelines: ["dont smoke", "no pets"],
  ratings: [
    {
      rating: 4,
      author: "david",
      date: "24.03.2020",
      content: "what a nice car!",
    },
    {
      rating: 5,
      author: "david",
      date: "24.03.2020",
      content: "what a nice car!",
    },
    {
      rating: 2,
      author: "david",
      date: "24.03.2020",
      content: "what a nice car!",
    },
  ],
  pricePerDay: 54,
  distancePerDay: 150,
  bookings: [{ user: "David", from: "11.01.22", until: "14.01.22" }],
  address: {
    street: "langestraße",
    number: "5",
    city: "Braunschweig",
    zip: 38106,
  },
});

const Cardetail = () => {

  


  return (
    <div>
      <CarDetails car={fetchCar()}/>
    </div>
  );
};

export default Cardetail;
