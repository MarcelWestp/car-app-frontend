interface User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    address: Address;
    ratings: Ratings[];
}

interface Address {
    street: string;
    number: string;
    zip: number;
    city: string;
}

interface Ratings {
    author: string;
    date: Date;
    rating: number;
    text: string;
}

export default User