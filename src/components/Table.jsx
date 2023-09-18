import TableList from "./TableList";

export default function Table({
  todos,
  paginatedTodos,
  currentPage,
  changePaginate,
  pagesNumbers,
}) {

  return (
    <>
      <div>
        {!todos ? (
          "Loading"
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTodos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>
                    <p
                      className={
                        todo.completed ? "btn btn-success" : "btn btn-danger"
                      }
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <TableList
          currentPage={currentPage}
          changePaginate={changePaginate}
          pagesNumbers={pagesNumbers}
        />
      </div>
    </>
  );
}
