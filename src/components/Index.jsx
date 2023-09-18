import { useState, useEffect } from "react";
import Table from "./Table";


function Index() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTodos, setPaginatedTodos] = useState([]);

  let pageSize = 10;
  // let pagesNumbers;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas);

        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize;
        let allShownTodos = datas.slice(startIndex, endIndex);
        setPaginatedTodos(allShownTodos);
      });
  }, []);

  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodos = todos.slice(startIndex, endIndex);
    setPaginatedTodos(allShownTodos);
  }, [currentPage]);

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  const pagesCount = Math.ceil(todos.length / pageSize);
  console.log(pagesCount);
  let pagesNumbers = Array.from(Array(pagesCount).keys());

  return (
    <section className="app">
      <Table
        todos={todos}
        paginatedTodos={paginatedTodos}
        currentPage={currentPage}
        changePaginate={changePaginate}
        pagesNumbers={pagesNumbers}
      />
    </section>
  );
}

export default Index;
