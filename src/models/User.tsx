interface User{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    dob: Date;
    picture: BinaryData;
    address: Address;
}

interface Address{
    street: string;
    nr: string;
    zip: number;
    city: string;
}


export default User;