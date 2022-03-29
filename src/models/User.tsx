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
    booked: Booked[];
}

interface Address{
    street: string;
    nr: string;
    zip: number;
    city: string;
}

interface Booked{
    carid: number;
    userid: number;
    from: Date;
    until: Date;
}


export default User;