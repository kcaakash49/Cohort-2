// ugly way
type forData = {
    [key :string] : {
        id: number;
        address: string;
    }
}

const userData: forData = {
    "aakash":{
        id : 1,
        address: "Manigram"
    },
    "kc" : {
        id : 2,
        address : "Butwal"
    }
}

console.log(userData.kc.address);


//records
interface User2 {
    id: string;
    name: string;
  }
  
  // Using Record to type an object with string keys and User values
  type Users = Record<string, User2>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

  //maps its java script concept

  type forMap = {
    id: string;
    name: string;
  }
  const mapUsers = new Map<string, forMap>()
  mapUsers.set('abc123', { id: 'abc123', name: 'John Doe' })
  mapUsers.set('xyz789', { id: 'xyz789', name: 'Jane Doe' })

  const user3 = mapUsers.get('abc123')
  console.log(user3)

  console.log(mapUsers)