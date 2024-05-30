import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { Todos } from "./todos";


// export const notifications = atom({
//     key:"notifications",
//     default:{
//         network:4,
//         jobs:6,
//         messaging:3,
//         notifications:3
//     }
// })


//async data queries
export const notifications = atom({
    key:"networkAtom",
    default:selector({
        key:"networkAtomSelector",
        get:async ()=>{
            // await new Promise (r=>setTimeout(r,5000))   //sleeps for 5 sec
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const totalNotification = get(notifications);
        return totalNotification.network + totalNotification.jobs + totalNotification.messaging + totalNotification.notifications
    }
})

//atom family

export const todoFamilyAtom = atomFamily({
    key:"todoAtomFamily",
    default:(id)=>{
        return Todos.find(x => x.id === id);}
})

//selector Family

// export const todoSelectorAtom = atomFamily({
//     key:"todoSelectorFamily",
//     default: selectorFamily({
//         key:"todoSelector",
//         get: (id)=> async()=>{
//             const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//             return res.data.todos
//         }
//     })
// })

//this and upper one is same
export const todoSelectorAtom = atomFamily({
    key:"todoSelectorFamily",
    default: selectorFamily({
        key:"todoSelector",
        get: function(id){
            return async function({get}){
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
                console.log("todoData",res.data)
                return res.data.todo
            }
        }
    })
})