import { useEffect, useState } from "react";


function useMousePointerHook(){

    const [position ,setPosition] = useState({x:0 , y:0})

    const handleMouseMove = (e) =>{
        setPosition({x:e.clientX ,y:e.clientY})
    }

    useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove)
        return ()=>{
            window.removeEventListener("mousemove",handleMouseMove)
        }
    },[])

    return position;


}

function App3(){
    const toDisplay = useMousePointerHook();

    return <div>
        The number is {toDisplay.x} {toDisplay.y}
    </div>
}

export default App3