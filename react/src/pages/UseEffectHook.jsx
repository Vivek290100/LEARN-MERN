import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [id, setId] = useState(0);
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, [id]);
  return(
  <div>
    <div>{data ? data.title : "loading..."}</div>
    <div>
      <button onClick={()=>setId(id+1)}>click</button>
      <h1>{id}</h1>
    </div>
  </div>
  )
};

export default UseEffectHook;
