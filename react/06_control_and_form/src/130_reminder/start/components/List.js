const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.key}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
