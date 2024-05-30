import { useContext, useState } from "react";
import { CountContext } from "./component/Context";
// import Buttons from './component/Buttons'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value = {{count,setCount}}>
        <Count/>
      </CountContext.Provider>
    </div>
  );
}

//passing state using prop drilling
// function Count({ count, setCount }) {
//   return (
//     <div>
//       <CountRenderer count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   );
// }


function Count() {
  console.log("Count Re-rendered")
  return (
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  );
}

function Buttons() {
  const {count,setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function CountRenderer() {
  const {count} = useContext(CountContext);
  return <div>{count}</div>;
}

export default App;
