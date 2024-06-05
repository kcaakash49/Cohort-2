interface User {
    id: number,
    name: string;
    email: string;
    created: Date;
}

type userProfile = Pick<User, 'name' | 'email'>;

const displayUser = (user : userProfile) => {
    console.log(user.name + user.email)
}


displayUser({name:"aakash", email:"kcaakash@gmail.com"})
