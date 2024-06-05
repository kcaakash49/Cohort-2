interface User {
    id: number,
    firstName: string;
    email: string;
    password:string;
    lastName:string;
    created: Date;
}

type userProfile1 = Pick<User, 'firstName' | 'email' | 'password'>;

type updateUserProfile = Partial<userProfile1>

const displayUser1 = (user : updateUserProfile) => {
    console.log((user.firstName || '') + (user.email || ''));
}


displayUser1({firstName:"aakash"})