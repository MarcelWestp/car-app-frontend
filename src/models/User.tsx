interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    image: Image;
    address: Address;
    cars: number[];
    booked: Booked[];
    ratings: Ratings[];
}

interface Address {
    street: string;
    number: string;
    zip: number;
    city: string;
}

interface Image {
    id: number;
    contentType: string;
    content: Content
}

interface Content {
    type: number;
    data: string
}

interface Booked {
    carid: number;
    userid: number;
    from: Date;
    until: Date;
}

interface Ratings {
    author: string;
    date: Date;
    rating: number;
    text: string;
  }


export default User;