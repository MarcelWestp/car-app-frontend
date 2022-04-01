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
    cars: Car[];
    bookings: Bookings[];
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

interface Bookings {
    id: number;
    carId: number;
    userId: number;
    from: string;
    until: string;
}

interface Ratings {
    author: string;
    date: Date;
    rating: number;
    text: string;
}

interface Car {
    id: number;
    hostUserId: number;
    make: string;
    model: string;
    year: number;
}


export default User;