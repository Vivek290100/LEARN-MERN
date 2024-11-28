import React, { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fun() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fun();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        UseEffect
          {data.map((user) => (
            <li key={user.id}>{user.name}------{user.username}</li>
          ))}
      </div>
    </>
  );
};

export default UseEffect;
