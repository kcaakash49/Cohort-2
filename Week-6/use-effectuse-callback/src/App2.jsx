import React, { useEffect, useMemo, useState } from "react";

const App2 = () => {
  const [num, setNum] = useState(0);

  const [count, setCount] = useState(0);

  let sum = useMemo(()=>{
    let add = 0;
    for (let i = 0; i <= num; i++) {
      add = add + i;
    }
    return add;
  },[num])



  function handleChange(e) {
    setNum(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={num} />
      <div>The sum is {sum}</div>
      <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
    </div>
  );
};

export default App2;
