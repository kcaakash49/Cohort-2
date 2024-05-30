import React from 'react'
//Card Wrapper
const App2 = () => {
  return (
    <div>
      <CardWrapper innerComponent = {<TextComponent title = "Aakash"/>}/>
      <CardWrapper innerComponent = {<TextComponent title = "KC"/>}/>
    </div>
  )
}
function CardWrapper({innerComponent}){
    return <div style = {{border:"2px solid black",padding:10,margin:10}}>
        {innerComponent}
    </div>
}

function TextComponent({title}){
    return <div>
        hi there {title}
    </div>
}
export default App2
