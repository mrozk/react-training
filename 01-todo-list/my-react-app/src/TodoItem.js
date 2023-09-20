import React from 'react';

const TodoItem = ({ todo}) => (
    <div className="todo-item">
        <input
            type="checkbox"
            checked={todo.isCompleted}
        />
        <span className={todo.isCompleted ? 'completed' : ''}>{todo.text}</span>
    </div>
);

export default TodoItem;
