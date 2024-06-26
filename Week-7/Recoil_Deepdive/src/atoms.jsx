import { atom,selector } from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default:104
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})
export const messageAtom = atom({
    key:"messageAtom",
    default:0
})
export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom)
        const messageCount = get(messageAtom)
        const notificationCount = get(notificationAtom)
        return networkCount + jobsCount + messageCount + notificationCount;
    }
})