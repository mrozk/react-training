import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
    <div className="todo-list">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
);

export default TodoList;