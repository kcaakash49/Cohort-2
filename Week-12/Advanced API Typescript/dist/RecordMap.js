"use strict";
const userData = {
    "aakash": {
        id: 1,
        address: "Manigram"
    },
    "kc": {
        id: 2,
        address: "Butwal"
    }
};
console.log(userData.kc.address);
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
const mapUsers = new Map();
mapUsers.set('abc123', { id: 'abc123', name: 'John Doe' });
mapUsers.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
const user3 = mapUsers.get('abc123');
console.log(user3);
console.log(mapUsers);
