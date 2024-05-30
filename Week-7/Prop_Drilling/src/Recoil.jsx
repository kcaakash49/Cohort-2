import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

const Recoil = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

function Count() {
    console.log("Count re-rendered")
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function Buttons() {
  const  setCount = useSetRecoilState(countAtom);   //recognizes a function to alter tehe countatom value
  console.log("Buttons rerendering")
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>    
      {/*  //count value will be passed as a parameter//*/}
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer/>
    </div>;
}

function EvenCountRenderer(){
    const isEven = useRecoilValue(evenSelector);
    return <div>
        {!isEven ? "It is even" : null}
    </div>
}
export default Recoil;
