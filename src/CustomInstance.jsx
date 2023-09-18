import axios from "axios";
import { useEffect, useState } from 'react';


const url= 'https://jsonplaceholder.typicode.com/todos';


export default function CustomInstance() {
  const [todos, setTodos] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await axios.get(url);
      console.log(resp);
      setTodos(resp.data);

      setIsPending(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <>
      <h2 style={{ border: "solid green" }}>custom instance</h2>
      {todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}
