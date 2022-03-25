interface User{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    dob: Date;
    picture: string;
    address: Address;
    cars: number[];
    booked: number[];
}

interface Address{
    street: string;
    nr: string;
    zip: number;
    city: string;
}


export default User;