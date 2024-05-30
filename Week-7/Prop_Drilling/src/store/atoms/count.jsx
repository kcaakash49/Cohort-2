import { atom, selector, useRecoilValue } from "recoil";

export const countAtom = atom({
    key:"countAtom",    //unique name to identify atom
    default:0        //default value for the atom
});

//selectors similar functionality to useMemo

export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=>{
        const count = get(countAtom);
        return count%2
    }
});