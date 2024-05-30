import { useEffect, useState } from "react";

function useIsOnline(){
    const [online,setOnline] = useState(window.navigator.onLine);

    // useEffect(()=>{
    //     setInterval(()=>{
    //         if (window.navigator.onLine){
    //             setOnline(true)
    //             console.log("Became Online")
    //         }else{
    //             setOnline(false)
    //             console.log("Became Offline")
    //         }

    //     },2000)
    // },[])

    useEffect(()=>{
        window.addEventListener('online',()=>{
            setOnline(true);
            console.log("Became Online")
        })

        window.addEventListener("offline",()=>{
            setOnline(false);
            console.log("Became Offine")
        })
    },[])
    return online
}

export default function App2(){
    const isOnline = useIsOnline();
    if (isOnline){
        return "You are online"
    }
    return "You are offline"
}