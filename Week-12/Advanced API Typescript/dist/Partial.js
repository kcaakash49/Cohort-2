"use strict";
const displayUser1 = (user) => {
    console.log((user.firstName || '') + (user.email || ''));
};
displayUser1({ firstName: "aakash" });
