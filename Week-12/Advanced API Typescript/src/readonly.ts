
type detail = {
    readonly name: string;
    readonly age : number
}

type detail1 = {
    name: string;
    age: number;
}

const user : detail = {
    name: "Aakash",
    age: 30
}

const user1 : Readonly<detail1> = {
    name: "kc",
    age:30
}

// user.age = 20
