import { memo, useState } from "react";

//We need to minimize rerendering as much as we can to optimize our app
//to optimize if you know the changing state applies to which component declare that state in the same component.
//can use memo to stop re rendering basically means it helps to skip rerendering a components if its props are unchanged.
function App() {
  const [title, setTitle] = useState("Aakash");

  return (
    <div>
      <button onClick={()=>setTitle(Math.random())}>Update the title</button>
      <br />
      <Header title={title}></Header><br></br>
      {/* <ChangingHeader/><br /> */}
      <Header title="KC"></Header><br></br>
      <Header title="KC"></Header><br></br>
      <Header title="KC"></Header><br></br>
      <Header title="KC"></Header><br></br>
      
    </div>
  );
}

// function ChangingHeader(){
//   const [title,setTitle] = useState("Aakash");

//   return(
//     <div>
//       <button onClick={()=>setTitle(Math.random())}>Update title</button>
//       <br/><br/>
//       {/* My name is {title} */}
//       <Header title = {title}/> 
//     </div>
//   )
// }

// function Header({ title }) {
//   console.log("re-rendered")
//   return (
//     <>
//       <div>My name is {title}</div>
//     </>
//   );
// }

const Header = memo(function({title}){
  return(
    <div>
      My name is {title}
    </div>
  )
})

export default App;
